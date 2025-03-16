import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'light' | 'dark';
  linkTo?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'default',
  linkTo = null
}) => {
  const sizes = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  const logoContent = (
    <>
      <div className={`${sizes[size]} aspect-square flex items-center justify-center bg-enterprise-primary rounded-md`}>
        <span className="text-white font-bold font-heading">DT</span>
      </div>
      
      <div className="flex flex-col">
        <span className={`font-heading font-bold text-${size === 'sm' ? 'base' : size === 'md' ? 'lg' : 'xl'} leading-tight`} style={{ color: variant === 'light' ? '#ffffff' : '#0056a6' }}>
          DemandTrans
        </span>
        <span className="text-xs tracking-wider text-enterprise-accent uppercase">
          SOLUTIONS
        </span>
      </div>
    </>
  );

  // If linkTo is provided, wrap in a div to avoid nested anchor tags
  if (linkTo) {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {logoContent}
      </div>
    );
  }

  // Otherwise just return the content in a div
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {logoContent}
    </div>
  );
};

export default Logo;