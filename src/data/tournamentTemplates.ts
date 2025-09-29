import { Tournament, TournamentSlot } from "./tournaments";

// Template for creating new tournaments
export const createTournamentTemplate = (
  overrides: Partial<Tournament>
): Tournament => {
  const defaultTournament: Tournament = {
    id: "new-tournament",
    name: "New Tournament",
    shortName: "NT",
    description: "An exciting new tournament featuring the best teams.",
    image: "/tournaments/default-banner.jpg",
    logo: "/tournaments/default-logo.png",
    prizePool: {
      total: "10,000",
      currency: "NPR",
      breakdown: [
        { position: "1st Place", amount: "5,000 NPR" },
        { position: "2nd Place", amount: "3,000 NPR" },
        { position: "3rd Place", amount: "2,000 NPR" },
      ],
    },
    dates: {
      registration: {
        start: new Date().toISOString().split("T")[0],
        end: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0], // 30 days from now
      },
      tournament: {
        start: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0], // 45 days from now
        end: new Date(Date.now() + 47 * 24 * 60 * 60 * 1000)
          .toISOString()
          .split("T")[0], // 47 days from now
      },
    },
    status: "upcoming",
    format: "Squad (4 Players)",
    maxTeams: 16,
    registeredTeams: 0,
    entryFee: {
      amount: "300",
      currency: "NPR",
    },
    game: "PUBG Mobile",
    platform: ["Android", "iOS"],
    rules: [
      "Teams must have exactly 4 players",
      "All players must be from Nepal",
      "No cheating or hacking allowed",
      "Teams must join Discord for communication",
    ],
    sponsors: [
      {
        name: "Stream Nepal",
        logo: "/sponsors/stream-nepal.png",
        website: "https://streamnepal.com",
      },
    ],
  };

  return { ...defaultTournament, ...overrides };
};

// Helper function to create tournament slots
export const createTournamentSlots = (
  maxTeams: number,
  groupNames: string[] = ["A", "B"]
): TournamentSlot[] => {
  const slots: TournamentSlot[] = [];
  const teamsPerGroup = Math.ceil(maxTeams / groupNames.length);

  groupNames.forEach((groupName, groupIndex) => {
    for (let i = 1; i <= teamsPerGroup; i++) {
      const slotNumber = groupIndex * teamsPerGroup + i;
      if (slotNumber <= maxTeams) {
        slots.push({
          slotNumber,
          slotName: `${groupName}${i}`,
          logo: "/teams/default.png",
          teamName: "TBD",
          status: "available",
        });
      }
    }
  });

  return slots;
};

// Example of how to create a new tournament:
// export const newTournament = createTournamentTemplate({
//   id: 'valorant-cup-2025',
//   name: 'Valorant Championship Cup',
//   shortName: 'VCC',
//   game: 'Valorant',
//   format: 'Team (5 Players)',
//   prizePool: {
//     total: '75,000',
//     currency: 'NPR',
//     breakdown: [
//       { position: '1st Place', amount: '40,000 NPR' },
//       { position: '2nd Place', amount: '20,000 NPR' },
//       { position: '3rd Place', amount: '10,000 NPR' },
//       { position: '4th Place', amount: '5,000 NPR' }
//     ]
//   }
// });

// export const newTournamentSlots = createTournamentSlots(16, ['Alpha', 'Beta']);
