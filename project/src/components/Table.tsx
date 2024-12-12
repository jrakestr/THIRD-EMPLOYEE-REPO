import React, { useMemo } from 'react';
import { Game } from '../types/game';
import { formatDate, formatTime, formatPercentage } from '../utils/formatters';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { ScoreCell } from './ScoreCell';

interface TableProps {
  data: Game[];
  sortField: keyof Game;
  sortDirection: 'asc' | 'desc';
  onSort: (field: keyof Game) => void;
  filterTeam: string;
}

export function Table({ data, sortField, sortDirection, onSort, filterTeam }: TableProps) {
  const sortedData = useMemo(() => {
    if (!data?.length) return [];

    return [...data]
      .filter(game => {
        if (!filterTeam) return true;
        const searchTerm = filterTeam.toLowerCase();
        return (
          game.home_team.toLowerCase().includes(searchTerm) ||
          game.away_team.toLowerCase().includes(searchTerm)
        );
      })
      .sort((a, b) => {
        const aValue = a[sortField];
        const bValue = b[sortField];
        const modifier = sortDirection === 'asc' ? 1 : -1;

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return aValue.localeCompare(bValue) * modifier;
        }

        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return (aValue - bValue) * modifier;
        }

        return 0;
      });
  }, [data, sortField, sortDirection, filterTeam]);

  if (!sortedData.length) {
    return (
      <div className="text-center py-8 text-gray-400">
        No games found matching your criteria
      </div>
    );
  }

  const SortIcon = sortDirection === 'asc' ? ArrowUp : ArrowDown;

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-4 py-2 text-left cursor-pointer hover:bg-gray-700/30" onClick={() => onSort('week')}>
              <div className="flex items-center gap-2">
                Week
                {sortField === 'week' && <SortIcon className="w-4 h-4" />}
              </div>
            </th>
            <th className="px-4 py-2 text-left cursor-pointer hover:bg-gray-700/30" onClick={() => onSort('date')}>
              <div className="flex items-center gap-2">
                Date/Time
                {sortField === 'date' && <SortIcon className="w-4 h-4" />}
              </div>
            </th>
            <th className="px-4 py-2 text-left">Teams</th>
            <th className="px-4 py-2 text-right cursor-pointer hover:bg-gray-700/30" onClick={() => onSort('by_points')}>
              <div className="flex items-center justify-end gap-2">
                Spread
                {sortField === 'by_points' && <SortIcon className="w-4 h-4" />}
              </div>
            </th>
            <th className="px-4 py-2 text-right">Score (Predicted)</th>
            <th className="px-4 py-2 text-right cursor-pointer hover:bg-gray-700/30" onClick={() => onSort('total_actual_score')}>
              <div className="flex items-center justify-end gap-2">
                Total
                {sortField === 'total_actual_score' && <SortIcon className="w-4 h-4" />}
              </div>
            </th>
            <th className="px-4 py-2 text-right cursor-pointer hover:bg-gray-700/30" onClick={() => onSort('won_sims')}>
              <div className="flex items-center justify-end gap-2">
                Win %
                {sortField === 'won_sims' && <SortIcon className="w-4 h-4" />}
              </div>
            </th>
            <th className="px-4 py-2 text-center">Result</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((game) => (
            <tr key={game.gameid} className="border-b border-gray-700 hover:bg-gray-700/30 transition-colors">
              <td className="px-4 py-2">Week {game.week}</td>
              <td className="px-4 py-2">
                {formatDate(game.date)}
                <br />
                {formatTime(game.time)}
              </td>
              <td className="px-4 py-2">
                <div className={game.away_team === game.actual_win_team ? 'font-semibold text-green-400' : ''}>
                  {game.away_team}
                </div>
                <div className={game.home_team === game.actual_win_team ? 'font-semibold text-green-400' : ''}>
                  {game.home_team}
                </div>
              </td>
              <td className="px-4 py-2 text-right">{game.by_points.toFixed(1)}</td>
              <td className="px-4 py-2">
                <ScoreCell 
                  predicted={game.away_pred} 
                  actual={game.away_actual} 
                  accuracy={game.away_accuracy}
                />
                <ScoreCell 
                  predicted={game.home_pred} 
                  actual={game.home_actual} 
                  accuracy={game.home_accuracy}
                />
              </td>
              <td className="px-4 py-2">
                <ScoreCell 
                  predicted={game.total_predicted_score} 
                  actual={game.total_actual_score} 
                  accuracy={game.prediction_accuracy}
                />
              </td>
              <td className="px-4 py-2 text-right">{formatPercentage(game.won_sims)}</td>
              <td className="px-4 py-2 text-center">
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
  );
}