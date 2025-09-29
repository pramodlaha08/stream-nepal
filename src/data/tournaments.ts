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
  matchSchedule?: {
    matchNumber: number;
    matchName: string;
    time: string;
    map: string;
    round: string;
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
    {
      name: "Gaming Hub",
      logo: "/sponsors/gaming-hub.png",
      website: "https://gaminghub.com",
    },
    {
      name: "Tech Solutions",
      logo: "/sponsors/tech-solutions.png",
      website: "https://techsolutions.com",
    },
    {
      name: "Esports Arena",
      logo: "/sponsors/esports-arena.png",
      website: "https://esportsarena.com",
    },
  ],
  matchSchedule: [
    {
      matchNumber: 1,
      matchName: "Opening Match",
      time: "10:00 AM",
      map: "Erangel",
      round: "Round 1",
    },
    {
      matchNumber: 2,
      matchName: "Elimination Round",
      time: "11:30 AM",
      map: "Miramar",
      round: "Round 1",
    },
    {
      matchNumber: 3,
      matchName: "Survival Match",
      time: "1:00 PM",
      map: "Sanhok",
      round: "Round 2",
    },
    {
      matchNumber: 4,
      matchName: "Intensity Round",
      time: "2:30 PM",
      map: "Vikendi",
      round: "Round 2",
    },
    {
      matchNumber: 5,
      matchName: "Quarter Finals",
      time: "4:00 PM",
      map: "Livik",
      round: "Quarter Finals",
    },
    {
      matchNumber: 6,
      matchName: "Semi Finals",
      time: "5:30 PM",
      map: "Erangel",
      round: "Semi Finals",
    },
    {
      matchNumber: 7,
      matchName: "Grand Finals",
      time: "7:00 PM",
      map: "Miramar",
      round: "Finals",
    },
  ],
};

// Tournament Slots Data
export const pmwcSlots: TournamentSlot[] = [
  // Tournament Slots
  {
    slotNumber: 1,
    slotName: "#1",
    logo: "/teams/team1.png",
    teamName: "Alpha Wolves",
    status: "confirmed",
    registrationDate: "2025-10-02",
  },
  {
    slotNumber: 2,
    slotName: "#2",
    logo: "/teams/team2.png",
    teamName: "Cyber Knights",
    status: "confirmed",
    registrationDate: "2025-10-03",
  },
  {
    slotNumber: 3,
    slotName: "#3",
    logo: "/teams/team3.png",
    teamName: "Phoenix Squad",
    status: "confirmed",
    registrationDate: "2025-10-04",
  },
  {
    slotNumber: 4,
    slotName: "#4",
    logo: "/teams/team4.png",
    teamName: "Storm Riders",
    status: "confirmed",
    registrationDate: "2025-10-05",
  },
  {
    slotNumber: 5,
    slotName: "#5",
    logo: "/teams/team5.png",
    teamName: "Venom Strike",
    status: "confirmed",
    registrationDate: "2025-10-06",
  },
  {
    slotNumber: 6,
    slotName: "#6",
    logo: "/teams/team6.png",
    teamName: "Thunder Bolts",
    status: "confirmed",
    registrationDate: "2025-10-07",
  },
  {
    slotNumber: 7,
    slotName: "#7",
    logo: "/teams/team7.png",
    teamName: "Shadow Force",
    status: "confirmed",
    registrationDate: "2025-10-08",
  },
  {
    slotNumber: 8,
    slotName: "#8",
    logo: "/teams/team8.png",
    teamName: "Ice Breakers",
    status: "confirmed",
    registrationDate: "2025-10-09",
  },
  {
    slotNumber: 9,
    slotName: "#9",
    logo: "/teams/team9.png",
    teamName: "Dark Legends",
    status: "confirmed",
    registrationDate: "2025-10-10",
  },
  {
    slotNumber: 10,
    slotName: "#10",
    logo: "/teams/team10.png",
    teamName: "Fire Dragons",
    status: "confirmed",
    registrationDate: "2025-10-11",
  },
  {
    slotNumber: 11,
    slotName: "#11",
    logo: "/teams/team11.png",
    teamName: "Steel Panthers",
    status: "confirmed",
    registrationDate: "2025-10-12",
  },
  {
    slotNumber: 12,
    slotName: "#12",
    logo: "/teams/team12.png",
    teamName: "Neon Hunters",
    status: "confirmed",
    registrationDate: "2025-10-13",
  },
  {
    slotNumber: 13,
    slotName: "#13",
    logo: "/teams/team13.png",
    teamName: "Atomic Blade",
    status: "confirmed",
    registrationDate: "2025-10-14",
  },
  {
    slotNumber: 14,
    slotName: "#14",
    logo: "/teams/team14.png",
    teamName: "Crimson Eagles",
    status: "confirmed",
    registrationDate: "2025-10-15",
  },
  {
    slotNumber: 15,
    slotName: "#15",
    logo: "/teams/team15.png",
    teamName: "Frost Bite",
    status: "confirmed",
    registrationDate: "2025-10-16",
  },
  {
    slotNumber: 16,
    slotName: "#16",
    logo: "/teams/team16.png",
    teamName: "Quantum Rush",
    status: "confirmed",
    registrationDate: "2025-10-17",
  },
  {
    slotNumber: 17,
    slotName: "#17",
    logo: "/teams/team17.png",
    teamName: "Apex Legends",
    status: "confirmed",
    registrationDate: "2025-10-18",
  },
  {
    slotNumber: 18,
    slotName: "#18",
    logo: "/teams/team18.png",
    teamName: "Void Strikers",
    status: "confirmed",
    registrationDate: "2025-10-19",
  },
  {
    slotNumber: 19,
    slotName: "#19",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 20,
    slotName: "#20",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 21,
    slotName: "#21",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 22,
    slotName: "#22",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 23,
    slotName: "#23",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 24,
    slotName: "#24",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 25,
    slotName: "#25",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 26,
    slotName: "#26",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 27,
    slotName: "#27",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 28,
    slotName: "#28",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 29,
    slotName: "#29",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 30,
    slotName: "#30",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 31,
    slotName: "#31",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
  {
    slotNumber: 32,
    slotName: "#32",
    logo: "/teams/default.png",
    teamName: "TBD",
    status: "available",
  },
];
