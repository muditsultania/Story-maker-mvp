import React from 'react';
import '../styles/Home.css';
import Logo from '../assets/logo';

/**
 * Home component - Landing page for the Interactive Story Maker
 * Displays title, description, and buttons to start or resume a story
 */
const Home = ({ onStartStory, onResumeStory, hasActiveStory }) => {
  return (
    <div className="home-container">
      <Logo width={180} height={180} />
      <h1 className="home-title">Interactive Story Maker</h1>
      <p className="home-description">
        Experience a branching narrative adventure where your choices matter.
        Explore mysterious locations, meet interesting characters, and discover
        multiple endings based on the decisions you make.
      </p>
      
      <div className="btn-container">
        <button className="btn" onClick={onStartStory}>
          Start New Story
        </button>
        
        {hasActiveStory && (
          <button className="btn btn-outline" onClick={onResumeStory}>
            Resume Story
          </button>
        )}
      </div>
    </div>
  );
};

export default Home; 