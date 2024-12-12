import React, { useMemo } from 'react';
import { Game } from '../types/game';
import { formatDate, formatTime, formatPercentage } from '../utils/formatters';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { ScoreCell } from './ScoreCell';

interface ScheduleProps {
  games: Game[];
  filterTeam: string;
}

export function Schedule({ games, filterTeam }: ScheduleProps) {
  const [expandedWeeks, setExpandedWeeks] = React.useState<Set<number>>(new Set([1]));

  const gamesByWeek = useMemo(() => {
    const filtered = filterTeam
      ? games.filter(g => 
          g.home_team.toLowerCase().includes(filterTeam.toLowerCase()) ||
          g.away_team.toLowerCase().includes(filterTeam.toLowerCase())
        )
      : games;

    return filtered.reduce((acc, game) => {
      if (!acc.has(game.week)) {
        acc.set(game.week, []);
      }
      acc.get(game.week)!.push(game);
      return acc;
    }, new Map<number, Game[]>());
  }, [games, filterTeam]);

  const toggleWeek = (week: number) => {
    setExpandedWeeks(prev => {
      const next = new Set(prev);
      if (next.has(week)) {
        next.delete(week);
      } else {
        next.add(week);
      }
      return next;
    });
  };

  if (!gamesByWeek.size) {
    return (
      <div className="text-center py-8 text-gray-400">
        No games found matching your criteria
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {Array.from(gamesByWeek.entries()).map(([week, weekGames]) => (
        <div key={week} className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm">
          <button
            onClick={() => toggleWeek(week)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-700/30 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-semibold">Week {week}</h3>
              <span className="text-sm text-gray-400">
                ({weekGames.length} games)
              </span>
            </div>
            {expandedWeeks.has(week) ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {expandedWeeks.has(week) && (
            <div className="border-t border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700 bg-gray-800/30">
                    <th className="px-6 py-3 text-left">Date/Time</th>
                    <th className="px-6 py-3 text-left">Matchup</th>
                    <th className="px-6 py-3 text-right">Spread</th>
                    <th className="px-6 py-3 text-right">Win Prob</th>
                    <th className="px-6 py-3 text-right">Score</th>
                    <th className="px-6 py-3 text-center">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {weekGames.map(game => (
                    <tr key={game.gameid} className="border-b border-gray-700 last:border-0 hover:bg-gray-700/30 transition-colors">
                      <td className="px-6 py-4">
                        {formatDate(game.date)}
                        <br />
                        <span className="text-gray-400">{formatTime(game.time)}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className={game.away_team === game.actual_win_team ? 'font-semibold text-green-400' : ''}>
                          {game.away_team}
                        </div>
                        <div className={game.home_team === game.actual_win_team ? 'font-semibold text-green-400' : ''}>
                          @ {game.home_team}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        {game.by_points > 0 ? '+' : ''}{game.by_points.toFixed(1)}
                      </td>
                      <td className="px-6 py-4 text-right">
                        {formatPercentage(game.won_sims)}
                      </td>
                      <td className="px-6 py-4">
                        <ScoreCell 
                          predicted={game.away_pred} 
                          actual={game.away_actual} 
                          showTrend={false}
                        />
                        <ScoreCell 
                          predicted={game.home_pred} 
                          actual={game.home_actual} 
                          showTrend={false}
                        />
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          game.result_fav_win ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {game.result_fav_win ? 'WIN' : 'LOSS'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}