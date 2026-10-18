var STORY_DATA = {
  title: "The Ghost Map: A London Outbreak",
  subtitle: "Broad Street, Soho • August 1854",
  author: "Industrial Revolution Storyboard",
  scenes: [
    {
      id: 1,
      act: "Act I • The Sickbed",
      title: "The Sudden Fever",
      speaker: {
        name: "Eliza Hughes",
        role: "Textile Mill Weaver",
        avatar: "EH",
        color: "#0284c7"
      },
      characters: ["Eliza Hughes", "Mary Hughes", "Thomas Ward"],
      dialogue: "Her fever took hold before dawn, Thomas. Mary's skin is burning to the touch, yet she shivers as though trapped in winter ice. What kind of illness strikes so violently in a few short hours? If I leave for the mill now, she has no one to moisten her lips.",
      notes: "Setting: St. James parish, Soho. Mill worker tenement garret. Living conditions are cramped and unsanitary during London's rapid Industrial Revolution.",
      image: "images/scene1-sickbed.png"
    },
    {
      id: 2,
      act: "Act I • The Tenement",
      title: "The Cost of a Shift",
      speaker: {
        name: "Thomas Ward",
        role: "Fellow Mill Worker",
        avatar: "TW",
        color: "#d97706"
      },
      characters: ["Thomas Ward", "Eliza Hughes"],
      dialogue: "If you miss the morning whistle, Mr. Grimshaw will dock your entire week's pay or give your looms to the workhouse girls waiting at the gates. We can't buy bread without your wages, Eliza. Go fetch her cold water to break the heat, and I'll stand by your station until the noon bell.",
      notes: "Economic reality: 1850s factory hands had zero paid leave, sick days, or job security. Missing a shift meant immediate destitution.",
      image: "images/scene2-shift-dilemma.png"
    },
    {
      id: 3,
      act: "Act II • Broad Street",
      title: "The Sweet Water of Soho",
      speaker: {
        name: "Eliza Hughes",
        role: "Textile Mill Weaver",
        avatar: "EH",
        color: "#0284c7"
      },
      characters: ["Eliza Hughes"],
      dialogue: "The morning coal smoke hangs low over Broad Street, but the pump here is our only solace. Everyone says its water is cooler and sweeter than the murky river Thames supply. Just one pailful to soothe Mary's burning throat, and then I must run to the mill gates.",
      notes: "Historical Context: The Broad Street pump was renowned among Soho residents for clear, sparkling water, unaware it was fatally contaminated by an adjacent cesspool.",
      image: "images/scene3-broad-street-pump.png"
    },
    {
      id: 4,
      act: "Act II • Broad Street",
      title: "The Blue Death",
      speaker: {
        name: "Thomas Ward",
        role: "Fellow Mill Worker",
        avatar: "TW",
        color: "#d97706"
      },
      characters: ["Thomas Ward", "Eliza Hughes"],
      dialogue: "Eliza, stop! Drop the pail! Three weavers collapsed at the factory gate, and Dr. Snow is racing through the parish with parish constables. It's not the mill fever—it's cholera! The Blue Death has taken the street, and people are dropping within hours!",
      notes: "The Climax: In late August 1854, the Broad Street cholera outbreak killed over 600 people before Dr. John Snow persuaded the Board of Guardians to remove the pump handle.",
      image: "images/scene4-cholera-warning.png"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = STORY_DATA;
}
