import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MarketingCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  linkText?: string;
  className?: string;
}

const MarketingCard: React.FC<MarketingCardProps> = ({
  title,
  description,
  icon,
  link,
  linkText = "Learn More",
  className = ""
}) => {
  return (
    <div className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-enterprise-accent hover:shadow-xl transition-all ${className}`}>
      <div className="w-12 h-12 bg-enterprise-accent/10 rounded-lg flex items-center justify-center mb-6 text-enterprise-accent">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-enterprise-primary">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">
        {description}
      </p>
      <a href={link} className="inline-flex items-center text-enterprise-accent hover:gap-2 transition-all">
        {linkText} <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  );
};

export default MarketingCard;