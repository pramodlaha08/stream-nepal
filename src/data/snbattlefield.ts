import { Tournament, TournamentSlot } from "./types";

// SN Battle Field Tournament Slots Data
// Empty slots array - no teams registered yet
export const snBattleFieldSlots: TournamentSlot[] = [];

/**
 * DATE USAGE EXAMPLES:
 *
 * 1. Show custom message only:
 *    dates: {
 *      registration: { customMessage: "Open till slot filled" },
 *      tournament: { customMessage: "Coming Soon" }
 *    }
 *
 * 2. Show both start and end dates:
 *    dates: {
 *      registration: { start: "2025-11-16", end: "2025-11-30" },
 *      tournament: { start: "2025-12-01", end: "2025-12-05" }
 *    }
 *
 * 3. Show only start date:
 *    dates: {
 *      registration: { start: "2025-11-16" },
 *      tournament: { start: "2025-12-01" }
 *    }
 *
 * 4. Mix dates and custom message:
 *    dates: {
 *      registration: { start: "2025-11-16", customMessage: "Open till slot filled" },
 *      tournament: { start: "2025-12-01", end: "2025-12-05" }
 *    }
 *
 * Note: Custom message takes priority if provided. If no dates or custom message,
 * it will show "Coming Soon" by default.
 */

// SN Battle Field Tournament Data
export const snBattleFieldTournament: Tournament = {
  id: "sn_battle_field-2025",
  name: "SN Battle Field",
  shortName: "SNBF",
  description:
    "The ultimate Freefire tournament featuring the best teams from across Nepal. Battle for glory, massive prize pools, and the title of Nepal's Freefire Champions.",
  image: "/pmwc/sponsors/final.png",
  logo: "",
  prizePool: {
    total: "₹10,000",
    currency: "NPR",
    breakdown: [
      { position: "Champion", amount: "₹4,000" },
      { position: "Runner Up", amount: "₹3,000" },
      { position: "2nd Runner Up", amount: "₹2,000" },
      { position: "MVP", amount: "₹1,000" },
    ],
  },
  dates: {
    registration: {
      start: "2025-11-16",
    },
    tournament: {
      
      customMessage: "Coming Soon",
    },
  },
  status: "upcoming",
  format: "Squad Elimination",
  maxTeams: 20,
  registeredTeams: Object.keys(snBattleFieldSlots).length,
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
      time: "9:00 PM",
      map: "Bermuda",
      round: "Day 1",
    },
    {
      matchNumber: 2,
      matchName: "Long-range focus",
      time: "9:30 PM",
      map: "Purgatory",
      round: "Day 1",
    },
    {
      matchNumber: 3,
      matchName: "Close combat battle",
      time: "10:00 PM",
      map: "Kalahari",
      round: "Day 1",
    },
    {
      matchNumber: 4,
      matchName: "First Day Finale",
      time: "10:30 PM",
      map: "Alpine",
      round: "Day 1",
    },
    {
      matchNumber: 5,
      matchName: "Opening Match",
      time: "9:00 PM",
      map: "Bermuda",
      round: "Day 2",
    },
    {
      matchNumber: 6,
      matchName: "Long-range focus",
      time: "9:30 PM",
      map: "Purgatory",
      round: "Day 2",
    },
    {
      matchNumber: 7,
      matchName: "Close combat battle",
      time: "10:00 PM",
      map: "Kalahari",
      round: "Day 2",
    },
    {
      matchNumber: 8,
      matchName: "Second Day Finale",
      time: "10:30 PM",
      map: "Alpine",
      round: "Day 2",
    },
    {
      matchNumber: 9,
      matchName: "Opening Match",
      time: "9:00 PM",
      map: "Bermuda",
      round: "Day 3",
    },
    {
      matchNumber: 10,
      matchName: "Long-range focus",
      time: "9:30 PM",
      map: "Purgatory",
      round: "Day 3",
    },
    {
      matchNumber: 11,
      matchName: "Close combat battle",
      time: "10:00 PM",
      map: "Kalahari",
      round: "Day 3",
    },
    {
      matchNumber: 12,
      matchName: "Finale",
      time: "10:30 PM",
      map: "Alpine",
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
  registrationUrl: "https://forms.gle/ZXAJqjNm86e4dWqr8",
  youtubeVideoId: "UGR_VQ5NTV4",
};
