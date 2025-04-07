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

## IMAGES 
Screenshot 1: Landing Page - Interactive Story Maker (ISM)
 ![image](https://github.com/user-attachments/assets/18b12e96-eb6e-4550-a06b-e9cdd6845be1)

Description:
This is the landing page of the Interactive Story Maker. It introduces the concept with a clean, minimal UI and two primary options:
•	Start New Story: Begins a fresh, AI-generated interactive narrative.
•	Resume Story: Continues a previously started story session (hardcoded for demo).
Purpose in MVP:
•	Establishes the brand and tone for the platform.
•	Encourages immediate engagement with a prominent CTA.
•	Gives a sense of continuity with the “Resume Story” feature, enhancing user stickiness.

Screenshot 2: Scene 1 - The Mysterious Temple 
![image](https://github.com/user-attachments/assets/f6ffb57c-4879-4c30-adbb-b191b12d8068)

Description:
The user is introduced to the story’s setting - a mysterious jungle temple. They are presented with three narrative choices:
•	Enter the temple
•	Examine the symbols on the outside
•	Look for another way in
Purpose in MVP:
•	Demonstrates the core interactive feature of the platform—branching narrative choices.
•	Mimics the AI’s ability to adapt the story based on user input (manually hardcoded in demo).
•	Sets the tone for a fantasy adventure genre.

Screenshot 3: Scene 2 - Inside the Temple
![image](https://github.com/user-attachments/assets/af9e1c9c-444a-4b0c-b33b-1381b4026672)

 
Description:
After entering the temple, the user encounters another decision point. They can choose from three distinct doors, each symbolically marked:
•	Left door (sun)
•	Center door (moon)
•	Right door (star)
•	Or go back outside
Purpose in MVP:
•	Emphasizes the multi-path exploration format of the story.
•	Visually shows progression and more complexity with added choices.
•	Hints at dynamic outcomes based on user decisions—key to increasing session length and replays.
General MVP Summary for Report:
The prototype illustrates the core idea behind an AI-powered feature that could increase user retention on Kuku FM:
•	Immersive storytelling with decision points makes the experience replayable and personalized.
•	Though hardcoded in the MVP, this logic will be powered by generative AI models like GPT or fine-tuned LLMs in the full version.
•	The final product will also include voice synthesis to make these stories listenable—an audio-first interactive adventure unique to Kuku FM.


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
