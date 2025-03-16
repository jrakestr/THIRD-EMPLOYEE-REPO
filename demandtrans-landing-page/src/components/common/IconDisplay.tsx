// Icon Display Component
// Provides a reusable component for displaying icons

import React from 'react';
import { getIcon } from '../../utils/IconMapper';

interface IconDisplayProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const IconDisplay: React.FC<IconDisplayProps> = ({
  name,
  size = 'md',
  className = ''
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className={className}>
      {getIcon(name, sizes[size])}
    </div>
  );
};

export default React.memo(IconDisplay);