import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { CaseStudy } from '../models/DataModels';
import { caseStudies, DetailedCaseStudy } from '../data/caseStudies';

interface CaseStudyCardProps {
  caseStudyId: string;
  className?: string;
  showMetrics?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  caseStudyId,
  className = '',
  showMetrics = true,
  size = 'md'
}) => {
  const caseStudy = caseStudies[caseStudyId] as DetailedCaseStudy;
  
  if (!caseStudy) {
    console.warn(`Case study with ID "${caseStudyId}" not found`);
    return null;
  }

  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 ${className}`}>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={caseStudy.heroImage} 
          alt={caseStudy.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = "/MobilityDR.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-enterprise-accent/90 text-white rounded-md mb-2">
            {caseStudy.solution}
          </span>
          <h3 className="text-xl font-bold text-white">{caseStudy.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-6">
          {size === 'sm' ? `${caseStudy.description.slice(0, 80)}...` : caseStudy.description}
        </p>
        
        {showMetrics && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {caseStudy.results.slice(0, 4).map((result, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <span className="text-2xl font-bold text-enterprise-accent block">{result.key}</span>
                <span className="text-sm text-gray-600">{result.value}</span>
              </div>
            ))}
          </div>
        )}
        
        <Link to={caseStudy.link} className="inline-flex items-center text-enterprise-accent hover:gap-2 transition-all font-medium">
          View Full Case Study <ChevronRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard; 