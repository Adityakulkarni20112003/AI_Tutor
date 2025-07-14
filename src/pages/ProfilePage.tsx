import React from 'react';
import { Edit, Calendar, Mail, Phone, MapPin, User, Trophy } from 'lucide-react';
import { useLearning } from '../contexts/LearningContext';

const ProfilePage: React.FC = () => {
  const { completedVideos, totalVideos, dayStreak, totalWatchTime } = useLearning();
  const progressPercentage = (completedVideos / totalVideos) * 100;

  const achievements = [
    { id: 1, title: 'First Video Completed', icon: '🏆', earned: true },
    { id: 2, title: 'Quiz Master', icon: '🏆', earned: true },
    { id: 3, title: 'Week Streak', icon: '🏆', earned: true },
    { id: 4, title: 'AI Explorer', icon: '🏆', earned: true },
    { id: 5, title: 'Perfect Score', icon: '🏆', earned: false },
    { id: 6, title: 'Course Complete', icon: '🏆', earned: false },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 min-h-screen">
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">My Profile</h1>
        <p className="text-base md:text-lg text-gray-600">
          Manage your account and track your learning progress
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Profile Information */}
        <div className="lg:col-span-2">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">Profile Information</h2>
              <button className="flex items-center text-sky-500 hover:text-sky-600 transition-colors duration-300 font-medium text-sm md:text-base">
                <Edit className="h-4 w-4 md:h-5 md:w-5 mr-1.5" />
                Edit
              </button>
            </div>

            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left mb-8 md:mb-12 gap-6">
              <div className="bg-sky-100 rounded-full p-6 md:p-8 mb-4 sm:mb-0 shadow-lg flex-shrink-0">
                <div className="text-3xl md:text-4xl">👨‍🎓</div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Alex Johnson</h3>
                <p className="text-base md:text-lg text-gray-600 mt-1">AI Learning Enthusiast</p>
              </div>
            </div>

            {/* Profile Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="bg-gray-50 rounded-xl p-3.5 flex items-center space-x-3">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-900 font-medium text-sm md:text-base">Alex Johnson</span>
                </div>
              </div>

              <div>
                <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <div className="bg-gray-50 rounded-xl p-3.5 flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-900 font-medium text-sm md:text-base truncate">alex.johnson@email.com</span>
                </div>
              </div>

              <div>
                <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  Phone
                </label>
                <div className="bg-gray-50 rounded-xl p-3.5 flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-900 font-medium text-sm md:text-base">+1 (555) 123-4567</span>
                </div>
              </div>

              <div>
                <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  Location
                </label>
                <div className="bg-gray-50 rounded-xl p-3.5 flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-900 font-medium text-sm md:text-base">San Francisco, CA</span>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2">
                  Member Since
                </label>
                <div className="bg-gray-50 rounded-xl p-3.5 flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-900 font-medium text-sm md:text-base">January 15, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Stats and Achievements */}
        <div className="space-y-6 md:space-y-8">
          {/* Learning Stats */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-5">📊 Learning Stats</h3>
            
            <div className="space-y-5">
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                <div className="text-base text-gray-600 font-medium">Day Streak</div>
                <div className="text-2xl font-bold text-sky-600">{dayStreak}</div>
              </div>
              
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                <div className="text-base text-gray-600 font-medium">Total Watch Time</div>
                <div className="text-2xl font-bold text-green-600">{totalWatchTime}</div>
              </div>
              
              <div>
                <div className="flex justify-between items-center text-sm md:text-base text-gray-600 mb-2">
                  <span>Course Progress</span>
                  <span>{completedVideos}/{totalVideos}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 md:h-3">
                  <div 
                    className="bg-sky-500 h-2.5 md:h-3 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-5">🏆 Achievements</h3>
            
            <div className="grid grid-cols-3 gap-4 md:gap-6">
              {achievements.map((achievement) => (
                <div key={achievement.id} className={`text-center transform hover:scale-105 transition-transform duration-300 ${!achievement.earned ? 'opacity-40' : ''}`}>
                  <div className={`rounded-2xl p-3 md:p-4 mb-2 inline-block shadow-sm ${achievement.earned ? 'bg-sky-100' : 'bg-gray-100'}`}>
                    <Trophy className={`h-7 w-7 md:h-8 md:w-8 ${achievement.earned ? 'text-sky-600' : 'text-gray-400'}`} />
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 leading-tight font-medium">
                    {achievement.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;