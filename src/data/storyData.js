/**
 * Story data structure for the interactive story maker
 * Each node contains content text and an array of options
 * Each option has text and points to the next node ID
 */
const storyData = {
  "start": {
    "title": "The Mysterious Temple",
    "content": "You find yourself standing in front of an ancient temple hidden deep in the jungle. The stone structure is covered in vines and mysterious symbols. What do you do?",
    "options": [
      { "text": "Enter the temple", "next": "enterTemple" },
      { "text": "Examine the symbols on the outside", "next": "examineSymbols" },
      { "text": "Look for another way in", "next": "findAnotherWay" }
    ]
  },
  "enterTemple": {
    "title": "Inside the Temple",
    "content": "You step through the stone doorway into a dark corridor. As you enter, torches on the walls magically light up, revealing a large chamber with three doors. Each door is marked with a different symbol.",
    "options": [
      { "text": "Take the left door (marked with a sun)", "next": "sunDoor" },
      { "text": "Take the center door (marked with a moon)", "next": "moonDoor" },
      { "text": "Take the right door (marked with a star)", "next": "starDoor" },
      { "text": "Go back outside", "next": "start" }
    ]
  },
  "examineSymbols": {
    "title": "Ancient Symbols",
    "content": "You examine the symbols carved into the temple walls. They appear to tell a story about an ancient civilization that worshipped the cosmos. You notice that specific symbols for the sun, moon, and stars are highlighted. There seems to be a particular order: star, sun, moon.",
    "options": [
      { "text": "Enter the temple with this knowledge", "next": "enterTempleWithKnowledge" },
      { "text": "Look for another way in", "next": "findAnotherWay" },
      { "text": "Return to the jungle", "next": "returnJungle" }
    ]
  },
  "findAnotherWay": {
    "title": "Hidden Entrance",
    "content": "As you circle the temple, you discover a small opening partially hidden by vines. It looks just big enough for you to squeeze through.",
    "options": [
      { "text": "Squeeze through the opening", "next": "secretPassage" },
      { "text": "Return to the main entrance", "next": "start" }
    ]
  },
  "enterTempleWithKnowledge": {
    "title": "Enlightened Path",
    "content": "You enter the temple with the knowledge of the symbols. When you reach the chamber with three doors, the symbols on the wall begin to glow, revealing a hidden passage behind a section of the wall.",
    "options": [
      { "text": "Take the hidden passage", "next": "hiddenChamber" },
      { "text": "Still take one of the doors (sun)", "next": "sunDoor" },
      { "text": "Still take one of the doors (moon)", "next": "moonDoor" },
      { "text": "Still take one of the doors (star)", "next": "starDoor" }
    ]
  },
  "sunDoor": {
    "title": "The Sun Room",
    "content": "You enter a room bathed in golden light from an opening in the ceiling. In the center of the room is a pedestal with a golden medallion. As you approach, the door behind you seals shut.",
    "options": [
      { "text": "Take the medallion", "next": "takeSunMedallion" },
      { "text": "Look for a way to open the door", "next": "sunDoorTrapped" }
    ]
  },
  "moonDoor": {
    "title": "The Moon Room",
    "content": "You enter a dark room with a pool of reflective water in the center. The ceiling has a small opening where moonlight shines down on the pool, creating beautiful patterns on the walls.",
    "options": [
      { "text": "Touch the water", "next": "touchMoonWater" },
      { "text": "Look around the room for clues", "next": "moonRoomClues" }
    ]
  },
  "starDoor": {
    "title": "The Star Room",
    "content": "You enter a room with a high domed ceiling painted with constellations. In the center of the room is a circular platform with indentations that match the constellation patterns above.",
    "options": [
      { "text": "Step onto the platform", "next": "starPlatform" },
      { "text": "Study the constellations", "next": "studyStars" }
    ]
  },
  "secretPassage": {
    "title": "Secret Passage",
    "content": "The narrow passage leads you deep into the temple. After crawling for what seems like an eternity, you emerge into a small chamber filled with treasures and artifacts.",
    "options": [
      { "text": "Examine the treasures", "next": "examineTreasures" },
      { "text": "Look for a way forward", "next": "treasureRoomExit" }
    ]
  },
  "hiddenChamber": {
    "title": "The Hidden Chamber",
    "content": "You follow the hidden passage and arrive in a magnificent chamber filled with light. At its center sits an old monk who smiles at your arrival. 'Few find this path,' he says. 'You have shown wisdom.'",
    "options": [
      { "text": "Ask about the temple's purpose", "next": "templePurpose" },
      { "text": "Ask about the treasures", "next": "askTreasures" }
    ]
  },
  "takeSunMedallion": {
    "title": "The Medallion's Power",
    "content": "As you take the medallion, the room begins to shake. The ceiling starts to collapse! However, the medallion in your hand glows brightly, and a passage opens in the wall.",
    "options": [
      { "text": "Run through the passage", "next": "escapeSunRoom" },
      { "text": "Replace the medallion", "next": "replaceSunMedallion" }
    ]
  },
  "sunDoorTrapped": {
    "title": "Trapped!",
    "content": "You search frantically for a way to open the door, but find nothing. The room begins to get hotter as the sun's rays intensify through the ceiling opening. You're trapped!",
    "options": [
      { "text": "Take the medallion as a last resort", "next": "takeSunMedallion" },
      { "text": "Look for a hidden mechanism", "next": "findSunMechanism" }
    ]
  },
  "touchMoonWater": {
    "title": "Magical Waters",
    "content": "When your fingers touch the water, ripples spread in perfect circles. The patterns on the wall shift and reveal a hidden message: 'Only when the three celestial keys unite will the true treasure be revealed.'",
    "options": [
      { "text": "Search for a 'key' in this room", "next": "findMoonKey" },
      { "text": "Leave the room and try another door", "next": "enterTemple" }
    ]
  },
  "moonRoomClues": {
    "title": "Moon Room Discovery",
    "content": "Searching the room, you find small silver disk hidden in a recess in the wall. It looks like it could be some kind of key or token.",
    "options": [
      { "text": "Take the silver disk", "next": "takeMoonDisk" },
      { "text": "Touch the water with the disk", "next": "diskInWater" }
    ]
  },
  "starPlatform": {
    "title": "Celestial Platform",
    "content": "As you step onto the platform, the stars on the ceiling begin to move, aligning into new patterns. A voice echoes: 'Match the stars above, and the path shall be revealed.'",
    "options": [
      { "text": "Try to match the star patterns", "next": "matchStarPatterns" },
      { "text": "Step off the platform", "next": "starDoor" }
    ]
  },
  "studyStars": {
    "title": "Star Knowledge",
    "content": "As you study the constellations, you notice they match the patterns you saw outside the temple. One constellation seems to be highlighted more than the others.",
    "options": [
      { "text": "Step onto the platform with this knowledge", "next": "informedStarPlatform" },
      { "text": "Look for something else in the room", "next": "findStarRoom" }
    ]
  },
  "examineTreasures": {
    "title": "Ancient Artifacts",
    "content": "Among the treasures, you find ancient scrolls, golden statues, and jeweled artifacts. One particular scroll catches your attention, showing a map of the temple with a chamber marked 'The Heart' at its center.",
    "options": [
      { "text": "Follow the map to 'The Heart'", "next": "followHeartMap" },
      { "text": "Collect some treasures and leave", "next": "takeTreasuresAndLeave" }
    ]
  },
  "templePurpose": {
    "title": "The Temple's Secret",
    "content": "'This temple was built as a test of character,' the monk explains. 'Those who seek only gold find traps and illusions. Those who seek wisdom find truth. You have found the true path.'",
    "options": [
      { "text": "Ask what wisdom the temple offers", "next": "templeWisdom" },
      { "text": "Ask how to leave safely", "next": "leaveTempleSafely" }
    ]
  },
  "askTreasures": {
    "title": "True Treasure",
    "content": "The monk smiles. 'The treasures that others seek are mere illusions. The true treasure is the knowledge stored here.' He offers you an ancient book. 'This contains wisdom lost to the outside world for centuries.'",
    "options": [
      { "text": "Accept the book", "next": "acceptWisdomBook" },
      { "text": "Decline politely", "next": "declineBook" }
    ]
  },
  "templeWisdom": {
    "title": "Ancient Wisdom",
    "content": "The monk shares ancient philosophical teachings about balance, harmony, and the nature of reality. You feel enlightened by his words, as if seeing the world through new eyes.",
    "options": [
      { "text": "Ask to become his student", "next": "becomeStudent" },
      { "text": "Thank him and prepare to leave", "next": "thankMonkAndLeave" }
    ]
  },
  "acceptWisdomBook": {
    "title": "The Book of Wisdom",
    "content": "You accept the ancient tome. As you open it, the knowledge within seems to flow directly into your mind. You've gained insights that will change your life forever.",
    "options": [
      { "text": "Thank the monk and leave with the book", "next": "leaveWithBook" }
    ]
  },
  "becomeStudent": {
    "title": "A New Path",
    "content": "The monk accepts you as his student. You spend years in the temple, learning ancient wisdom and eventually becoming a keeper of knowledge yourself. Your journey in the outside world has ended, but a new, more meaningful one has begun.",
    "options": []
  },
  "leaveWithBook": {
    "title": "A New Beginning",
    "content": "With the monk's blessing, you leave the temple with the book of wisdom. As you emerge from the jungle, you feel transformed by your experience. The knowledge you've gained will help you lead a more enlightened life and perhaps help others do the same.",
    "options": []
  },
  "returnJungle": {
    "title": "Return to Civilization",
    "content": "You decide the temple is too mysterious and potentially dangerous. You turn back into the jungle, heading toward civilization, wondering what secrets the temple held but satisfied with your decision to stay safe.",
    "options": []
  },
  "takeTreasuresAndLeave": {
    "title": "Cursed Treasure",
    "content": "You fill your pockets with gold and jewels and find your way out of the temple. As you leave the jungle, you notice the treasures getting heavier, eventually turning to worthless stone as you reach civilization. The temple's magic doesn't allow its treasures to be stolen.",
    "options": []
  }
};

export default storyData; 