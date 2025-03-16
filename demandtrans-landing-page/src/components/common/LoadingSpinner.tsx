// Loading Spinner Component
// Provides a reusable loading spinner component

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'accent' | 'white';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = 'accent',
  className = ''
}) => {
  const sizes = {
    sm: 'h-6 w-6',
    md: 'h-10 w-10',
    lg: 'h-16 w-16'
  };

  const colors = {
    primary: 'border-enterprise-primary',
    accent: 'border-enterprise-accent',
    white: 'border-white'
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`${sizes[size]} animate-spin rounded-full border-t-2 border-b-2 ${colors[color]}`}
      ></div>
    </div>
  );
};

export default React.memo(LoadingSpinner);