import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Story from './components/Story';
import storyData from './data/storyData';

/**
 * Main App component
 * Manages application state and renders the appropriate screen (Home or Story)
 */
const App = () => {
  // State to track if we're showing the story or home screen
  const [showStory, setShowStory] = useState(false);
  
  // State to store the current node ID of the story
  const [currentNodeId, setCurrentNodeId] = useState('start');
  
  // State to track if there's a saved story in progress
  const [hasSavedStory, setHasSavedStory] = useState(false);
  
  // Load saved progress on component mount
  useEffect(() => {
    const savedNodeId = localStorage.getItem('storyNodeId');
    
    if (savedNodeId) {
      setCurrentNodeId(savedNodeId);
      setHasSavedStory(true);
    }
  }, []);
  
  /**
   * Handle starting a new story
   * Resets to the beginning node and shows the story screen
   */
  const handleStartStory = () => {
    setCurrentNodeId('start');
    setShowStory(true);
  };
  
  /**
   * Handle resuming a saved story
   * Loads the saved node ID and shows the story screen
   */
  const handleResumeStory = () => {
    const savedNodeId = localStorage.getItem('storyNodeId');
    
    if (savedNodeId) {
      setCurrentNodeId(savedNodeId);
      setShowStory(true);
    }
  };
  
  /**
   * Handle restarting the story
   * Returns to the home screen
   */
  const handleRestartStory = () => {
    setShowStory(false);
  };
  
  /**
   * Save story progress 
   * Stores the current node ID in localStorage
   */
  const handleSaveProgress = (nodeId) => {
    localStorage.setItem('storyNodeId', nodeId);
    setHasSavedStory(true);
  };
  
  return (
    <div className="app">
      {showStory ? (
        <Story 
          storyData={storyData}
          initialNode={currentNodeId}
          onRestart={handleRestartStory}
          onSaveProgress={handleSaveProgress}
        />
      ) : (
        <Home 
          onStartStory={handleStartStory}
          onResumeStory={handleResumeStory}
          hasActiveStory={hasSavedStory}
        />
      )}
    </div>
  );
};

export default App; 