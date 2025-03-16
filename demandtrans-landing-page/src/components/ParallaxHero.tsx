import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoAnimation from './LogoAnimation';

interface ParallaxHeroProps {
  title: string;
  subtitle: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  secondaryButtonIcon?: React.ReactNode;
  imageUrl?: string;
}

const ParallaxHero: React.FC<ParallaxHeroProps> = ({ 
  title, 
  subtitle,
  primaryButtonText = "Explore Solutions",
  primaryButtonLink = "/solutions",
  secondaryButtonText = "Request Demo",
  secondaryButtonLink = "#",
  secondaryButtonIcon = <ArrowRight className="w-5 h-5" />,
  imageUrl = "https://images.unsplash.com/photo-1556122071-e404cb6f31c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
}) => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create animated dots
    const createDots = () => {
      if (!dotsRef.current) return;
      
      dotsRef.current.innerHTML = '';
      const dotCount = window.innerWidth < 768 ? 10 : 20;
      
      for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.className = 'animated-dot';
        
        // Random position
        dot.style.left = `${Math.random() * 100}%`;
        dot.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 20 + 5;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        
        // Random animation delay
        dot.style.animationDelay = `${Math.random() * 4}s`;
        
        dotsRef.current.appendChild(dot);
      }
      
      // Create animated lines
      const lineCount = window.innerWidth < 768 ? 3 : 5;
      
      for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        line.className = 'animated-line';
        
        // Position
        line.style.top = `${20 + (i * 15)}%`;
        line.style.left = '0';
        line.style.right = '0';
        
        // Random width
        line.style.width = `${Math.random() * 30 + 70}%`;
        
        // Random animation delay
        line.style.animationDelay = `${Math.random() * 4}s`;
        
        dotsRef.current.appendChild(line);
      }
    };

    createDots();
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', createDots);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', createDots);
    };
  }, []);

  const calculateParallax = (factor: number) => {
    if (!heroRef.current) return 0;
    const scrollPercentage = Math.min(scrollY / (heroRef.current.offsetHeight), 1);
    return scrollPercentage * factor;
  };

  return (
    <div 
      ref={heroRef}
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background layers */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-enterprise-primary-dark via-enterprise-primary to-enterprise-accent/90 z-0"
        style={{ 
          transform: `translateY(${calculateParallax(150)}px)` 
        }}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      
      {/* Animated dots and lines */}
      <div 
        ref={dotsRef}
        className="absolute inset-0 z-10 opacity-30"
        style={{ 
          transform: `translateY(${calculateParallax(-100)}px)` 
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto py-24 lg:py-32 relative z-20 px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            className="text-white max-w-2xl"
            style={{ 
              transform: `translateY(${calculateParallax(-50)}px)` 
            }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white font-heading">
              {title}
            </h1>
            <p className="text-xl text-white mb-10 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-5">
              <Link to={primaryButtonLink} className="bg-white text-enterprise-primary px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors font-medium shadow-lg focus-ring">
                {primaryButtonText}
              </Link>
              <Link to={secondaryButtonLink} className="bg-enterprise-accent text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-3 font-medium shadow-lg focus-ring">
                {secondaryButtonText} {secondaryButtonIcon}
              </Link>
            </div>
          </div>
          <div 
            className="relative flex justify-center"
            style={{ 
              transform: `translateY(${calculateParallax(-30)}px)` 
            }}
          >
            <LogoAnimation size="lg" className="mb-8" />
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src={imageUrl} 
                alt="Smart Mobility Platform" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 text-enterprise-accent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-enterprise-primary">Trusted by</p>
                  <p className="text-gray-600">100+ Transit Agencies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-30"></div>
    </div>
  );
};

export default ParallaxHero;