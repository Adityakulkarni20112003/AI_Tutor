import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LearningProvider } from './contexts/LearningContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
import VideoPage from './pages/VideoPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <LearningProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/videos" element={<VideoPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </Router>
    </LearningProvider>
  );
}

export default App;