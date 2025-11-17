// Export all tournament types
export * from "./types";

// Export utility functions
export * from "./utils";

// Export tournament data
export * from "./pmwc";
export * from "./snbattlefield";
export * from "./ffwarzone";

// Tournament registry for easy access
import { pmwcTournament } from "./pmwc";
import { ffwarzoneeTournament } from "./ffwarzone";
import { Tournament } from "./types";

export const allTournaments: Tournament[] = [
  pmwcTournament,
  ffwarzoneeTournament,
];

// Tournament lookup by ID
export const getTournamentById = (id: string): Tournament | undefined => {
  return allTournaments.find((tournament) => tournament.id === id);
};

// Tournament lookup by game
export const getTournamentsByGame = (game: string): Tournament[] => {
  return allTournaments.filter((tournament) =>
    tournament.game.toLowerCase().includes(game.toLowerCase())
  );
};

// Get active tournaments (registration open or live)
export const getActiveTournaments = (): Tournament[] => {
  return allTournaments.filter(
    (tournament) =>
      tournament.status === "registration" || tournament.status === "live"
  );
};

// Get upcoming tournaments
export const getUpcomingTournaments = (): Tournament[] => {
  return allTournaments.filter(
    (tournament) => tournament.status === "upcoming"
  );
};
