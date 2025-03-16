import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

const RequestDemoButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <button 
        className="bg-gradient-to-r from-enterprise-primary to-enterprise-accent text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
        aria-label="Request Demo"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="font-medium">Request Demo</span>
      </button>
    </div>
  );
};

export default RequestDemoButton;