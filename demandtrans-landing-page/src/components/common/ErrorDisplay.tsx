// Error Display Component
// Provides a reusable error display component

import React from 'react';

interface ErrorDisplayProps {
  error: Error | null;
  className?: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({
  error,
  className = ''
}) => {
  if (!error) return null;

  return (
    <div className={`p-4 bg-red-50 border border-red-200 rounded-lg ${className}`}>
      <h3 className="text-lg font-semibold text-red-600 mb-2">Error</h3>
      <p className="text-gray-700">{error.message}</p>
    </div>
  );
};

export default React.memo(ErrorDisplay);