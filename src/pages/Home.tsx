import React from 'react';
import { Link } from 'react-router-dom';
import { Countdown } from '../components/Countdown';
import { Users, HeartHandshake, TrendingUp, ShieldCheck } from 'lucide-react';

export function Home() {
  // Next meeting: Last Sunday of the current month (mocked to a future date for demo)
  const nextMeetingDate = new Date();
  nextMeetingDate.setDate(nextMeetingDate.getDate() + 14);
  nextMeetingDate.setHours(18, 0, 0, 0);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-igbo-green text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 uli-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-igbo-green/90"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-igbo-gold/20 text-igbo-gold border border-igbo-gold/30 text-sm font-semibold tracking-widest mb-6">
            UMUOMA OGBE • AHIAZU MBAISE
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Okanime Age Grade <br className="hidden md:block" />
            <span className="text-igbo-gold">(Diaspora)</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light italic">
            "Udo na Oganihu!!!"
          </p>
          <p className="mt-2 text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Peace, Love, Unity & Progress. Connecting our brothers and sisters across the globe to build a stronger community back home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/auth" className="bg-igbo-gold text-igbo-green px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-500 transition-colors shadow-lg">
              Join the Community
            </Link>
            <Link to="/about" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-colors">
              Learn Our History
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-12 bg-igbo-light relative -mt-10 z-10 max-w-4xl mx-auto w-full px-4">
        <Countdown targetDate={nextMeetingDate} title="Next General Meeting (Zoom)" />
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-igbo-dark mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-igbo-terra mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: HeartHandshake, title: 'Peace (Udo)', desc: 'Fostering harmony and understanding among all members of our community.' },
              { icon: Users, title: 'Love (Ifunanya)', desc: 'Supporting one another in times of joy and in times of need.' },
              { icon: ShieldCheck, title: 'Unity (Ịdị n\'otu)', desc: 'Standing together as one indivisible family from Umuoma Ogbe.' },
              { icon: TrendingUp, title: 'Progress (Oganihu)', desc: 'Driving development and positive change in our hometown.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-igbo-light p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center group">
                <div className="w-16 h-16 mx-auto bg-igbo-green/10 text-igbo-green rounded-full flex items-center justify-center mb-6 group-hover:bg-igbo-green group-hover:text-white transition-colors">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-igbo-dark mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-igbo-terra text-white relative overflow-hidden">
        <div className="absolute inset-0 uli-pattern opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Support Our Homeland</h2>
          <p className="text-xl mb-10 text-orange-100">
            Through our collective monthly dues and Ajo contributions, we fund community projects, support our members, and build a legacy for the next generation.
          </p>
          <Link to="/auth" className="inline-block bg-white text-igbo-terra px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Access Member Portal
          </Link>
        </div>
      </section>
    </div>
  );
}
