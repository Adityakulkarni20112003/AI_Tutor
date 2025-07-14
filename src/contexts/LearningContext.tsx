import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LearningContextType {
  completedVideos: number;
  totalVideos: number;
  dayStreak: number;
  totalWatchTime: string;
  currentVideo: number;
  markVideoComplete: (videoId: number) => void;
  setCurrentVideo: (videoId: number) => void;
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};

interface LearningProviderProps {
  children: ReactNode;
}

export const LearningProvider: React.FC<LearningProviderProps> = ({ children }) => {
  const [completedVideos, setCompletedVideos] = useState(2);
  const [currentVideo, setCurrentVideoState] = useState(1);
  const totalVideos = 10;
  const dayStreak = 12;
  const totalWatchTime = "2h 45m";

  const markVideoComplete = (videoId: number) => {
    setCompletedVideos(prev => Math.max(prev, videoId));
  };

  const setCurrentVideo = (videoId: number) => {
    setCurrentVideoState(videoId);
  };

  return (
    <LearningContext.Provider
      value={{
        completedVideos,
        totalVideos,
        dayStreak,
        totalWatchTime,
        currentVideo,
        markVideoComplete,
        setCurrentVideo,
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};