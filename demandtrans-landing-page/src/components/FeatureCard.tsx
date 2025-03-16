import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  link,
  delay = 0
}) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-enterprise-accent hover:shadow-lg transition-all"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 bg-enterprise-accent/10 rounded-lg flex items-center justify-center mb-4 text-enterprise-accent">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-enterprise-primary font-heading">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <Link to={link} className="inline-flex items-center text-enterprise-accent hover:gap-2 transition-all font-medium">
        Learn More <ChevronRight className="ml-1 w-4 h-4" />
      </Link>
    </div>
  );
};

export default FeatureCard;