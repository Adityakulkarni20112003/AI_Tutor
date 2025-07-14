import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/course', label: 'Course' },
    { path: '/videos', label: 'Videos' },
    { path: '/profile', label: 'Profile' },
  ];

  const NavLinks = () =>
    navItems.map((item) => (
      <Link
        key={item.path}
        to={item.path}
        onClick={() => setIsMenuOpen(false)}
        className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold w-full text-center md:w-auto ${
          location.pathname === item.path
            ? 'bg-white text-sky-700 shadow-md transform md:scale-105'
            : 'text-gray-700 hover:bg-white/50 hover:text-sky-700'
        }`}
      >
        {item.label}
      </Link>
    ));

  return (
    <header className="bg-gradient-to-r from-sky-200 to-sky-300 text-gray-800 py-4 px-6 shadow-lg backdrop-blur-sm rounded-b-3xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-white/90 rounded-xl p-2 shadow-md">
              <Bot className="h-6 w-6 text-sky-600" />
            </div>
            <span className="text-xl font-bold text-gray-800">AI Learning Hub</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1">
            <NavLinks />
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-sky-700 focus:outline-none p-2 rounded-md bg-white/50"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <div className="flex flex-col items-center space-y-2">
              <NavLinks />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;