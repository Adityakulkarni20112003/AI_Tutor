import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, Trophy } from 'lucide-react';
import RobotIcon from '../components/RobotIcon';

const HomePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 min-h-screen">
      {/* Hero Section */}
      <div className="text-center mb-16 md:mb-20">
        <div className="flex justify-center mb-8 md:mb-10">
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-[2rem] p-8 md:p-10 shadow-xl">
            <RobotIcon />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
          Welcome to AI Learning Hub!
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          Discover the amazing world of Artificial Intelligence through fun videos and
          interactive quizzes designed for young learners.
        </p>
        
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-center md:space-y-0 md:space-x-6">
          <Link
            to="/course"
            className="w-full md:w-auto bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 md:px-12 md:py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            📚 Start Learning AI
          </Link>
          <Link
            to="/videos"
            className="w-full md:w-auto bg-yellow-300 hover:bg-yellow-400 text-gray-800 px-8 py-4 md:px-12 md:py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            🧠 Test Your Knowledge
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 md:gap-10">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="bg-sky-100 rounded-2xl p-5">
              <BookOpen className="h-10 w-10 text-sky-600" />
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
            Interactive Videos
          </h3>
          <p className="text-gray-600 text-center leading-relaxed">
            Learn AI concepts through engaging video lessons designed specifically for students.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="bg-yellow-100 rounded-2xl p-5">
              <Star className="h-10 w-10 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
            Track Progress
          </h3>
          <p className="text-gray-600 text-center leading-relaxed">
            Monitor your learning journey as you complete videos and master AI concepts.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="bg-green-100 rounded-2xl p-5">
              <Trophy className="h-10 w-10 text-green-600" />
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
            Fun Quizzes
          </h3>
          <p className="text-gray-600 text-center leading-relaxed">
            Test your understanding with interactive quizzes and earn achievements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;