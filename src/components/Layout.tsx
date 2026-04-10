import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, UserCircle, LogOut, Globe2 } from 'lucide-react';

export function Layout() {
  const { isAuthenticated, logout, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Activities', path: '/activities' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Leadership', path: '/leadership' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-igbo-light font-sans">
      {/* Announcement Banner */}
      <div className="bg-igbo-terra text-white text-sm py-2 px-4 text-center font-medium">
        📢 Next General Meeting: Last Sunday of the Month | Zoom Link available in Member Dashboard
      </div>

      {/* Navbar */}
      <nav className="bg-igbo-green text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center flex-1 min-w-0 pr-4">
              <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
                <img src="/logo.jpg" alt="Okanime Age Grade Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-igbo-gold shrink-0 bg-white p-0.5 shadow-md" />
                <div className="min-w-0">
                  <h1 className="font-bold text-base sm:text-xl leading-tight truncate">Okanime Age Grade</h1>
                  <p className="text-[10px] sm:text-xs text-igbo-gold uppercase tracking-wider truncate">Diaspora • Umuoma Ogbe</p>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium hover:text-igbo-gold transition-colors ${
                    location.pathname === link.path ? 'text-igbo-gold border-b-2 border-igbo-gold py-1' : 'text-gray-200'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {isAuthenticated ? (
                <div className="flex items-center gap-4 ml-4 pl-4 border-l border-green-800">
                  <Link to="/dashboard" className="flex items-center gap-2 text-igbo-gold hover:text-white transition-colors">
                    <UserCircle size={20} />
                    <span className="text-sm font-medium">Dashboard</span>
                  </Link>
                  <button onClick={logout} className="text-gray-300 hover:text-white">
                    <LogOut size={20} />
                  </button>
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="ml-4 bg-igbo-gold text-igbo-green px-5 py-2 rounded-md font-bold text-sm hover:bg-yellow-500 transition-colors"
                >
                  Member Login
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-200 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-igbo-green border-t border-green-800 shadow-xl absolute w-full left-0">
            <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-md text-base font-medium text-white hover:bg-green-800 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 rounded-md text-base font-medium text-igbo-gold hover:bg-green-800 transition-colors"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => { logout(); setIsMenuOpen(false); }}
                    className="block w-full text-left px-4 py-3 rounded-md text-base font-medium text-red-300 hover:bg-green-800 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/auth"
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-md text-base font-bold text-igbo-green bg-igbo-gold mt-4 text-center shadow-md"
                >
                  Member Login
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-igbo-dark text-gray-300 py-12 border-t-4 border-igbo-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.jpg" alt="Okanime Age Grade Logo" className="w-10 h-10 rounded-full object-cover border border-igbo-gold bg-white p-0.5" />
                <h3 className="text-xl font-bold text-white">Okanime Diaspora</h3>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Umuoma Ogbe, Ahiazu Mbaise LGA.<br/>
                Connecting our people across the globe.
              </p>
              <p className="text-igbo-gold font-medium italic">"Udo na Oganihu!!!"</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-igbo-gold">About Us</Link></li>
                <li><Link to="/activities" className="hover:text-igbo-gold">Activities & Events</Link></li>
                <li><Link to="/leadership" className="hover:text-igbo-gold">Leadership Board</Link></li>
                <li><Link to="/auth" className="hover:text-igbo-gold">Member Portal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@okanime-diaspora.org</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li className="mt-4 pt-4 border-t border-gray-700">
                  <strong>Motto:</strong> Peace, Love, Unity & Progress.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Okanime Age Grade (Diaspora). All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
