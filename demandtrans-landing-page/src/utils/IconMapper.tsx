// Icon Mapper Utility
// Maps string icon names to Lucide React components

import React from 'react';
import {
  ArrowRight,
  BarChart3,
  Brain,
  Bus,
  Calculator,
  Cloud,
  Database,
  Globe,
  LineChart,
  MapPin,
  Shield,
  Smartphone,
  Users,
  ChevronRight,
  TrendingUp,
  Layers,
  Lock,
  Zap,
  BookOpen,
  ExternalLink,
  Download,
  Check,
  ChevronDown,
  ChevronUp,
  Laptop,
  Server
} from 'lucide-react';

// Type for icon names
export type IconName = 
  | 'ArrowRight'
  | 'BarChart3'
  | 'Brain'
  | 'Bus'
  | 'Calculator'
  | 'Cloud'
  | 'Database'
  | 'Globe'
  | 'LineChart'
  | 'MapPin'
  | 'Shield'
  | 'Smartphone'
  | 'Users'
  | 'ChevronRight'
  | 'TrendingUp'
  | 'Layers'
  | 'Lock'
  | 'Zap'
  | 'BookOpen'
  | 'ExternalLink'
  | 'Download'
  | 'Check'
  | 'ChevronDown'
  | 'ChevronUp'
  | 'Laptop'
  | 'Server';

// Icon mapping
const iconMap: Record<IconName, React.ReactNode> = {
  ArrowRight: <ArrowRight />,
  BarChart3: <BarChart3 />,
  Brain: <Brain />,
  Bus: <Bus />,
  Calculator: <Calculator />,
  Cloud: <Cloud />,
  Database: <Database />,
  Globe: <Globe />,
  LineChart: <LineChart />,
  MapPin: <MapPin />,
  Shield: <Shield />,
  Smartphone: <Smartphone />,
  Users: <Users />,
  ChevronRight: <ChevronRight />,
  TrendingUp: <TrendingUp />,
  Layers: <Layers />,
  Lock: <Lock />,
  Zap: <Zap />,
  BookOpen: <BookOpen />,
  ExternalLink: <ExternalLink />,
  Download: <Download />,
  Check: <Check />,
  ChevronDown: <ChevronDown />,
  ChevronUp: <ChevronUp />,
  Laptop: <Laptop />,
  Server: <Server />
};

// Function to get icon by name
export function getIcon(name: string, className?: string): React.ReactNode {
  const iconName = name as IconName;
  const icon = iconMap[iconName];
  
  if (!icon) {
    console.warn(`Icon "${name}" not found`);
    return <div className={className}>Icon</div>;
  }
  
  // Clone the icon element with the provided className
  return React.cloneElement(icon as React.ReactElement, { className });
}