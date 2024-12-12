import React from 'react';
import { Trophy } from 'lucide-react';
import { Game } from '../types/game';
import { formatPercentage } from '../utils/formatters';

interface WinLossRecordProps {
  games: Game[];
}

export function WinLossRecord({ games }: WinLossRecordProps) {
  const stats = React.useMemo(() => {
    const favoriteWins = games.filter(g => g.result_fav_win).length;
    const underdogWins = games.filter(g => !g.result_fav_win).length;
    const total = games.length;
    const winPercentage = total > 0 ? favoriteWins / total : 0;

    return {
      wins: favoriteWins,
      losses: underdogWins,
      total,
      percentage: winPercentage
    };
  }, [games]);

  return (
    <div className="bg-gray-800/50 rounded-xl p-6 shadow-xl backdrop-blur-sm hover:bg-gray-800 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-400 font-medium">Season Record</h3>
        <Trophy className="w-5 h-5 text-amber-400" />
      </div>
      <div className="flex items-baseline gap-2">
        <p className="text-3xl font-bold">{stats.wins}-{stats.losses}</p>
        <p className="text-lg text-gray-400">({formatPercentage(stats.percentage)})</p>
      </div>
      <p className="text-sm text-gray-400 mt-2">
        {stats.total} games played
      </p>
    </div>
  );
}