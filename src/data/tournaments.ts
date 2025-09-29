export interface Tournament {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  logo: string;
  prizePool: {
    total: string;
    currency: string;
    breakdown: {
      position: string;
      amount: string;
    }[];
  };
  dates: {
    registration: {
      start: string;
      end: string;
    };
    tournament: {
      start: string;
      end: string;
    };
  };
  status: "registration" | "upcoming" | "live" | "finished";
  format: string;
  maxTeams: number;
  registeredTeams: number;
  entryFee: {
    amount: string;
    currency: string;
  };
  game: string;
  platform: string[];
  rules: string[];
  sponsors: {
    name: string;
    logo: string;
    website: string;
  }[];
}

export interface TournamentSlot {
  slotNumber: number;
  slotName: string;
  logo: string;
  teamName: string;
  status: "available" | "reserved" | "confirmed";
  registrationDate?: string;
}

// PMWC Tournament Data
export const pmwcTournament: Tournament = {
  id: "pmwc-2025",
  name: "Pubg Mobile Warriors Cup",
  shortName: "PMWC",
  description:
    "The ultimate PUBG Mobile tournament featuring the best teams from Nepal. Battle for glory and massive prize pools in this high-stakes competition.",
  image: "/tournaments/pmwc-banner.jpg",
  logo: "/tournaments/pmwc-logo.png",
  prizePool: {
    total: "50,000",
    currency: "NPR",
    breakdown: [
      { position: "1st Place", amount: "25,000 NPR" },
      { position: "2nd Place", amount: "15,000 NPR" },
      { position: "3rd Place", amount: "7,000 NPR" },
      { position: "4th Place", amount: "3,000 NPR" },
    ],
  },
  dates: {
    registration: {
      start: "2025-10-01",
      end: "2025-10-25",
    },
    tournament: {
      start: "2025-11-01",
      end: "2025-11-03",
    },
  },
  status: "registration",
  format: "Squad (4 Players)",
  maxTeams: 32,
  registeredTeams: 18,
  entryFee: {
    amount: "500",
    currency: "NPR",
  },
  game: "PUBG Mobile",
  platform: ["Android", "iOS"],
  rules: [
    "Teams must have exactly 4 players",
    "All players must be from Nepal",
    "No cheating or hacking allowed",
    "Teams must join Discord for communication",
    "Entry fee must be paid before tournament starts",
    "All matches will be streamed live",
  ],
  sponsors: [
    {
      name: "Stream Nepal",
      logo: "/sponsors/stream-nepal.png",
      website: "https://streamnepal.com",
    },
  ],
};

// Tournament Slots Data
export const pmwcSlots: TournamentSlot[] = [
  // Group A Slots
  {
    slotNumber: 1,
    slotName: "A1",
    logo: "/teams/team1.png",
    teamName: "Alpha Wolves",
    status: "confirmed",
    registrationDate: "2025-10-02",
  },
  {
    slotNumber: 2,
    slotName: "A2",
    logo: "/teams/team2.png",
    teamName: "Cyber Knights",
    status: "confirmed",
    registrationDate: "2025-10-03",
  },
  {
    slotNumber: 3,
    slotName: "A3",
    logo: "/teams/team3.png",
    teamName: "Phoenix Squad",
    status: "confirmed",
    registrationDate: "2025-10-04",
  },
  {
    slotNumber: 4,
    slotName: "A4",
    logo: "/teams/team4.png",
    teamName: "Storm Riders",
    status: "confirmed",
    registrationDate: "2025-10-05",
  },
  {
    slotNumber: 5,
    slotName: "A5",
    logo: "/teams/team5.png",
    teamName: "Venom Strike",
    status: "confirmed",
    registrationDate: "2025-10-06",
  },
  {
    slotNumber: 6,
    slotName: "A6",
    logo: "/teams/team6.png",
    teamName: "Thunder Bolts",
    status: "confirmed",
    registrationDate: "2025-10-07",
  },
  {
    slotNumber: 7,
    slotName: "A7",
    logo: "/teams/team7.png",
    teamName: "Shadow Force",
    status: "confirmed",
    registrationDate: "2025-10-08",
  },
  {
    slotNumber: 8,
    slotName: "A8",
    logo: "/teams/team8.png",
    teamName: "Ice Breakers",
    status: "confirmed",
    registrationDate: "2025-10-09",
  },
  {
    slotNumber: 9,
    slotName: "A9",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 10,
    slotName: "A10",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 11,
    slotName: "A11",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 12,
    slotName: "A12",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 13,
    slotName: "A13",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 14,
    slotName: "A14",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 15,
    slotName: "A15",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 16,
    slotName: "A16",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },

  // Group B Slots
  {
    slotNumber: 17,
    slotName: "B1",
    logo: "/teams/team9.png",
    teamName: "Dark Legends",
    status: "confirmed",
    registrationDate: "2025-10-10",
  },
  {
    slotNumber: 18,
    slotName: "B2",
    logo: "/teams/team10.png",
    teamName: "Fire Dragons",
    status: "confirmed",
    registrationDate: "2025-10-11",
  },
  {
    slotNumber: 19,
    slotName: "B3",
    logo: "/teams/team11.png",
    teamName: "Steel Panthers",
    status: "confirmed",
    registrationDate: "2025-10-12",
  },
  {
    slotNumber: 20,
    slotName: "B4",
    logo: "/teams/team12.png",
    teamName: "Neon Hunters",
    status: "confirmed",
    registrationDate: "2025-10-13",
  },
  {
    slotNumber: 21,
    slotName: "B5",
    logo: "/teams/team13.png",
    teamName: "Atomic Blade",
    status: "confirmed",
    registrationDate: "2025-10-14",
  },
  {
    slotNumber: 22,
    slotName: "B6",
    logo: "/teams/team14.png",
    teamName: "Crimson Eagles",
    status: "confirmed",
    registrationDate: "2025-10-15",
  },
  {
    slotNumber: 23,
    slotName: "B7",
    logo: "/teams/team15.png",
    teamName: "Frost Bite",
    status: "confirmed",
    registrationDate: "2025-10-16",
  },
  {
    slotNumber: 24,
    slotName: "B8",
    logo: "/teams/team16.png",
    teamName: "Quantum Rush",
    status: "confirmed",
    registrationDate: "2025-10-17",
  },
  {
    slotNumber: 25,
    slotName: "B9",
    logo: "/teams/team17.png",
    teamName: "Apex Legends",
    status: "confirmed",
    registrationDate: "2025-10-18",
  },
  {
    slotNumber: 26,
    slotName: "B10",
    logo: "/teams/team18.png",
    teamName: "Void Strikers",
    status: "confirmed",
    registrationDate: "2025-10-19",
  },
  {
    slotNumber: 27,
    slotName: "B11",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 28,
    slotName: "B12",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 29,
    slotName: "B13",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 30,
    slotName: "B14",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 31,
    slotName: "B15",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 32,
    slotName: "B16",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
];
