// Core interfaces for tournament system
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
  streamingPlatforms?: {
    name: string;
    url: string;
    icon: string;
    color: string;
  }[];
  registrationUrl?: string;
  youtubeVideoId?: string;
}

export interface TournamentSlot {
  slotNumber: number;
  slotName: string;
  logo: string;
  teamName: string;
  status: "available" | "reserved" | "confirmed";
  registrationDate?: string;
}

// Match interface for detailed match information
export interface Match {
  matchId: string;
  matchNumber: number;
  matchName: string;
  round: string;
  time: string;
  date: string;
  map: string;
  teams: string[];
  status: "upcoming" | "live" | "completed";
  result?: {
    winner: string;
    placement: { teamName: string; position: number; kills: number }[];
  };
}

// Sponsor interface
export interface Sponsor {
  name: string;
  logo: string;
  website: string;
  tier: "title" | "platinum" | "gold" | "silver" | "bronze";
}

// Streaming platform interface
export interface StreamingPlatform {
  name: string;
  url: string;
  icon: string;
  color: string;
  isLive?: boolean;
}

// Prize pool interface
export interface PrizePool {
  total: string;
  currency: string;
  breakdown: {
    position: string;
    amount: string;
    percentage?: number;
  }[];
}

// Tournament dates interface
export interface TournamentDates {
  registration: {
    start: string;
    end: string;
  };
  tournament: {
    start: string;
    end: string;
  };
  practice?: {
    start: string;
    end: string;
  };
}

// Tournament statistics interface
export interface TournamentStats {
  totalTeams: number;
  registeredTeams: number;
  totalMatches: number;
  totalPrizePool: string;
  viewerCount?: number;
}
