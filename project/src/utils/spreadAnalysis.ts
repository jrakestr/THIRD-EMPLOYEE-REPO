import { Game } from '../types/game';

export interface SpreadAnalysis {
  smallSpreadGames: number;
  mediumSpreadGames: number;
  largeSpreadGames: number;
  smallSpreadAccuracy: number;
  mediumSpreadAccuracy: number;
  largeSpreadAccuracy: number;
  homeTeamCoverRate: number;
  favoriteWinRate: number;
  underdogWinRate: number;
  averageSpread: number;
  totalGames: number;
  teamSpecific?: {
    asHome: number;
    asAway: number;
    homeWins: number;
    awayWins: number;
    favoriteCount: number;
    underdogCount: number;
    averageMargin: number;
  };
}

export function analyzeSpreadPerformance(games: Game[], teamFilter?: string): SpreadAnalysis {
  const filteredGames = teamFilter 
    ? games.filter(g => g.home_team === teamFilter || g.away_team === teamFilter)
    : games;

  const analysis = filteredGames.reduce((acc, game) => {
    // Categorize spreads
    if (game.by_points <= 3) acc.smallSpreadGames++;
    else if (game.by_points <= 7) acc.mediumSpreadGames++;
    else acc.largeSpreadGames++;

    // Track accuracy by spread size
    if (game.result_fav_win) {
      if (game.by_points <= 3) acc.smallSpreadAccuracy++;
      else if (game.by_points <= 7) acc.mediumSpreadAccuracy++;
      else acc.largeSpreadAccuracy++;
    }

    // Track home team performance
    const homeTeamWon = game.actual_win_team === game.home_team;
    if (homeTeamWon) acc.homeTeamCoverRate++;

    // Track favorite vs underdog performance
    if (game.result_fav_win) acc.favoriteWinRate++;
    else acc.underdogWinRate++;

    acc.averageSpread += game.by_points;

    // Team-specific analysis
    if (teamFilter) {
      const teamSpecific = acc.teamSpecific!;
      const isHome = game.home_team === teamFilter;
      const isAway = game.away_team === teamFilter;
      const isWinner = game.actual_win_team === teamFilter;

      if (isHome) {
        teamSpecific.asHome++;
        if (isWinner) teamSpecific.homeWins++;
      }
      if (isAway) {
        teamSpecific.asAway++;
        if (isWinner) teamSpecific.awayWins++;
      }

      const isFavorite = (isHome && game.by_points > 0) || (isAway && game.by_points < 0);
      if (isFavorite) teamSpecific.favoriteCount++;
      else teamSpecific.underdogCount++;

      teamSpecific.averageMargin += game.avg_margin;
    }

    return acc;
  }, {
    smallSpreadGames: 0,
    mediumSpreadGames: 0,
    largeSpreadGames: 0,
    smallSpreadAccuracy: 0,
    mediumSpreadAccuracy: 0,
    largeSpreadAccuracy: 0,
    homeTeamCoverRate: 0,
    favoriteWinRate: 0,
    underdogWinRate: 0,
    averageSpread: 0,
    totalGames: filteredGames.length,
    ...(teamFilter && {
      teamSpecific: {
        asHome: 0,
        asAway: 0,
        homeWins: 0,
        awayWins: 0,
        favoriteCount: 0,
        underdogCount: 0,
        averageMargin: 0
      }
    })
  });

  const totalGames = analysis.totalGames;

  if (teamFilter && analysis.teamSpecific) {
    analysis.teamSpecific.averageMargin /= totalGames;
  }

  return {
    ...analysis,
    smallSpreadAccuracy: analysis.smallSpreadAccuracy / (analysis.smallSpreadGames || 1),
    mediumSpreadAccuracy: analysis.mediumSpreadAccuracy / (analysis.mediumSpreadGames || 1),
    largeSpreadAccuracy: analysis.largeSpreadAccuracy / (analysis.largeSpreadGames || 1),
    homeTeamCoverRate: analysis.homeTeamCoverRate / totalGames,
    favoriteWinRate: analysis.favoriteWinRate / totalGames,
    underdogWinRate: analysis.underdogWinRate / totalGames,
    averageSpread: analysis.averageSpread / totalGames
  };
}