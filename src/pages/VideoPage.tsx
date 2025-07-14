import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, Target } from 'lucide-react';
import { useLearning } from '../contexts/LearningContext';
import RobotIcon from '../components/RobotIcon';

const VideoPage: React.FC = () => {
  const { completedVideos, totalVideos, currentVideo } = useLearning();
  const progressPercentage = (completedVideos / totalVideos) * 100;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <div className="mb-8">
        <Link
          to="/course"
          className="flex items-center text-gray-600 hover:text-sky-600 transition-colors duration-300 font-medium"
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          Back to Course
        </Link>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Video Section */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              What is Artificial Intelligence?
            </h1>
            <p className="text-lg text-gray-600">
              Learn the basics of AI and how it works in our daily lives
            </p>
          </div>

          <div className="mb-8">
            <div className="text-base text-gray-600 mb-3">Video 1 of 10</div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-sky-500 h-3 rounded-full w-1/4 transition-all duration-500"></div>
            </div>
          </div>

          {/* Video Player */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-20 mb-8 flex flex-col items-center justify-center shadow-inner">
            <div className="mb-8">
              <RobotIcon />
            </div>
            <button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full p-6 mb-6 transition-all duration-300 transform hover:scale-110 shadow-lg">
              <Play className="h-10 w-10" />
            </button>
            <p className="text-lg text-gray-600 font-medium">Duration: 8:45</p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button className="flex items-center text-gray-500 hover:text-sky-600 transition-colors duration-300 font-medium">
              <ChevronLeft className="h-5 w-5 mr-2" />
              Previous
            </button>
            
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg font-semibold">
              ✓ Completed
            </button>
            
            <button className="flex items-center text-sky-500 hover:text-sky-600 transition-colors duration-300 font-medium">
              Next
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Course Progress */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Course Progress</h3>
            
            <div className="mb-6">
              <div className="flex justify-between items-center text-base text-gray-600 mb-2">
                <span>Completed</span>
                <span>{completedVideos}/{totalVideos}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-sky-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
            
            <p className="text-base text-gray-600 font-medium">{Math.round(progressPercentage)}% complete</p>
          </div>

          {/* Test Your Knowledge */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Test Your Knowledge</h3>
            
            <button className="w-full bg-yellow-300 hover:bg-yellow-400 text-gray-800 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3">
              <Target className="h-6 w-6" />
              <span>Take AI Quiz</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;