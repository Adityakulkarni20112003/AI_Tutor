import React from 'react';

const RobotIcon: React.FC = () => {
  return (
    <div className="relative transform hover:scale-105 transition-transform duration-300">
      <div className="bg-gradient-to-b from-sky-300 to-sky-400 w-20 h-20 rounded-3xl flex items-center justify-center shadow-lg">
        <div className="bg-gradient-to-r from-sky-600 to-sky-700 w-14 h-10 rounded-xl flex items-center justify-center">
          <div className="flex space-x-1">
            <div className="w-2.5 h-2.5 bg-cyan-300 rounded-full animate-pulse"></div>
            <div className="w-2.5 h-2.5 bg-cyan-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
      <div className="absolute -top-1 -left-1 w-3 h-3 bg-red-400 rounded-full shadow-sm"></div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full shadow-sm"></div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-gray-300 rounded-full shadow-sm"></div>
    </div>
  );
};

export default RobotIcon;