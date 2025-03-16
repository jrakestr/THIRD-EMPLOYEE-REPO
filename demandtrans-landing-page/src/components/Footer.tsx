import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-enterprise-primary text-white">
      <div className="container mx-auto py-12 md:py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <Logo size="lg" variant="light" />
            <p className="text-gray-300">
              Transforming transit operations with AI-powered intelligence and real-time optimization.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-enterprise-accent transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-enterprise-accent transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-enterprise-accent transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Products
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-enterprise-accent"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/products/mobilitydr" className="text-gray-300 hover:text-enterprise-accent transition-colors">MobilityDR Platform</Link></li>
              <li><Link to="/products/kyyti" className="text-gray-300 hover:text-enterprise-accent transition-colors">Kyyti MaaS Platform</Link></li>
              <li><Link to="/products/optirun" className="text-gray-300 hover:text-enterprise-accent transition-colors">OptiRun</Link></li>
              <li><Link to="/products/trip-exchange" className="text-gray-300 hover:text-enterprise-accent transition-colors">Trip Exchange</Link></li>
              <li><Link to="/products/dynamic-translator" className="text-gray-300 hover:text-enterprise-accent transition-colors">Dynamic Translator</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Solutions
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-enterprise-accent"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link to="/solutions/mobilitydr" className="text-gray-300 hover:text-enterprise-accent transition-colors">Microtransit & DRT</Link></li>
              <li><Link to="/solutions/kyyti" className="text-gray-300 hover:text-enterprise-accent transition-colors">Mobility as a Service</Link></li>
              <li><Link to="/solutions/paratransit" className="text-gray-300 hover:text-enterprise-accent transition-colors">Paratransit & NEMT</Link></li>
              <li><Link to="/solutions/optimization" className="text-gray-300 hover:text-enterprise-accent transition-colors">Route Optimization</Link></li>
              <li><Link to="/solutions/regional" className="text-gray-300 hover:text-enterprise-accent transition-colors">Regional Coordination</Link></li>
              <li><Link to="/solutions/firstmile" className="text-gray-300 hover:text-enterprise-accent transition-colors">First Mile/Last Mile</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-enterprise-accent"></span>
            </h3>
            <div className="space-y-4">
              <a href="mailto:contact@demandtrans.com" className="flex items-center gap-3 text-gray-300 hover:text-enterprise-accent transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0" />
                contact@demandtrans.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-gray-300 hover:text-enterprise-accent transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0" />
                (123) 456-7890
              </a>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  211 W. Wacker Drive, Suite 300<br />
                  Chicago IL 60606
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Subscribe</h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 focus:outline-none focus:border-enterprise-accent text-white placeholder-gray-400 w-full"
                />
                <button
                  type="submit"
                  className="bg-enterprise-accent text-white px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} DemandTrans. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-enterprise-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-enterprise-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-enterprise-accent transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;