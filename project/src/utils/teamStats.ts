import { Game } from '../types/game';

export interface TeamStats {
  team: string;
  totalGames: number;
  wins: number;
  losses: number;
  winPercentage: number;
  averagePointsScored: number;
  averagePointsAllowed: number;
  form: string; // Last 5 games: W/L pattern
  streak: number; // Positive for wins, negative for losses
}

export function calculateTeamStats(games: Game[]): Map<string, TeamStats> {
  const teamStats = new Map<string, TeamStats>();

  // Initialize stats for all teams
  games.forEach(game => {
    [game.home_team, game.away_team].forEach(team => {
      if (!teamStats.has(team)) {
        teamStats.set(team, {
          team,
          totalGames: 0,
          wins: 0,
          losses: 0,
          winPercentage: 0,
          averagePointsScored: 0,
          averagePointsAllowed: 0,
          form: '',
          streak: 0
        });
      }
    });
  });

  // Calculate stats for each team
  games.forEach(game => {
    const homeStats = teamStats.get(game.home_team)!;
    const awayStats = teamStats.get(game.away_team)!;

    // Update game counts
    homeStats.totalGames++;
    awayStats.totalGames++;

    // Update wins/losses
    if (game.actual_win_team === game.home_team) {
      homeStats.wins++;
      awayStats.losses++;
    } else if (game.actual_win_team === game.away_team) {
      awayStats.wins++;
      homeStats.losses++;
    }

    // Update points
    if (game.home_actual && game.away_actual) {
      homeStats.averagePointsScored = updateAverage(
        homeStats.averagePointsScored,
        game.home_actual,
        homeStats.totalGames
      );
      homeStats.averagePointsAllowed = updateAverage(
        homeStats.averagePointsAllowed,
        game.away_actual,
        homeStats.totalGames
      );
      awayStats.averagePointsScored = updateAverage(
        awayStats.averagePointsScored,
        game.away_actual,
        awayStats.totalGames
      );
      awayStats.averagePointsAllowed = updateAverage(
        awayStats.averagePointsAllowed,
        game.home_actual,
        awayStats.totalGames
      );
    }
  });

  // Calculate win percentages and form
  teamStats.forEach(stats => {
    stats.winPercentage = stats.wins / stats.totalGames;
    stats.form = calculateTeamForm(games, stats.team);
    stats.streak = calculateTeamStreak(games, stats.team);
  });

  return teamStats;
}

function updateAverage(currentAvg: number, newValue: number, count: number): number {
  return ((currentAvg * (count - 1)) + newValue) / count;
}

function calculateTeamForm(games: Game[], team: string): string {
  const last5Games = games
    .filter(game => game.home_team === team || game.away_team === team)
    .slice(-5)
    .map(game => {
      const isWin = game.actual_win_team === team;
      return isWin ? 'W' : 'L';
    })
    .join('');

  return last5Games.padStart(5, '-');
}

function calculateTeamStreak(games: Game[], team: string): number {
  let streak = 0;
  const teamGames = games
    .filter(game => game.home_team === team || game.away_team === team)
    .reverse();

  if (!teamGames.length) return 0;

  const firstGame = teamGames[0];
  const isFirstGameWin = firstGame.actual_win_team === team;
  
  for (const game of teamGames) {
    const isWin = game.actual_win_team === team;
    if (isWin === isFirstGameWin) {
      streak += isWin ? 1 : -1;
    } else {
      break;
    }
  }

  return streak;
}