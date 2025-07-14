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
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Profile</h1>
        <p className="text-lg text-gray-600">
          Manage your account and track your learning progress
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Profile Information */}
        <div className="lg:col-span-2">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Profile Information</h2>
              <button className="flex items-center text-sky-500 hover:text-sky-600 transition-colors duration-300 font-medium">
                <Edit className="h-5 w-5 mr-2" />
                Edit
              </button>
            </div>

            {/* Profile Header */}
            <div className="flex flex-col items-center mb-12">
              <div className="bg-sky-100 rounded-full p-8 mb-6 shadow-lg">
                <div className="text-4xl">👨‍🎓</div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Alex Johnson</h3>
              <p className="text-lg text-gray-600 mt-2">AI Learning Enthusiast</p>
            </div>

            {/* Profile Fields */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3">
                  Full Name
                </label>
                <div className="bg-gray-50 rounded-xl p-4 flex items-center space-x-3">
                  <User className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-900 font-medium">Alex Johnson</span>
                </div>
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3">
                  Email
                </label>
                <div className="bg-gray-50 rounded-xl p-4 flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-900 font-medium">alex.johnson@email.com</span>
                </div>
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3">
                  Phone
                </label>
                <div className="bg-gray-50 rounded-xl p-4 flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-900 font-medium">+1 (555) 123-4567</span>
                </div>
              </div>

              <div>
                <label className="block text-base font-semibold text-gray-700 mb-3">
                  Location
                </label>
                <div className="bg-gray-50 rounded-xl p-4 flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-900 font-medium">San Francisco, CA</span>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-base font-semibold text-gray-700 mb-3">
                  Member Since
                </label>
                <div className="bg-gray-50 rounded-xl p-4 flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-900 font-medium">January 15, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Learning Stats and Achievements */}
        <div className="space-y-8">
          {/* Learning Stats */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">📊 Learning Stats</h3>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-sky-600">{dayStreak}</div>
                <div className="text-base text-gray-600 font-medium">Day Streak</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600">{totalWatchTime}</div>
                <div className="text-base text-gray-600 font-medium">Total Watch Time</div>
              </div>
              
              <div>
                <div className="flex justify-between items-center text-base text-gray-600 mb-2">
                  <span>Course Progress</span>
                  <span>{completedVideos}/{totalVideos}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-sky-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">🏆 Achievements</h3>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="text-center transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-sky-100 rounded-2xl p-4 mb-3 inline-block shadow-sm">
                    <Trophy className="h-8 w-8 text-sky-600" />
                  </div>
                  <div className="text-sm text-gray-600 leading-tight font-medium">
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