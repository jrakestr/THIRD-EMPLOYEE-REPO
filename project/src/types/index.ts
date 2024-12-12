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
}