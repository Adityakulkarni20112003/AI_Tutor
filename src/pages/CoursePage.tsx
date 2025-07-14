import React from 'react';
import { Brain, Clock, Users, CheckCircle, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLearning } from '../contexts/LearningContext';

const CoursePage: React.FC = () => {
  const { completedVideos, totalVideos } = useLearning();

  const lessons = [
    {
      id: 1,
      title: "What is Artificial Intelligence?",
      description: "Learn the basics of AI and how it works in our daily lives",
      duration: "8:45",
      completed: true,
      icon: "🤖"
    },
    {
      id: 2,
      title: "History of AI",
      description: "Explore the fascinating journey of AI development",
      duration: "10:20",
      completed: true,
      icon: "📚"
    },
    {
      id: 3,
      title: "Machine Learning Basics",
      description: "Introduction to how machines learn from data",
      duration: "12:15",
      completed: false,
      icon: "🧠"
    },
    {
      id: 4,
      title: "AI in Daily Life",
      description: "Discover AI applications around us",
      duration: "9:30",
      completed: false,
      icon: "🏠"
    },
    {
      id: 5,
      title: "Neural Networks",
      description: "Understanding how AI mimics the human brain",
      duration: "11:45",
      completed: false,
      icon: "🕸️"
    }
  ];

  const progressPercentage = (completedVideos / totalVideos) * 100;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Introduction to AI Course
        </h1>
        <p className="text-lg text-gray-600">
          Explore the fascinating world of Artificial Intelligence through 10 engaging video lessons
        </p>
      </div>

      {/* Course Info Card */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-12 border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-6">
            <div className="bg-sky-100 rounded-2xl p-4">
              <Brain className="h-8 w-8 text-sky-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Introduction to AI</h2>
              <div className="flex items-center space-x-6 text-gray-600 text-base mt-2">
                <div className="flex items-center space-x-1">
                  <Users className="h-5 w-5" />
                  <span>{totalVideos} Videos</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-5 w-5" />
                  <span>~2 hours total</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-xl text-sm font-semibold">
            Beginner Friendly
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center text-base text-gray-600 mb-2">
            <span>Course Progress</span>
            <span>{completedVideos}/{totalVideos} videos completed</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-sky-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Lessons List */}
      <div className="space-y-6">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="text-3xl">{lesson.icon}</div>
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">
                      {lesson.id}. {lesson.title}
                    </h3>
                    {lesson.completed && (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    )}
                  </div>
                  <p className="text-gray-600 mb-3 leading-relaxed">{lesson.description}</p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Clock className="h-5 w-5" />
                      <span>{lesson.duration}</span>
                    </div>
                    {lesson.completed && (
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-xl text-sm font-semibold">
                        Completed
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <Link
                to="/videos"
                className="bg-sky-500 hover:bg-sky-600 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <PlayCircle className="h-6 w-6" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;