import React from 'react';

interface BrandedCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  featured?: boolean;
}

const BrandedCard: React.FC<BrandedCardProps> = ({ 
  title, 
  children,
  className = '',
  featured = false
}) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-enterprise-accent hover:shadow-lg transition-all ${featured ? 'border-l-4 border-l-enterprise-accent' : ''} ${className}`}>
      <h3 className="text-xl font-bold mb-4 text-enterprise-primary font-heading">
        {title}
      </h3>
      {children}
    </div>
  );
};

export default BrandedCard;