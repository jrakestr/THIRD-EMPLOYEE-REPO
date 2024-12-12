import React from 'react';
import { Game, GameStats } from '../types/game';
import { Target, Percent, Trophy, ArrowUpRight, Hash } from 'lucide-react';
import { formatPercentage, formatScore } from '../utils/formatters';

interface StatsProps {
  games: Game[];
}

export function Stats({ games }: StatsProps) {
  const stats = React.useMemo<GameStats>(() => {
    const totalGames = games.length;
    const correctPredictions = games.filter(g => g.result_fav_win).length;
    const avgMargin = games.reduce((acc, g) => acc + g.avg_margin, 0) / totalGames;
    const avgWinProb = games.reduce((acc, g) => acc + g.won_sims, 0) / totalGames;
    
    const highestScoring = games.reduce((max, game) => {
      const totalScore = (game.away_actual || 0) + (game.home_actual || 0);
      return totalScore > max.score ? { score: totalScore, game } : max;
    }, { score: 0, game: games[0] });

    const biggestUpset = games.reduce((upset, game) => {
      if (!game.result_fav_win && game.won_sims < upset.probability) {
        return { probability: game.won_sims, game };
      }
      return upset;
    }, { probability: 1, game: games[0] });

    const averageTotalScore = games.reduce((acc, game) => 
      acc + ((game.away_actual || 0) + (game.home_actual || 0)), 0) / totalGames;

    const predictionAccuracy = games.reduce((acc, game) => {
      if (!game.prediction_accuracy) return acc;
      return acc + (game.prediction_accuracy <= 0.1 ? 1 : 0);
    }, 0) / totalGames;

    return {
      totalGames,
      correctPredictions,
      accuracy: correctPredictions / totalGames,
      avgMargin,
      avgWinProb,
      highestScoring,
      biggestUpset,
      averageTotalScore,
      predictionAccuracy
    };
  }, [games]);

  const cards = [
    {
      title: 'Prediction Accuracy',
      value: formatPercentage(stats.accuracy),
      icon: Target,
      color: 'text-green-400',
      subtitle: `${stats.correctPredictions} correct of ${stats.totalGames}`
    },
    {
      title: 'Average Total Score',
      value: formatScore(stats.averageTotalScore),
      icon: Hash,
      color: 'text-blue-400',
      subtitle: 'Points per game'
    },
    {
      title: 'Biggest Upset',
      value: formatPercentage(stats.biggestUpset.probability),
      icon: ArrowUpRight,
      color: 'text-yellow-400',
      subtitle: `${stats.biggestUpset.game.actual_win_team} victory`
    },
    {
      title: 'Highest Scoring',
      value: formatScore(stats.highestScoring.score),
      icon: Trophy,
      color: 'text-purple-400',
      subtitle: `${stats.highestScoring.game.away_team} vs ${stats.highestScoring.game.home_team}`
    }
  ];

  return (
    <>
      {cards.map((card, i) => (
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
    </>
  );
}