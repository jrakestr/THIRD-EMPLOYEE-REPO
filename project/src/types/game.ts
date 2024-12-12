export interface Game {
  gameid: number;
  date: string;
  time: string;
  away_team: string;
  home_team: string;
  by_points: number;
  away_pred: number;
  home_pred: number;
  won_sims: number;
  avg_margin: number;
  actual_win_team: string;
  away_actual: number;
  home_actual: number;
  result_fav_win: boolean;
  total_predicted_score: number;
  total_actual_score: number;
  prediction_accuracy: number;
  away_accuracy: number;
  home_accuracy: number;
  week: number;
}

export interface GameStats {
  totalGames: number;
  correctPredictions: number;
  accuracy: number;
  avgMargin: number;
  avgWinProb: number;
  highestScoring: {
    score: number;
    game: Game;
  };
  biggestUpset: {
    probability: number;
    game: Game;
  };
  averageTotalScore: number;
  predictionAccuracy: number;
  weeklyAccuracy: Map<number, number>;
}