import { Game } from '../types/game';
import { calculateAccuracy } from './formatters';

export function parseGameData(csvContent: string): Game[] {
  if (!csvContent?.trim()) return [];

  try {
    const lines = csvContent.trim().split('\n');
    if (lines.length < 2) return [];

    const games: Game[] = [];
    const processedIds = new Set<number>();

    for (const line of lines.slice(1)) {
      try {
        const [
          gameid, date, time, away_team, home_team, 
          by_points, away_pred, home_pred, won_sims, 
          avg_margin, actual_win_team, away_actual, 
          home_actual, _, result_fav, __, week
        ] = line.split(',').map(val => val?.trim() || '');

        // Validate required fields
        const gameId = parseInt(gameid);
        if (!gameId || processedIds.has(gameId)) continue;

        // Parse numeric values
        const numericValues = {
          away_pred: parseFloat(away_pred) || 0,
          home_pred: parseFloat(home_pred) || 0,
          away_actual: parseFloat(away_actual) || 0,
          home_actual: parseFloat(home_actual) || 0,
          by_points: parseFloat(by_points) || 0,
          won_sims: parseFloat(won_sims) || 0,
          avg_margin: parseFloat(avg_margin) || 0,
          week: parseInt(week) || 0
        };

        // Calculate totals and accuracies
        const total_predicted_score = numericValues.away_pred + numericValues.home_pred;
        const total_actual_score = numericValues.away_actual + numericValues.home_actual;

        const game: Game = {
          gameid: gameId,
          date: date || '',
          time: time || '',
          away_team: away_team || '',
          home_team: home_team || '',
          ...numericValues,
          actual_win_team: actual_win_team || '',
          result_fav_win: result_fav === 'Y',
          total_predicted_score,
          total_actual_score,
          prediction_accuracy: calculateAccuracy(total_predicted_score, total_actual_score),
          away_accuracy: calculateAccuracy(numericValues.away_pred, numericValues.away_actual),
          home_accuracy: calculateAccuracy(numericValues.home_pred, numericValues.home_actual)
        };

        processedIds.add(gameId);
        games.push(game);
      } catch (error) {
        console.warn('Error parsing game line:', error);
        continue;
      }
    }

    // Sort by week and date
    return games.sort((a, b) => 
      a.week - b.week || 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  } catch (error) {
    console.error('Error parsing game data:', error);
    return [];
  }
}