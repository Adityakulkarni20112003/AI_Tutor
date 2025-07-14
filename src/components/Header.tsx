import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/course', label: 'Course' },
    { path: '/videos', label: 'Videos' },
    { path: '/profile', label: 'Profile' },
  ];

  return (
    <header className="bg-gradient-to-r from-sky-200 to-sky-300 text-gray-800 py-6 px-6 shadow-lg backdrop-blur-sm rounded-b-3xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-white/90 rounded-xl p-3 shadow-md">
            <Bot className="h-6 w-6 text-sky-600" />
          </div>
          <span className="text-xl font-bold text-gray-800">AI Learning Hub</span>
        </Link>
        
        <nav className="flex space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-semibold ${
                location.pathname === item.path
                  ? 'bg-white text-sky-700 shadow-md transform scale-105'
                  : 'text-gray-700 hover:bg-white/50 hover:text-sky-700'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;