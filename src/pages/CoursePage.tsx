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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12 min-h-screen">
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
          Introduction to AI Course
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          Explore the fascinating world of Artificial Intelligence through engaging video lessons.
        </p>
      </div>

      {/* Course Info Card */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg mb-8 md:mb-12 border border-gray-100">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="bg-sky-100 rounded-2xl p-3 md:p-4 flex-shrink-0">
              <Brain className="h-7 w-7 md:h-8 md:w-8 text-sky-600" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">Introduction to AI</h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:space-x-4 text-gray-600 text-sm md:text-base mt-2">
                <div className="flex items-center space-x-1.5">
                  <Users className="h-4 w-4 md:h-5 md:w-5" />
                  <span>{totalVideos} Videos</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Clock className="h-4 w-4 md:h-5 md:w-5" />
                  <span>~2 hours total</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-yellow-200 text-yellow-800 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold self-start sm:self-center">
            Beginner Friendly
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center text-sm md:text-base text-gray-600 mb-2">
            <span>Course Progress</span>
            <span>{completedVideos}/{totalVideos} videos completed</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 md:h-3">
            <div 
              className="bg-sky-500 h-2.5 md:h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Lessons List */}
      <div className="space-y-4 md:space-y-6">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-start space-x-4 md:space-x-6 flex-grow">
                <div className="text-2xl md:text-3xl mt-1">{lesson.icon}</div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-3 mb-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {lesson.id}. {lesson.title}
                    </h3>
                    {lesson.completed && (
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-green-500 flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-gray-600 mb-3 leading-relaxed text-sm md:text-base">{lesson.description}</p>
                  <div className="flex items-center space-x-4 md:space-x-6">
                    <div className="flex items-center space-x-2 text-gray-500 text-sm md:text-base">
                      <Clock className="h-4 w-4 md:h-5 md:w-5" />
                      <span>{lesson.duration}</span>
                    </div>
                    {lesson.completed && (
                      <span className="bg-green-100 text-green-800 px-2.5 py-1 rounded-lg text-xs md:text-sm font-semibold">
                        Completed
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <Link
                to="/videos"
                className="w-full sm:w-auto flex justify-center bg-sky-500 hover:bg-sky-600 text-white p-3 md:p-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex-shrink-0"
              >
                <PlayCircle className="h-5 w-5 md:h-6 md:w-6" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;