import {
  createTournamentTemplate,
  createTournamentSlots,
} from "./tournamentTemplates";

// Valorant Championship Cup Example
export const valorantCup = createTournamentTemplate({
  id: "valorant-cup-2025",
  name: "Valorant Championship Cup",
  shortName: "VCC",
  description:
    "The ultimate Valorant tournament featuring the best tactical FPS teams from Nepal. Experience precision gameplay and strategic warfare.",
  game: "Valorant",
  format: "Team (5 Players)",
  maxTeams: 16,
  prizePool: {
    total: "40,000",
    currency: "NPR",
    breakdown: [
      { position: "1st Place", amount: "20,000 NPR" },
      { position: "2nd Place", amount: "12,000 NPR" },
      { position: "3rd Place", amount: "5,000 NPR" },
      { position: "4th Place", amount: "3,000 NPR" },
    ],
  },
  dates: {
    registration: {
      start: "2025-11-01",
      end: "2025-11-20",
    },
    tournament: {
      start: "2025-12-01",
      end: "2025-12-03",
    },
  },
  status: "upcoming",
  registeredTeams: 0,
  entryFee: {
    amount: "600",
    currency: "NPR",
  },
  rules: [
    "Teams must have exactly 5 players",
    "All players must be from Nepal",
    "No cheating or hacking allowed",
    "Teams must join Discord for communication",
    "Entry fee must be paid before tournament starts",
    "All matches will be played on the latest patch",
  ],
});

export const valorantSlots = createTournamentSlots(16, ["Alpha", "Beta"]);

// Free Fire Battle Royale Example
export const freeFireBattle = createTournamentTemplate({
  id: "free-fire-battle-2025",
  name: "Free Fire Battle Royale Championship",
  shortName: "FFBR",
  description:
    "The most intense Free Fire battle royale tournament in Nepal. Show your survival skills and claim victory.",
  game: "Free Fire",
  format: "Squad (4 Players)",
  maxTeams: 24,
  prizePool: {
    total: "30,000",
    currency: "NPR",
    breakdown: [
      { position: "1st Place", amount: "15,000 NPR" },
      { position: "2nd Place", amount: "8,000 NPR" },
      { position: "3rd Place", amount: "4,000 NPR" },
      { position: "4th Place", amount: "2,000 NPR" },
      { position: "5th Place", amount: "1,000 NPR" },
    ],
  },
  dates: {
    registration: {
      start: "2025-10-15",
      end: "2025-11-05",
    },
    tournament: {
      start: "2025-11-15",
      end: "2025-11-17",
    },
  },
  status: "registration",
  registeredTeams: 8,
  entryFee: {
    amount: "400",
    currency: "NPR",
  },
  platform: ["Android", "iOS"],
  rules: [
    "Teams must have exactly 4 players",
    "All players must be from Nepal",
    "No emulators allowed - mobile only",
    "Teams must join Discord for communication",
    "Entry fee must be paid before tournament starts",
    "Custom rooms will be provided",
  ],
});

export const freeFireSlots = createTournamentSlots(24, [
  "Group A",
  "Group B",
  "Group C",
]);
