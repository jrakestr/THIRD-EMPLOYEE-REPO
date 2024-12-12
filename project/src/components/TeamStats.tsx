import React from 'react';
import { Game } from '../types/game';
import { calculateTeamStats } from '../utils/teamStats';
import { formatPercentage, formatScore } from '../utils/formatters';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TeamStatsProps {
  games: Game[];
  selectedTeam?: string;
}

export function TeamStats({ games, selectedTeam }: TeamStatsProps) {
  const teamStats = React.useMemo(() => calculateTeamStats(games), [games]);
  const stats = selectedTeam ? teamStats.get(selectedTeam) : null;

  if (!stats) return null;

  const StreakIcon = stats.streak > 0 ? TrendingUp : TrendingDown;
  const streakColor = stats.streak > 0 ? 'text-green-400' : 'text-red-400';

  return (
    <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">{stats.team}</h2>
        <div className="flex items-center gap-2">
          <StreakIcon className={`w-5 h-5 ${streakColor}`} />
          <span className={streakColor}>
            {Math.abs(stats.streak)} game {stats.streak > 0 ? 'win' : 'loss'} streak
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <p className="text-sm text-gray-400 mb-1">Record</p>
          <p className="text-2xl font-bold">
            {stats.wins}-{stats.losses}
          </p>
          <p className="text-sm text-gray-400">
            {formatPercentage(stats.winPercentage)} win rate
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-1">Points Scored</p>
          <p className="text-2xl font-bold">{formatScore(stats.averagePointsScored)}</p>
          <p className="text-sm text-gray-400">per game</p>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-1">Points Allowed</p>
          <p className="text-2xl font-bold">{formatScore(stats.averagePointsAllowed)}</p>
          <p className="text-sm text-gray-400">per game</p>
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-1">Last 5 Games</p>
          <div className="flex gap-1">
            {stats.form.split('').map((result, index) => (
              <span
                key={`${stats.team}-form-${index}`}
                className={`w-8 h-8 flex items-center justify-center rounded ${
                  result === 'W' 
                    ? 'bg-green-500/20 text-green-400'
                    : result === 'L'
                    ? 'bg-red-500/20 text-red-400'
                    : 'bg-gray-700 text-gray-400'
                }`}
              >
                {result}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}