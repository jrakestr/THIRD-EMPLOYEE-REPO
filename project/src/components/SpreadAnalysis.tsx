import React from 'react';
import { Game } from '../types/game';
import { analyzeSpreadPerformance } from '../utils/spreadAnalysis';
import { formatPercentage, formatScore } from '../utils/formatters';
import { Scale, Home, Star, Underline, X } from 'lucide-react';

interface SpreadAnalysisProps {
  games: Game[];
  selectedTeam?: string;
  onSelectTeam: (team: string) => void;
}

export function SpreadAnalysis({ games, selectedTeam, onSelectTeam }: SpreadAnalysisProps) {
  const analysis = React.useMemo(() => 
    analyzeSpreadPerformance(games, selectedTeam), 
    [games, selectedTeam]
  );

  const teams = React.useMemo(() => 
    [...new Set(games.flatMap(g => [g.home_team, g.away_team]))].sort(),
    [games]
  );

  const baseCards = [
    {
      title: 'Small Spread (1-3)',
      value: formatPercentage(analysis.smallSpreadAccuracy),
      icon: Scale,
      color: 'text-blue-400',
      subtitle: `${analysis.smallSpreadGames} games`
    },
    {
      title: 'Medium Spread (4-7)',
      value: formatPercentage(analysis.mediumSpreadAccuracy),
      icon: Scale,
      color: 'text-green-400',
      subtitle: `${analysis.mediumSpreadGames} games`
    },
    {
      title: 'Large Spread (8+)',
      value: formatPercentage(analysis.largeSpreadAccuracy),
      icon: Scale,
      color: 'text-purple-400',
      subtitle: `${analysis.largeSpreadGames} games`
    }
  ];

  const teamCards = selectedTeam && analysis.teamSpecific ? [
    {
      title: 'Home Performance',
      value: `${analysis.teamSpecific.homeWins}/${analysis.teamSpecific.asHome}`,
      icon: Home,
      color: 'text-yellow-400',
      subtitle: `${formatPercentage(analysis.teamSpecific.homeWins / analysis.teamSpecific.asHome)} win rate`
    },
    {
      title: 'Favorite vs Underdog',
      value: `${analysis.teamSpecific.favoriteCount}/${analysis.teamSpecific.underdogCount}`,
      icon: Star,
      color: 'text-pink-400',
      subtitle: `${formatPercentage(analysis.teamSpecific.favoriteCount / analysis.totalGames)} as favorite`
    },
    {
      title: 'Average Margin',
      value: formatScore(analysis.teamSpecific.averageMargin),
      icon: Underline,
      color: 'text-orange-400',
      subtitle: 'Points per game'
    }
  ] : [
    {
      title: 'Home Team Cover Rate',
      value: formatPercentage(analysis.homeTeamCoverRate),
      icon: Home,
      color: 'text-yellow-400',
      subtitle: 'Home team performance'
    },
    {
      title: 'Favorite Win Rate',
      value: formatPercentage(analysis.favoriteWinRate),
      icon: Star,
      color: 'text-pink-400',
      subtitle: 'Favorite team wins'
    },
    {
      title: 'Underdog Win Rate',
      value: formatPercentage(analysis.underdogWinRate),
      icon: Underline,
      color: 'text-orange-400',
      subtitle: 'Underdog team wins'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 items-center">
        <span className="text-sm text-gray-400">Filter by team:</span>
        {selectedTeam && (
          <button
            onClick={() => onSelectTeam('')}
            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition-colors"
          >
            {selectedTeam}
            <X className="w-4 h-4" />
          </button>
        )}
        <div className="flex flex-wrap gap-2">
          {teams.map(team => (
            <button
              key={team}
              onClick={() => onSelectTeam(team === selectedTeam ? '' : team)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                team === selectedTeam
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
              }`}
            >
              {team}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...baseCards, ...teamCards].map((card, i) => (
          <div 
            key={i}
            className="bg-gray-800/50 rounded-xl p-6 shadow-xl backdrop-blur-sm hover:bg-gray-800 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-400 font-medium">{card.title}</h3>
              <card.icon className={`w-5 h-5 ${card.color}`} />
            </div>
            <p className="text-3xl font-bold mb-2">{card.value}</p>
            <p className="text-sm text-gray-400">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}