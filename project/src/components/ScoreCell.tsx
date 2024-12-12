import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { formatScore } from '../utils/formatters';

interface ScoreCellProps {
  predicted: number;
  actual: number;
  showTrend?: boolean;
}

export function ScoreCell({ predicted, actual, showTrend = true }: ScoreCellProps) {
  // Calculate the difference between actual and predicted
  const difference = actual - predicted;
  const percentDiff = Math.abs(difference) / predicted;
  
  let Icon = Minus;
  let color = 'text-yellow-400'; // Default for minimal difference
  let title = 'Score matched prediction';

  if (showTrend) {
    if (Math.abs(percentDiff) < 0.1) { // Within 10% difference
      Icon = Minus;
      color = 'text-yellow-400';
      title = 'Score close to prediction';
    } else if (difference > 0) {
      Icon = TrendingUp;
      color = 'text-green-400';
      title = 'Actual score higher than predicted';
    } else if (difference < 0) {
      Icon = TrendingDown;
      color = 'text-red-400';
      title = 'Actual score lower than predicted';
    }
  }

  return (
    <div className="flex items-center justify-end gap-2">
      <span>{formatScore(actual)}</span>
      {showTrend && (
        <Icon 
          className={`w-4 h-4 ${color}`} 
          title={title}
        />
      )}
      <span className="text-gray-400">
        ({formatScore(predicted)})
      </span>
    </div>
  );
}