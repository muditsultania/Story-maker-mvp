# Interactive Story Maker

A responsive, front-end MVP for an interactive story application using React. This prototype demonstrates a branching narrative system where users can read story text, choose from multiple options, and see the story update based on their choices.

## Features

- Responsive design for both desktop and mobile browsers
- Home screen with start/resume story functionality
- Interactive story screen with choices that affect the narrative
- Story progress saved to localStorage
- Animated transitions between story nodes
- Multiple story paths with various endings

## Project Structure

- `src/App.js` - Main application component that manages routing between Home and Story screens
- `src/components/Home.js` - Home screen component
- `src/components/Story.js` - Story screen component that displays narrative and options
- `src/data/storyData.js` - Hardcoded story data structure with nodes and options
- `src/assets/logo.js` - SVG logo component
- `src/styles/` - CSS styles for the application

## Story Data Structure

The story is defined in `storyData.js` as a JavaScript object where:
- Each key represents a story node ID
- Each node contains:
  - `title`: The title of the current node
  - `content`: The narrative text to display
  - `options`: An array of choices, each with:
    - `text`: The text to display for this choice
    - `next`: The ID of the next node to navigate to when selected

Nodes with empty options arrays are considered end nodes.

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Future Enhancements

- Add more complex story branches
- Implement character creation/customization
- Add images and background music
- Create a visual editor for creating and managing stories
- Integrate with a backend to save/load stories from a database

## License

MIT 