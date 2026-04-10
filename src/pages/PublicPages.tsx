import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export function Auth() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  // Redirect if already logged in
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      login(email);
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-igbo-light py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 uli-pattern opacity-5 pointer-events-none"></div>
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-xl relative z-10 border-t-4 border-igbo-gold">
        <div>
          <img src="/logo.jpg" alt="Okanime Age Grade Logo" className="w-20 h-20 mx-auto rounded-full object-cover border-4 border-igbo-gold shadow-md" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-igbo-dark">
            Member Portal
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to access your dashboard, pay dues, and view minutes.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-igbo-green focus:border-igbo-green focus:z-10 text-base"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-igbo-green focus:border-igbo-green focus:z-10 text-base"
                placeholder="Password"
                defaultValue="password123"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-igbo-green hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-igbo-green transition-colors"
            >
              Sign in
            </button>
          </div>
          
          <div className="text-center text-sm">
            <p className="text-gray-600">Not a member yet?</p>
            <a href="#" className="font-medium text-igbo-terra hover:text-orange-800">
              Apply for membership
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-igbo-dark mb-8 text-center">About Us</h1>
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="lead text-xl text-gray-600 mb-8 text-center">
          Okanime Age Grade (Diaspora) represents the proud sons and daughters of Umuoma Ogbe, Ahiazu Mbaise LGA, living abroad.
        </p>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-10">
          <h2 className="text-2xl font-bold text-igbo-green mb-4">Our History</h2>
          <p className="mb-4">
            Founded with the vision of uniting our people far from home, Okanime Age Grade has grown into a formidable force for good. We recognize that while we may reside in different parts of the world, our roots remain firmly planted in Umuoma Ogbe.
          </p>
          <p>
            Through collective effort, we have supported numerous community projects, provided scholarships, and ensured that our cultural heritage is preserved and passed down to the next generation.
          </p>
        </div>

        <div className="bg-igbo-light p-8 rounded-xl border-l-4 border-igbo-gold mb-10">
          <h2 className="text-2xl font-bold text-igbo-dark mb-4">Constitution</h2>
          <p className="mb-6">
            Our operations are guided by a robust constitution that ensures fairness, transparency, and accountability in all our dealings.
          </p>
          <a href="#" className="inline-flex items-center gap-2 bg-igbo-dark text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">
            Download Constitution (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}

export function Activities() {
  const events = [
    { title: 'Annual August Meeting (Diaspora Edition)', date: 'August 15, 2026', type: 'Virtual & In-person' },
    { title: 'End of Year Gala & Fundraiser', date: 'December 20, 2026', type: 'In-person' },
    { title: 'Monthly General Meeting', date: 'Last Sunday of every month', type: 'Zoom' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-igbo-dark mb-4 text-center">Activities & Events</h1>
      <p className="text-center text-gray-600 mb-12">Stay updated with our community gatherings and initiatives.</p>
      
      <div className="grid gap-6">
        {events.map((event, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-l-4 border-l-igbo-terra">
            <div>
              <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
              <p className="text-gray-500 mt-1">{event.date}</p>
            </div>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
              {event.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Achievements() {
  const milestones = [
    { year: '2025', title: 'Community Health Center Renovation', desc: 'Raised $50,000 to renovate the primary healthcare center in Umuoma Ogbe.' },
    { year: '2024', title: 'Scholarship Endowment Fund', desc: 'Awarded full university scholarships to 10 deserving students from our community.' },
    { year: '2023', title: 'Solar Street Lights Project', desc: 'Installed 50 solar street lights along the main access roads in the village.' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-igbo-dark mb-4 text-center">Our Achievements</h1>
      <p className="text-center text-gray-600 mb-12">Milestones we've reached together and our goals for the future.</p>
      
      <div className="space-y-8">
        {milestones.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 border-l-4 border-l-igbo-gold">
            <div className="flex items-center gap-4 mb-2">
              <span className="bg-igbo-green text-white px-3 py-1 rounded-md font-bold">{item.year}</span>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            </div>
            <p className="text-gray-600 ml-16">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-igbo-light p-8 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-igbo-dark mb-4">Future Goals (2026-2030)</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Establish a modern ICT center for the local secondary school.</li>
          <li>Launch a micro-finance initiative for local market women.</li>
          <li>Build a community civic center for events and gatherings.</li>
        </ul>
      </div>
    </div>
  );
}

export function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-igbo-dark mb-4 text-center">Photo Gallery</h1>
      <p className="text-center text-gray-600 mb-12">Memories from our gatherings and projects.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="aspect-square bg-gray-200 rounded-xl overflow-hidden relative group">
            <img 
              src={`https://picsum.photos/seed/igboculture${item}/600/600`} 
              alt="Community Event" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white font-medium">Community Event {item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Leadership() {
  const leaders = [
    { role: 'Chairman', name: 'Chief Emeka Opara', location: 'USA' },
    { role: 'Vice Chairman', name: 'Dr. Chidi Nwosu', location: 'UK' },
    { role: 'Secretary General', name: 'Mr. Obinna Eze', location: 'Canada' },
    { role: 'Financial Secretary', name: 'Mrs. Ngozi Okafor', location: 'USA' },
    { role: 'PRO', name: 'Engr. Uche Nnamdi', location: 'Australia' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-igbo-dark mb-4 text-center">Leadership Board</h1>
      <p className="text-center text-gray-600 mb-12">Meet the dedicated individuals serving our community.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {leaders.map((leader, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center">
            <div className="w-20 h-20 mx-auto bg-igbo-green text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
              {leader.name.charAt(0)}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
            <p className="text-igbo-terra font-medium mt-1">{leader.role}</p>
            <p className="text-sm text-gray-500 mt-2">Based in: {leader.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
