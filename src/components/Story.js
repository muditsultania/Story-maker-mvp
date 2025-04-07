import React, { useState, useEffect } from 'react';
import '../styles/Story.css';
import Logo from '../assets/logo';

/**
 * Story component - Displays the current story node and choice options
 * Handles user interactions and updates the story state
 */
const Story = ({ storyData, initialNode, onRestart, onSaveProgress }) => {
  // State to track the current node in the story
  const [currentNode, setCurrentNode] = useState(initialNode);
  
  // State to track animation for content changes
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Get the current node data from story data
  const nodeData = storyData[currentNode];
  
  // Effect to save progress whenever the current node changes
  useEffect(() => {
    if (onSaveProgress) {
      onSaveProgress(currentNode);
    }
  }, [currentNode, onSaveProgress]);
  
  /**
   * Handle option selection - updates the current node
   * @param {string} nextNode - The ID of the next node to navigate to
   */
  const handleOptionClick = (nextNode) => {
    setIsAnimating(true);
    
    // Short delay for animation effect
    setTimeout(() => {
      setCurrentNode(nextNode);
      setIsAnimating(false);
    }, 300);
  };
  
  // Check if the current node has no options (end of story)
  const isEndNode = nodeData.options.length === 0;
  
  return (
    <div className="story-container">
      <div className="story-header">
        <Logo width={60} height={60} />
        <button className="btn btn-outline" onClick={onRestart}>
          Restart Story
        </button>
      </div>
      
      <div className={`story-content ${isAnimating ? 'fade-in' : ''}`}>
        {nodeData.title && <h2>{nodeData.title}</h2>}
        <p className="story-text">{nodeData.content}</p>
        
        {isEndNode ? (
          <div className="story-ending">
            <p>The End</p>
            <button className="btn story-restart" onClick={onRestart}>
              Start a New Adventure
            </button>
          </div>
        ) : (
          <div className="story-options">
            {nodeData.options.map((option, index) => (
              <button
                key={index}
                className="option-btn"
                onClick={() => handleOptionClick(option.next)}
              >
                {option.text}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <div className="story-footer">
        <p>Your choices shape the story</p>
      </div>
    </div>
  );
};

export default Story; 