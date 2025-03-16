import React from 'react';

interface BrandedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const BrandedButton: React.FC<BrandedButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick,
  type = 'button',
  ...props 
}) => {
  const variants = {
    primary: "bg-enterprise-primary text-white hover:bg-enterprise-primary/90",
    accent: "bg-enterprise-accent text-white hover:bg-enterprise-accent/90",
    outline: "border border-enterprise-primary text-enterprise-primary hover:bg-enterprise-primary/10"
  };
  
  return (
    <button 
      className={`px-6 py-3 rounded-lg transition-colors ${variants[variant]} font-medium ${className}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default BrandedButton;