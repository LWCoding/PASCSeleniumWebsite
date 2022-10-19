// REACT
import React, { useState, useEffect } from "react";
// COMPONENTS
import EnrichBlock from "./EnrichBlock.js";
// CSS
import "./EnrichList.css";

var enrichments = [
  {
    name: "Video Game Design and Development",
    description:
      "Interested in story writing, graphic design, music composition, programming, or maybe even something else? Game development may be the interest for you!\n\nThis club will be mainly interested in developing a conceptual understanding of the structures that make up video games and some syntax in the C# programming language. We'll be working towards gaining familiarity with the Unity Engine (which has created some VERY popular games, such as Hearthstone, Hollow Knight, Pokémon Go, Among Us), but downloading it isn't a prerequisite!\n\nThis club is also a community to develop or refine your creative skills, with the hopes of you creating projects of your own or as a team! We hope to see you there.",
    host: "Lucas Wang",
    roomName: "Room 112",
    weekdayStr: "Repeats every Mon Tue Wed Thu Fri",
  },
  {
    name: "Girls Weightlifting",
    description: "Pump some weights in the West gym.",
    host: "Nathan Wu",
    roomName: "West Gym",
    weekdayStr: "Repeats every Mon Wed Fri"
  },
  {
    name: "Minecraft Club",
    description:
      "Want to destress from homework, or just have some fun playing with friends? Minecraft Club is a community for everybody to relax and hang out in.\n\nBoth Java Edition and Bedrock Edition Minecraft players are of course welcome to join.",
    host: "Chris Deng",
    roomName: "Room 305",
    weekdayStr: "Repeats every Fri"
  },
  {
    name: "Genius Hour",
    description:
      "Do you love games but want to develop stronger, game theory based strategies? Sign up for our first topic of the year game theory and board games!\n\nJoin this enrichment every Wednesday to explore unique topics through inquiry-based, student-directed learning. Anyone is welcome to teach/host a session (ranging from 15-30 min) or stop by every week to learn something new!",
    host: "Kathleen Tysiak",
    roomName: "Room 104",
    weekdayStr: "Repeats every Wed"
  },
  {
    name: "TI N-Spire Crash Course",
    description:
      "So you got this fancy, expensive calculator. But how do you use it?? What can it do? Come on in and learn some of the basics, as well as some neat tricks that even experienced users may be unfamiliar with.\n\nDon't forget to charge your calculator the night before! ⚡⚡📱⚡⚡",
    host: "Byron Espinoza",
    roomName: "Room 132",
    weekdayStr: "Repeats every Mon"
  },
  {
    name: "Video Game Design and Development",
    description:
      "Interested in story writing, graphic design, music composition, programming, or maybe even something else? Game development may be the interest for you!\n\nThis club will be mainly interested in developing a conceptual understanding of the structures that make up video games and some syntax in the C# programming language. We'll be working towards gaining familiarity with the Unity Engine (which has created some VERY popular games, such as Hearthstone, Hollow Knight, Pokémon Go, Among Us), but downloading it isn't a prerequisite!\n\nThis club is also a community to develop or refine your creative skills, with the hopes of you creating projects of your own or as a team! We hope to see you there.",
    host: "Lucas Wang",
    roomName: "Room 112",
    weekdayStr: "Repeats every Mon Tue Wed Thu Fri",
  },
  {
    name: "Girls Weightlifting",
    description: "Pump some weights in the West gym.",
    host: "Nathan Wu",
    roomName: "West Gym",
    weekdayStr: "Repeats every Mon Wed Fri"
  },
  {
    name: "Minecraft Club",
    description:
      "Want to destress from homework, or just have some fun playing with friends? Minecraft Club is a community for everybody to relax and hang out in.\n\nBoth Java Edition and Bedrock Edition Minecraft players are of course welcome to join.",
    host: "Chris Deng",
    roomName: "Room 305",
    weekdayStr: "Repeats every Fri"
  },
  {
    name: "Genius Hour",
    description:
      "Do you love games but want to develop stronger, game theory based strategies? Sign up for our first topic of the year game theory and board games!\n\nJoin this enrichment every Wednesday to explore unique topics through inquiry-based, student-directed learning. Anyone is welcome to teach/host a session (ranging from 15-30 min) or stop by every week to learn something new!",
    host: "Kathleen Tysiak",
    roomName: "Room 104",
    weekdayStr: "Repeats every Wed"
  },
  {
    name: "TI N-Spire Crash Course",
    description:
      "So you got this fancy, expensive calculator. But how do you use it?? What can it do? Come on in and learn some of the basics, as well as some neat tricks that even experienced users may be unfamiliar with.\n\nDon't forget to charge your calculator the night before! ⚡⚡📱⚡⚡",
    host: "Byron Espinoza",
    roomName: "Room 132",
    weekdayStr: "Repeats every Mon"
  },
];

/*
  Credit to https://ultimatecourses.com/blog/using-async-await-inside-react-use-effect-hook
  for help with useState and useEffect.
*/

const EnrichContainer = () => {
  const [enrich, loadEnrich] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/get-all-enrichments").then((res) => {
      return res.json();
    }).then((json) => {
      loadEnrich(json.enrichments);
    })
  }, []);

  // Call while there's no enrichments loaded
  if (!enrich) return (
    <div id="enrichment-container">Loading...</div>
  );

  let i = 0; // For counting keys
  return (
    <div id="enrichment-container">
      {enrich.map((e) => (
        <EnrichBlock
          key={i++}
          name={e.name}
          description={e.description}
          weekdayStr={e.weekdayStr}
          host={e.hostName}
          roomName={e.roomName}
        />
      ))}
    </div>
  );
};

export default EnrichContainer;
