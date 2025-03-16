import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';
  const showDarkBackground = isHomePage && !isScrolled;

  return (
    <header className={`fixed w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : showDarkBackground ? 'bg-enterprise-primary py-3' : 'bg-white py-3'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">DemandTrans</span>
            <Logo 
              size="md" 
              variant={showDarkBackground ? 'light' : 'default'} 
            />
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button 
            type="button" 
            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${showDarkBackground ? 'text-white' : 'text-gray-700'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <Menu className="size-6" aria-hidden="true" />
            )}
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {/* Solutions Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 text-sm/6 font-semibold ${
              showDarkBackground ? 'text-white hover:text-gray-200' : 'text-gray-900 hover:text-enterprise-accent'
            } transition-colors ${
              isActive('/solutions') ? (showDarkBackground ? 'text-gray-200' : 'text-enterprise-accent') : ''
            }`}>
              Solutions <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-lg overflow-hidden z-50">
              <div className="p-2">
                <Link to="/solutions/mobilitydr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-enterprise-accent/10 hover:text-enterprise-accent rounded-md">
                  Microtransit & DRT (MobilityDR)
                </Link>
                <Link to="/solutions/kyyti" className="block px-4 py-2 text-sm text-gray-700 hover:bg-enterprise-accent/10 hover:text-enterprise-accent rounded-md">
                  Mobility as a Service (Kyyti)
                </Link>
                <Link to="/solutions/paratransit" className="block px-4 py-2 text-sm text-gray-700 hover:bg-enterprise-accent/10 hover:text-enterprise-accent rounded-md">
                  Paratransit & NEMT
                </Link>
                <Link to="/solutions/optimization" className="block px-4 py-2 text-sm text-gray-700 hover:bg-enterprise-accent/10 hover:text-enterprise-accent rounded-md">
                  Route Optimization (OptiRun)
                </Link>
                <Link to="/solutions/regional" className="block px-4 py-2 text-sm text-gray-700 hover:bg-enterprise-accent/10 hover:text-enterprise-accent rounded-md">
                  Regional Coordination
                </Link>
                <Link to="/solutions/firstmile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-enterprise-accent/10 hover:text-enterprise-accent rounded-md">
                  First Mile/Last Mile
                </Link>
              </div>
            </div>
          </div>
          
          {/* Products Dropdown */}
          <div className="relative group">
            <button className={`flex items-center gap-1 text-sm/6 font-semibold ${
              showDarkBackground ? 'text-white hover:text-gray-200' : 'text-gray-900 hover:text-enterprise-accent'
            } transition-colors ${
              isActive('/products') ? (showDarkBackground ? 'text-gray-200' : 'text-enterprise-accent') : ''
            }`}>
              Products <ChevronDown size={16} />
            </button>
            <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-lg overflow-hidden z-50">
              <div className="p-2">
                <Link to="/products/mobilitydr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-enterprise-accent/10 hover:text-enterprise-accent rounded-md">
                  MobilityDR Platform
                </Link>
                <Link to="/products/kyyti" className="block px-4 py-2 text-sm text-gray-700 hover:bg-enterprise-accent/10 hover:text-enterprise-accent rounded-md">
                  Kyyti MaaS Platform
                </Link>
                <Link to="/products/optirun" className="block px-4 py-2 text-sm text-gray-700 hover:bg-enterprise-accent/10 hover:text-enterprise-accent rounded-md">
                  OptiRun
                </Link>
                <Link to="/products/trip-exchange" className="block px-4 py-2 text-sm text-gray-700 hover:bg-enterprise-accent/10 hover:text-enterprise-accent rounded-md">
                  Trip Exchange
                </Link>
                <Link to="/products/dynamic-translator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-enterprise-accent/10 hover:text-enterprise-accent rounded-md">
                  Dynamic Translator
                </Link>
              </div>
            </div>
          </div>
          
          <Link 
            to="/success-stories" 
            className={`text-sm/6 font-semibold ${
              showDarkBackground ? 'text-white hover:text-gray-200' : 'text-gray-900 hover:text-enterprise-accent'
            } transition-colors ${
              isActive('/success-stories') ? (showDarkBackground ? 'text-gray-200' : 'text-enterprise-accent') : ''
            }`}
          >
            Success Stories
          </Link>
          
          <Link 
            to="/about" 
            className={`text-sm/6 font-semibold ${
              showDarkBackground ? 'text-white hover:text-gray-200' : 'text-gray-900 hover:text-enterprise-accent'
            } transition-colors ${
              isActive('/about') ? (showDarkBackground ? 'text-gray-200' : 'text-enterprise-accent') : ''
            }`}
          >
            About Us
          </Link>
          
          <Link 
            to="/roi-calculator" 
            className={`text-sm/6 font-semibold ${
              showDarkBackground ? 'text-white hover:text-gray-200' : 'text-gray-900 hover:text-enterprise-accent'
            } transition-colors ${
              isActive('/roi-calculator') ? (showDarkBackground ? 'text-gray-200' : 'text-enterprise-accent') : ''
            }`}
          >
            ROI Calculator
          </Link>
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          <Link 
            to="/login" 
            className={`text-sm/6 font-semibold ${
              showDarkBackground ? 'text-white hover:text-gray-200' : 'text-gray-900 hover:text-enterprise-accent'
            }`}
          >
            Sign In
          </Link>
          <Link 
            to="/request-demo"
            className="rounded-lg bg-enterprise-accent px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-enterprise-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-enterprise-accent"
          >
            Request Demo
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu, show/hide based on menu open state. */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
        {/* Background backdrop, show/hide based on slide-over state. */}
        <div className="fixed inset-0 z-10"></div>
        <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">DemandTrans</span>
              <Logo size="md" variant="default" />
            </Link>
            <button 
              type="button" 
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="size-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* Solutions Section */}
                <div>
                  <Link 
                    to="/solutions" 
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Solutions
                  </Link>
                  <div className="pl-4 space-y-1 mt-1">
                    <Link 
                      to="/solutions/mobilitydr" 
                      className="-mx-3 block rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Microtransit & DRT
                    </Link>
                    <Link 
                      to="/solutions/kyyti" 
                      className="-mx-3 block rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Mobility as a Service
                    </Link>
                    <Link 
                      to="/solutions/paratransit" 
                      className="-mx-3 block rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Paratransit & NEMT
                    </Link>
                    <Link 
                      to="/solutions/optimization" 
                      className="-mx-3 block rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Route Optimization
                    </Link>
                    <Link 
                      to="/solutions/regional" 
                      className="-mx-3 block rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Regional Coordination
                    </Link>
                    <Link 
                      to="/solutions/firstmile" 
                      className="-mx-3 block rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      First Mile/Last Mile
                    </Link>
                  </div>
                </div>
                
                {/* Products Section */}
                <div>
                  <Link 
                    to="/products" 
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Products
                  </Link>
                  <div className="pl-4 space-y-1 mt-1">
                    <Link 
                      to="/products/mobilitydr" 
                      className="-mx-3 block rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      MobilityDR Platform
                    </Link>
                    <Link 
                      to="/products/kyyti" 
                      className="-mx-3 block rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Kyyti MaaS Platform
                    </Link>
                    <Link 
                      to="/products/optirun" 
                      className="-mx-3 block rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      OptiRun
                    </Link>
                    <Link 
                      to="/products/trip-exchange" 
                      className="-mx-3 block rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Trip Exchange
                    </Link>
                    <Link 
                      to="/products/dynamic-translator" 
                      className="-mx-3 block rounded-lg px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dynamic Translator
                    </Link>
                  </div>
                </div>
                
                <Link 
                  to="/success-stories" 
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Success Stories
                </Link>
                <Link 
                  to="/about" 
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/roi-calculator" 
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ROI Calculator
                </Link>
              </div>
              <div className="py-6">
                <Link 
                  to="/login" 
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link 
                  to="/request-demo" 
                  className="mt-4 block rounded-lg bg-enterprise-accent px-3 py-2.5 text-base/7 font-semibold text-white text-center hover:bg-enterprise-accent/90"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;