import { Tournament, TournamentSlot } from "./types";

// PMWC Tournament Slots Data
// Empty slots array - no teams registered yet
export const pmwc_v2Slots: TournamentSlot[] = [];

// PMWC Tournament Data
export const pmwc_v2Tournament: Tournament = {
  id: "pmwc_v2-2025",
  name: "PUBG Mobile Warriors Cup 2.0",
  shortName: "PMWC",
  description:
    "The ultimate PUBG Mobile tournament featuring the best teams from across Nepal. Battle for glory, massive prize pools, and the title of Nepal's PUBG Mobile Champions.",
  image: "/pmwc/sponsors/final.png",
  logo: "/pmwc/sponsors/final.png",
  prizePool: {
    total: "₹10,000",
    currency: "NPR",
    breakdown: [
      { position: "Champion", amount: "₹4,000" },
      { position: "Runner Up", amount: "₹3,000" },
      { position: "2nd Runner Up", amount: "₹2,000" },
      { position: "MVP", amount: "₹1,00" },
    ],
  },
  dates: {
    registration: {
      start: "2025-10-31",
      end: "2025-11-13",
    },
    tournament: {
      start: "2025-11-14",
      end: "2025-11-16",
    },
  },
  status: "upcoming",
  format: "Squad Elimination",
  maxTeams: 32,
  registeredTeams: Object.keys(pmwc_v2Slots).length,
  entryFee: {
    amount: "500",
    currency: "NPR",
  },
  game: "PUBG Mobile",
  platform: ["Android", "iOS"],
  rules: [
    "Teams must have 4 players + 1 substitute (optional)",
    "All players must be from Nepal",
    "3 players team tag must necessary",
    "No cheating or hacking allowed",
    "Teams must join Discord for communication",
    "Entry fee must be paid before tournament starts",
    "All matches will be streamed live",
  ],
  sponsors: [
    {
      name: "Stream Nepal",
      logo: "/logo.png",
      website: "https://streamnepal.stream",
    },
    {
      name: "Mr Sady",
      logo: "/pmwc/sponsors/mrsady.png",
      website: "https://www.facebook.com/MRSADDDY",
    },
  ],
  matchSchedule: [
    {
      matchNumber: 1,
      matchName: "Opening Match",
      time: "9:10 PM",
      map: "Erangel",
      round: "Day 1 & Day 2",
    },
    {
      matchNumber: 2,
      matchName: "Survival Round",
      time: "9:55 PM",
      map: "Miramar",
      round: "Day 1 & Day 2",
    },
    {
      matchNumber: 3,
      matchName: "Elimination Round",
      time: "10:40 PM",
      map: "Sanhok",
      round: "Day 1 & Day 2",
    },
    {
      matchNumber: 4,
      matchName: "Quarter Finals",
      time: "9:10 PM",
      map: "Erangel",
      round: "Day 3",
    },
    {
      matchNumber: 5,
      matchName: "Semi Finals",
      time: "10:00 PM",
      map: "Miramar",
      round: "Day 3",
    },
    {
      matchNumber: 5,
      matchName: "Semi Finals",
      time: "10:50 PM",
      map: "Miramar",
      round: "Day 3",
    },
    {
      matchNumber: 6,
      matchName: "Grand Finals",
      time: "11:40 PM",
      map: "Sanhok",
      round: "Day 3",
    },
  ],
  streamingPlatforms: [
    {
      name: "YouTube",
      url: "https://youtube.com/@mrsady",
      icon: "youtube",
      color: "from-red-500 to-red-600",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/MRSADDDY",
      icon: "facebook",
      color: "from-blue-600 to-blue-700",
    },
  ],
  registrationUrl: "https://forms.gle/EgCCob2jQgX9rf2k9",
  youtubeVideoId: "UGR_VQ5NTV4",
};



