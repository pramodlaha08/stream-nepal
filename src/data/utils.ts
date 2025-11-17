import { Tournament } from "./types";

/**
 * Helper function to check if tournament should show streaming content
 * @param tournament Tournament object
 * @returns boolean indicating if tournament is completed and should show streaming
 */
export const isTournamentStreamed = (tournament: Tournament): boolean => {
  if (!tournament.dates.tournament.end) return false;

  const currentDate = new Date();
  const tournamentEndDate = new Date(tournament.dates.tournament.end);

  // If current date is after tournament end date, show streaming content
  return currentDate > tournamentEndDate;
};

/**
 * Helper function to get tournament status based on dates
 * @param tournament Tournament object
 * @returns current status of the tournament
 */
export const getTournamentStatus = (
  tournament: Tournament
): Tournament["status"] => {
  const currentDate = new Date();

  // If dates are not set, return the tournament's status
  if (
    !tournament.dates.registration.start ||
    !tournament.dates.registration.end ||
    !tournament.dates.tournament.start ||
    !tournament.dates.tournament.end
  ) {
    return tournament.status;
  }

  const registrationStart = new Date(tournament.dates.registration.start);
  const registrationEnd = new Date(tournament.dates.registration.end);
  const tournamentStart = new Date(tournament.dates.tournament.start);
  const tournamentEnd = new Date(tournament.dates.tournament.end);

  if (currentDate < registrationStart) {
    return "upcoming";
  } else if (
    currentDate >= registrationStart &&
    currentDate <= registrationEnd
  ) {
    return "registration";
  } else if (currentDate > registrationEnd && currentDate < tournamentStart) {
    return "upcoming";
  } else if (currentDate >= tournamentStart && currentDate <= tournamentEnd) {
    return "live";
  } else {
    return "finished";
  }
};

/**
 * Helper function to calculate registration progress
 * @param registeredTeams Number of registered teams
 * @param maxTeams Maximum number of teams
 * @returns percentage of registration progress
 */
export const getRegistrationProgress = (
  registeredTeams: number,
  maxTeams: number
): number => {
  return Math.round((registeredTeams / maxTeams) * 100);
};

/**
 * Helper function to format date for display
 * @param dateString Date string in ISO format
 * @param locale Locale for formatting (default: 'en-US')
 * @returns Formatted date string
 */
export const formatTournamentDate = (
  dateString?: string,
  locale: string = "en-US"
): string => {
  if (!dateString) return "Coming Soon";

  return new Date(dateString).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/**
 * Helper function to get days remaining until tournament
 * @param tournamentDate Tournament start date
 * @returns number of days remaining (negative if past, null if no date)
 */
export const getDaysRemaining = (tournamentDate?: string): number | null => {
  if (!tournamentDate) return null;

  const currentDate = new Date();
  const tournament = new Date(tournamentDate);
  const timeDiff = tournament.getTime() - currentDate.getTime();
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
};
