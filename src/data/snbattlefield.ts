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
  image: "/snbattlefield/poster.png",
  logo: "/snbattlefield/logo.png",
  prizePool: {
    total: "₹15,000",
    currency: "NPR",
    breakdown: [
      { position: "Champion", amount: "₹7,000" },
      { position: "Runner Up", amount: "₹4,000" },
      { position: "2nd Runner Up", amount: "₹2,000" },
      { position: "MVP", amount: "₹2,000" },
    ],
  },
  dates: {
    registration: {
      start: "2026-1-15",
      end: "2026-1-21",
    },
    tournament: {
      start: "2026-1-23",
      end: "2026-1-24",
    },
  },
  status: "registration",
  format: "Squad Elimination",
  maxTeams: 24,
  registeredTeams: Object.keys(snBattleFieldSlots).length,
  entryFee: {
    amount: "400",
    currency: "NPR",
  },
  game: "Free Fire",
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
    // ===== DAY 1 =====
    {
      matchNumber: 1,
      matchName: "Group A – Match 1",
      time: "10:00 AM – 10:40 AM",
      round: "Day 1",
      group: "A",
    },
    {
      matchNumber: 2,
      matchName: "Group B – Match 1",
      time: "10:50 AM – 11:30 AM",
      round: "Day 1",
      group: "B",
    },
    {
      matchNumber: 3,
      matchName: "Group A – Match 2",
      time: "11:40 AM – 12:20 PM",
      round: "Day 1",
      group: "A",
    },
    {
      matchNumber: 4,
      matchName: "Group B – Match 2",
      time: "12:30 PM – 1:10 PM",
      round: "Day 1",
      group: "B",
    },
    {
      matchNumber: 5,
      matchName: "Group A – Match 3",
      time: "1:30 PM – 2:10 PM",
      round: "Day 1",
      group: "A",
    },
    {
      matchNumber: 6,
      matchName: "Group B – Match 3",
      time: "2:20 PM – 3:00 PM",
      round: "Day 1",
      group: "B",
    },
    {
      matchNumber: 7,
      matchName: "Break + Point Table Announcement",
      time: "3:00 PM – 4:00 PM",
      round: "Day 1",
      group: null,
    },

    // ===== DAY 2 (FINALS) =====
    {
      matchNumber: 8,
      matchName: "Final Match 1",
      time: "10:00 AM – 10:40 AM",
      round: "Day 2",
      stage: "Finals",
    },
    {
      matchNumber: 9,
      matchName: "Final Match 2",
      time: "10:50 AM – 11:30 AM",
      round: "Day 2",
      stage: "Finals",
    },
    {
      matchNumber: 10,
      matchName: "Final Match 3",
      time: "11:40 AM – 12:20 PM",
      round: "Day 2",
      stage: "Finals",
    },
    {
      matchNumber: 11,
      matchName: "Final Match 4",
      time: "12:30 PM – 1:10 PM",
      round: "Day 2",
      stage: "Finals",
    },
    {
      matchNumber: 12,
      matchName: "Final Match 5",
      time: "1:30 PM – 2:10 PM",
      round: "Day 2",
      stage: "Finals",
    },
    {
      matchNumber: 13,
      matchName: "Final Match 6",
      time: "2:20 PM – 3:00 PM",
      round: "Day 2",
      stage: "Finals",
    },
    {
      matchNumber: 14,
      matchName: "Results + Prize Distribution",
      time: "3:00 PM – 4:00 PM",
      round: "Day 2",
      stage: "Ceremony",
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
