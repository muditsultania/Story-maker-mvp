import React from 'react';

/**
 * Logo component - SVG logo for the Interactive Story Maker
 */
const Logo = ({ width = 150, height = 150 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 200 200">
      <rect width="200" height="200" rx="20" fill="#ff4d4f" />
      <text x="100" y="120" fontFamily="Arial, sans-serif" fontSize="60" fontWeight="bold" fill="white" textAnchor="middle">ISM</text>
      <path d="M50 50 L150 50 L100 25 Z" fill="white" />
    </svg>
  );
};

export default Logo; 