import React from 'react';

interface LogoAnimationProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const LogoAnimation: React.FC<LogoAnimationProps> = ({
  className = '',
  size = 'md'
}) => {
  const sizes = {
    sm: 'h-16',
    md: 'h-24',
    lg: 'h-32'
  };

  return (
    <div className={`${className} relative`}>
      <img 
        src="https://i.imgur.com/Wy9JCBM.png" 
        alt="DemandTrans Logo" 
        className={`${sizes[size]} w-auto object-contain animate-float`}
      />
      
      {/* Motion lines overlay */}
      <div className="absolute inset-0 motion-lines">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-enterprise-accent to-transparent rounded-full animate-pulse"></div>
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-enterprise-accent to-transparent rounded-full animate-pulse mt-2" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-8 h-1 bg-gradient-to-r from-transparent via-enterprise-accent to-transparent rounded-full animate-pulse mt-2" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-enterprise-accent/0 via-enterprise-accent/20 to-enterprise-accent/0 rounded-full filter blur-xl opacity-50 animate-pulse" style={{ animationDuration: '3s' }}></div>
    </div>
  );
};

export default LogoAnimation;