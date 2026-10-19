var STORY_DATA = {
  title: "The Ghost Map: Broad Street Outbreak",
  subtitle: "London • Soho • August 1854",
  author: "A Tale of the Industrial Revolution",
  scenes: [
    {
      id: 1,
      act: "Act I • The Sickbed",
      title: "The Morning Shadow",
      speaker: {
        name: "Eliza",
        role: "Mill Worker",
        avatar: "E",
        color: "#2563eb"
      },
      characters: ["Eliza", "Mary", "Martha"],
      dialogue: "Mary hasn't stirred since the factory bells rang. Her breath is shallow and her skin is burning to the touch. What could have taken hold of her so suddenly in the night?",
      notes: "Setting: A small mill workers' room in Soho. The sister lies in bed while Eliza watches with growing concern as the morning begins.",
      image: "images/slide_1.png"
    },
    {
      id: 2,
      act: "Act I • The Tenement",
      title: "The Cost of a Shift",
      speaker: {
        name: "Martha",
        role: "Coworker & Friend",
        avatar: "M",
        color: "#e11d48"
      },
      characters: ["Martha", "Eliza"],
      dialogue: "If we miss the morning shift at the mill, the overseer will dock our entire week's wages—or worse, replace us by noon. But she needs care, Eliza. Can we afford to leave her alone like this?",
      notes: "The economic dilemma of the Industrial Revolution: missing a day's work often meant immediate starvation or eviction.",
      image: "images/slide_2.png"
    },
    {
      id: 3,
      act: "Act II • The Journey",
      title: "The Soho Road",
      speaker: {
        name: "Eliza",
        role: "Mill Worker",
        avatar: "E",
        color: "#2563eb"
      },
      characters: ["Eliza"],
      dialogue: "I have to get her water first. The Broad Street pump isn't far down the road, and everyone knows its water is the sweetest and coolest in the whole parish.",
      notes: "Eliza sets out along the dusty road towards Broad Street, unaware of the hidden danger in the water.",
      image: "images/slide_3.png"
    },
    {
      id: 4,
      act: "Act II • Broad Street",
      title: "At the Broad Street Pump",
      speaker: {
        name: "Eliza",
        role: "Mill Worker",
        avatar: "E",
        color: "#2563eb"
      },
      characters: ["Eliza"],
      dialogue: "Here it is. Just a single pailful to cool Mary's fever and soothe her throat. If I hurry, I might still make the factory gates before the second bell.",
      notes: "The famous Broad Street pump in Soho. Residents preferred this pump because its water appeared clear and had no foul odor.",
      image: "images/slide_4.png"
    },
    {
      id: 5,
      act: "Act III • The Interception",
      title: "Running Footsteps",
      speaker: {
        name: "Martha",
        role: "Coworker & Friend",
        avatar: "M",
        color: "#e11d48"
      },
      characters: ["Martha", "Eliza"],
      dialogue: "Eliza! Eliza, wait! Put down the pail! Don't touch that pump handle!",
      notes: "Martha races breathless through the Soho streets to stop Eliza before she can draw any water.",
      image: "images/slide_5.png"
    },
    {
      id: 6,
      act: "Act III • The Warning",
      title: "The Blue Death",
      speaker: {
        name: "Martha",
        role: "Coworker & Friend",
        avatar: "M",
        color: "#e11d48"
      },
      characters: ["Martha", "Eliza"],
      dialogue: "The physician from St. James parish just gave the alarm—workers are collapsing in their homes across the square. It isn't a simple fever, Eliza. It's the cholera! The Blue Death is loose in Soho!",
      notes: "Historical event: The August 1854 cholera outbreak in Soho was one of the most severe in London's history, later mapped by Dr. John Snow.",
      image: "images/slide_6.png"
    },
    {
      id: 7,
      act: "Act III • The Realization",
      title: "The Dark Truth",
      speaker: {
        name: "Eliza",
        role: "Mill Worker",
        avatar: "E",
        color: "#2563eb"
      },
      characters: ["Eliza"],
      dialogue: "Cholera... Merciful heavens. And Mary drank a cup from this very pump before she took ill last night...",
      notes: "The horrific realization: The water they trusted was the very source carrying the fatal disease into their home.",
      image: "images/slide_7.png"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = STORY_DATA;
}

