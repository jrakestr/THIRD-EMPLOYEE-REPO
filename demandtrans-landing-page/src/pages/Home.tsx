import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
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
  Network,
  Accessibility,
  BookOpen,
  Check
} from 'lucide-react';
import BrandedButton from '../components/BrandedButton';

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref} 
      className={`fade-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const Home = () => {
  const [showFixedCTA, setShowFixedCTA] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling 500px
      setShowFixedCTA(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pt-24 relative">
      {/* Fixed CTA that appears after scrolling */}
      {showFixedCTA && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <a 
            href="/contact" 
            className="bg-enterprise-accent text-white rounded-full py-3 px-5 shadow-lg flex items-center gap-3 hover:bg-enterprise-accent-dark transition-colors"
          >
            <span className="font-medium">Schedule Demo</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-enterprise-primary to-enterprise-primary-dark overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/community-transit.jpg" 
            alt="Community-focused transportation" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            onError={(e) => e.currentTarget.style.display = 'none'} 
          />
        </div>
        <div className="container relative z-10 mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <AnimatedSection>
              <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">Transit Technology That Delivers Results</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
                  Reduce Transit Costs by 25% While Improving Service Quality
                </h1>
                <p className="text-xl text-white mb-8">
                  Our proven platform helps agencies overcome driver shortages, reduce operational costs, and enhance rider experience—all within 60 days.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                  <a href="/demo-request" className="bg-white text-enterprise-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2">
                    Request a Demo <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                  <a href="/roi-calculator" className="bg-enterprise-accent text-white hover:bg-enterprise-accent-dark px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2">
                    Calculate Your ROI <Calculator className="ml-1 w-4 h-4" />
                  </a>
                </div>
                <p className="text-white/80 text-sm">
                  Trusted by 30+ transit agencies including Denver RTD, San Joaquin COG, and NEORide
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading text-center">Our Mission</h2>
              <div className="text-xl text-gray-700 leading-relaxed space-y-4">
                <p>
                  At DemandTrans, we are passionate about driving innovation in mobility and transit technology. By leveraging data-driven insights, we create solutions that enhance the travel experience from beginning to end, empowering transportation providers to work smarter and deliver a first-in-class customer experience.
                </p>
                <p>
                  As leaders in mobility technology, we are committed to shaping the future of transit through cutting-edge tools and strategies.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Client Focus Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Who We Serve</h2>
              <p className="text-xl text-gray-600">
                We partner with transportation providers of all sizes to deliver innovative and cost-effective mobility solutions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Bus className="w-8 h-8" />,
                title: "Public Transportation Agencies",
                description: "Helping transit agencies increase service reach while controlling operational costs"
              },
              {
                icon: <Network className="w-8 h-8" />,
                title: "Regional Planning Organizations",
                description: "Enabling coordinated transportation networks across jurisdictions"
              },
              {
                icon: <Accessibility className="w-8 h-8" />,
                title: "Paratransit & NEMT Providers",
                description: "Optimizing specialized transportation services for operational efficiency"
              },
              {
                icon: <MapPin className="w-8 h-8" />,
                title: "Rural & Small Urban Systems",
                description: "Right-sized solutions for community-based transportation needs"
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Research & Implementation Partners",
                description: "Advancing transportation innovation through strategic partnerships"
              }
            ].map((client, index) => (
              <AnimatedSection key={index} delay={100 * index}>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-enterprise-accent/10 rounded-lg flex items-center justify-center mb-4 text-enterprise-accent">
                    {client.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-enterprise-primary font-heading">
                    {client.title}
                  </h3>
                  <p className="text-gray-600">
                    {client.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Our Unique Value</h2>
              <p className="text-xl text-gray-600">
                Demographic and technological change are reshaping transportation demand. We provide the expertise and tools to navigate this evolving environment.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Deep Expertise",
                description: "40+ years of specialized knowledge in demand-responsive transportation. Our automated scheduling is powered by algorithms developed by industry experts with decades of experience in mobility solutions."
              },
              {
                title: "Tailored Solutions",
                description: "Our technology accommodates different service types within and across service zones, whether you're running fully on-demand microtransit, deviated fixed-routes, checkpoint services, or combining paratransit with general public transportation."
              },
              {
                title: "System Integration",
                description: "We're the industry leader in building digital hubs that link multiple back-end scheduling systems. Our commitment to universal data standards ensures providers can function as a network while retaining operational autonomy."
              },
              {
                title: "Proven Results",
                description: "Our clients consistently achieve 15-25% operational cost reduction while improving service quality. Denver RTD has used our platform for 15+ years to operate 23 service zones with just 45 vehicles, serving 2,000 rides daily."
              }
            ].map((value, index) => (
              <AnimatedSection key={index} delay={100 * index}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                  <h3 className="text-xl font-bold mb-4 text-enterprise-primary font-heading">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Success Stories</h2>
              <p className="text-xl text-gray-600">
                Real-world results from transit agencies implementing our solutions
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Denver RTD Case Study */}
            <AnimatedSection>
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full">
                <div className="relative h-64">
                  <img 
                    src="/images/denver-rtd.jpg" 
                    alt="Denver RTD FlexRide service" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/MobilityDR.png";
                      e.currentTarget.alt = "Denver RTD FlexRide placeholder";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white/90 font-medium text-sm bg-enterprise-accent/80 px-3 py-1 rounded-full">Large Transit Agency</span>
                    <h3 className="text-2xl font-bold text-white mt-2">Denver RTD</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-enterprise-primary mb-4">MobilityDR Implementation</h4>
                  <p className="text-gray-600 mb-6">
                    Denver RTD partnered with DemandTrans to transform their demand-responsive services across 23 service zones, serving thousands of daily riders with increased efficiency.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl font-bold text-enterprise-accent block">22%</span>
                      <span className="text-sm text-gray-600">Cost Reduction</span>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl font-bold text-enterprise-accent block">45</span>
                      <span className="text-sm text-gray-600">Vehicles Optimized</span>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl font-bold text-enterprise-accent block">35%</span>
                      <span className="text-sm text-gray-600">Improved On-Time</span>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl font-bold text-enterprise-accent block">90</span>
                      <span className="text-sm text-gray-600">Day Implementation</span>
                    </div>
                  </div>
                  
                  <Link to="/impact/denver-rtd" className="inline-flex items-center text-enterprise-accent hover:gap-2 transition-all font-medium">
                    View Full Case Study <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            {/* San Joaquin COG Case Study */}
            <AnimatedSection delay={100}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full">
                <div className="relative h-64">
                  <img 
                    src="/images/san-joaquin.jpg" 
                    alt="San Joaquin COG Vamos service" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/Kyyti MaaS Platform   Solutions -2025-02-28 at 11.17..png";
                      e.currentTarget.alt = "San Joaquin COG placeholder";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-white/90 font-medium text-sm bg-enterprise-accent/80 px-3 py-1 rounded-full">Regional Planning Org</span>
                    <h3 className="text-2xl font-bold text-white mt-2">San Joaquin COG</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-enterprise-primary mb-4">Kyyti MaaS Implementation</h4>
                  <p className="text-gray-600 mb-6">
                    San Joaquin COG implemented our Kyyti MaaS platform to connect 7+ transit providers in a single interface, dramatically improving rider experience and inter-agency coordination.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl font-bold text-enterprise-accent block">7+</span>
                      <span className="text-sm text-gray-600">Transit Providers</span>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl font-bold text-enterprise-accent block">40%</span>
                      <span className="text-sm text-gray-600">Reduced Wait Times</span>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl font-bold text-enterprise-accent block">18%</span>
                      <span className="text-sm text-gray-600">Ridership Increase</span>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <span className="text-2xl font-bold text-enterprise-accent block">60</span>
                      <span className="text-sm text-gray-600">Day Implementation</span>
                    </div>
                  </div>
                  
                  <Link to="/impact/san-joaquin" className="inline-flex items-center text-enterprise-accent hover:gap-2 transition-all font-medium">
                    View Full Case Study <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={200}>
            <div className="text-center">
              <Link to="/impact" className="inline-flex items-center gap-2 text-enterprise-primary font-medium hover:text-enterprise-accent transition-colors">
                View All Case Studies <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Featured Case Study Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Featured Implementation</h2>
              <p className="text-xl text-gray-600">
                Our technology powers some of the nation's most successful demand-responsive transportation programs.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/denver-rtd.jpg" 
                  alt="Denver RTD FlexRide service" 
                  className="w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src = "/MobilityDR.png";
                    e.currentTarget.alt = "Denver RTD FlexRide placeholder";
                  }}
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-enterprise-primary font-heading">Denver RTD FlexRide</h3>
                <p className="text-gray-600 mb-4">
                  The Denver Regional Transportation District operates one of the nation's largest microtransit programs using DemandTrans' MobilityDR platform. Prior to the pandemic, FlexRide served 23 service zones with just 45 vehicles, providing 2,000 daily rides.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start text-gray-600">
                    <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span>Multiple service configurations optimized by time of day</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span>15 first/last mile zones connecting to regional transit</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span>8 community circulation zones in low-density areas</span>
                  </li>
                  <li className="flex items-start text-gray-600">
                    <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span>15+ year partnership and continuous improvement</span>
                  </li>
                </ul>
                <Link
                  to="/impact/denver-rtd"
                  className="inline-flex items-center text-enterprise-accent font-medium hover:underline"
                >
                  Read the full case study <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-enterprise-primary font-heading">What Our Partners Say</h2>
              <p className="text-xl text-gray-600">
                Transit agencies across the country trust DemandTrans to help solve their most pressing challenges
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "DemandTrans helped us reduce operational costs by 22% while expanding our service reach. Their team's expertise made implementation seamless.",
                name: "Sarah Johnson",
                title: "Transit Director",
                organization: "Denver RTD",
                image: "/images/testimonial-1.jpg" 
              },
              {
                quote: "The MobilityDR platform has been transformative for our agency. We've increased driver productivity by 30% and significantly improved on-time performance.",
                name: "Michael Rodriguez",
                title: "Operations Manager",
                organization: "San Joaquin COG",
                image: "/images/testimonial-2.jpg"
              },
              {
                quote: "Their integration expertise helped us connect systems across multiple agencies that we never thought possible. The coordination benefits have been tremendous.",
                name: "Jennifer Williams",
                title: "Executive Director",
                organization: "NEORide",
                image: "/images/testimonial-3.jpg"
              }
            ].map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
                  <div className="mb-6">
                    <svg className="text-enterprise-accent w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.13456 9H12.1346L10.1346 15H7.13456L9.13456 9Z" fill="currentColor" />
                      <path d="M14.1346 9H17.1346L15.1346 15H12.1346L14.1346 9Z" fill="currentColor" />
                      <path d="M10.1346 15L12.1346 9H15.1346L13.1346 15H10.1346Z" fill="currentColor" />
                      <path d="M7.13456 9H10.1346L8.13456 15H5.13456L7.13456 9Z" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 italic flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4 flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/MobilityDR.png";
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-enterprise-primary">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}, {testimonial.organization}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-8">
              <p className="text-gray-500 uppercase tracking-wider font-medium">Trusted by leading transit agencies</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {['Denver RTD', 'San Joaquin COG', 'NEORide', 'MBTA', 'LA Metro', 'TriMet'].map((partner, index) => (
                <div key={index} className="text-lg font-bold text-gray-400 hover:text-enterprise-primary transition-colors">
                  {partner}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Community Values Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Empowering Sustainable Communities</h2>
              <p className="text-xl text-gray-600">
                Our mission is to provide accessible, affordable, and sustainable mobility options that strengthen communities while reducing auto dependency.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection delay={100}>
              <div className="relative h-full rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/sustainable-mobility.jpg" 
                  alt="Sustainable Transportation"
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/MobilityDR.png";
                  }}
                />
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold mb-3 text-enterprise-primary font-heading">
                    Sustainable Mobility
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our solutions prioritize sustainability through optimized routing, reduced vehicle miles traveled, and support for multi-modal transportation options.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span>Reduced emissions through optimized routes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span>Support for multi-modal transportation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span>Decreased total vehicle miles traveled</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative h-full rounded-lg overflow-hidden shadow-md">
                <div className="p-6 bg-enterprise-primary text-white h-64 flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-3 font-heading">
                    Community-Centered Approach
                  </h3>
                  <p className="mb-4">
                    We believe transportation should connect people to opportunities, services, and each other—especially in rural and small urban communities.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span>Expanded access to essential services</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span>Improved mobility for all community members</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span>Solutions scaled for small towns and rural areas</span>
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-white">
                  <Link 
                    to="/about" 
                    className="inline-flex items-center text-enterprise-primary hover:gap-2 transition-all font-medium"
                  >
                    Learn About Our Values <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Transit Agency Challenges Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Solving Your Most Pressing Challenges</h2>
              <p className="text-xl text-gray-600">
                Transit agencies face unprecedented challenges today. Our solutions are specifically designed to address these critical issues.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all h-full">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 text-red-600">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-enterprise-primary font-heading">
                  Driver Shortages
                </h3>
                <p className="text-gray-600 mb-4">
                  Struggling to recruit and retain drivers? Our optimization tools help you do more with fewer drivers:
                </p>
                <ul className="space-y-2 mb-4 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span>Increase productivity by up to 30% per driver</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span>Minimize deadhead time with smart routing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span>Reduce driver burnout with balanced workloads</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all h-full">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-enterprise-primary font-heading">
                  Funding Challenges
                </h3>
                <p className="text-gray-600 mb-4">
                  Facing budget constraints? Our solutions help maximize your limited resources:
                </p>
                <ul className="space-y-2 mb-4 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span>Reduce cost per trip by 15-25%</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span>Lower fuel consumption with optimized routing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span>Maximize service with minimal capital expenditure</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-enterprise-primary font-heading">
                  Integration Complexities
                </h3>
                <p className="text-gray-600 mb-4">
                  Struggling with fragmented systems? Our technology connects your transit ecosystem:
                </p>
                <ul className="space-y-2 mb-4 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span>Seamless API connections to existing systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span>Support for industry standards (GTFS, GTFS-RT)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span>Regional coordination across multiple providers</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Results Showcase Section */}
      <section className="py-12 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 text-enterprise-primary font-heading">Proven Results</h2>
              <p className="text-xl text-gray-600">
                Our technology delivers measurable improvements for transit agencies of all sizes.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <AnimatedSection delay={100}>
              <div className="bg-white p-5 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-enterprise-primary mb-2">15-25%</p>
                <p className="text-gray-600">Cost reduction per trip</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="bg-white p-5 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-enterprise-primary mb-2">30%</p>
                <p className="text-gray-600">Increase in driver productivity</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <div className="bg-white p-5 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-enterprise-primary mb-2">40%</p>
                <p className="text-gray-600">Reduction in passenger wait times</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <div className="bg-white p-5 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-enterprise-primary mb-2">60 days</p>
                <p className="text-gray-600">Average implementation time</p>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={500}>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-enterprise-primary font-heading">San Joaquin COG Success Story</h3>
                  <p className="text-gray-600 mb-4">
                    "DemandTrans helped us expand our service area by 35% while reducing our cost per trip by nearly 20%. The technology was easy to implement and our drivers love the simplified routing."
                  </p>
                  <div className="text-gray-500 italic">- Transit Director, San Joaquin County</div>
                </div>
                <Link 
                  to="/success-stories" 
                  className="bg-enterprise-primary/10 text-enterprise-primary px-5 py-2.5 rounded-lg hover:bg-enterprise-primary/20 transition-colors flex items-center justify-center gap-2 whitespace-nowrap font-medium"
                >
                  View All Success Stories <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Section - with benefit-led descriptions */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-enterprise-accent font-medium block mb-3">TECHNOLOGY PLATFORM</span>
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Our Product Suite</h2>
              <p className="text-xl text-gray-600">
                Solutions designed to reduce costs, maximize efficiency, and enhance service quality
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Bus className="w-6 h-6" />,
                title: "MobilityDR Platform",
                description: "Reduce operational costs by 15-25% with our all-in-one platform that optimizes scheduling, manages drivers, and improves on-time performance.",
                benefits: ["Increase on-time performance by up to 35%", "Handle up to 50% more trips with the same resources"],
                term: <span className="text-sm text-gray-500 italic block mt-1">DRT = Demand-Responsive Transportation, service that adapts to customer requests rather than fixed routes</span>,
                link: "/products/mobilitydr",
                featured: true,
                cta: "Schedule Demo"
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Kyyti MaaS Platform",
                description: "Boost ridership and simplify the passenger experience with one app that connects all transportation options in your community.",
                benefits: ["Increase overall ridership through multi-modal connections", "Reduce average passenger wait times by 40%"],
                term: <span className="text-sm text-gray-500 italic block mt-1">MaaS = Mobility as a Service, integrating various forms of transport services into a single accessible platform</span>,
                link: "/products/kyyti",
                featured: true,
                cta: "Request Demo"
              },
              {
                icon: <Brain className="w-6 h-6" />,
                title: "OptiRun",
                description: "Cut scheduling time by 75% and reduce empty vehicle miles with AI-powered staff and vehicle assignment optimization.",
                benefits: ["Reduce empty vehicle miles by up to 25%", "Cut scheduling time by 75%"],
                link: "/products/optirun",
                cta: "Calculate Savings"
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Trip Exchange",
                description: "Expand service across boundaries without adding vehicles by enabling providers to seamlessly share trips while maintaining independence.",
                benefits: ["Increase cross-boundary service without adding vehicles", "Reduce per-trip costs through shared resources"],
                link: "/products/trip-exchange",
                cta: "Learn More"
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Dynamic Translator",
                description: "Eliminate manual data entry between systems with our solution that connects your disparate platforms for real-time data sharing.",
                benefits: ["Eliminate manual data entry between systems", "Enable real-time data sharing across platforms"],
                term: <span className="text-sm text-gray-500 italic block mt-1">Interoperability solution that connects disparate transportation data systems using GTFS (General Transit Feed Specification) standards</span>,
                link: "/products/dynamic-translator",
                cta: "See Integration Options"
              },
              {
                icon: <Calculator className="w-6 h-6" />,
                title: "ROI Calculator",
                description: "See your potential savings in just 2 minutes with our interactive calculator customized for transit agencies.",
                benefits: ["Visualize potential cost savings specific to your agency", "Build data-driven business cases for decision makers"],
                link: "/roi-calculator",
                cta: "Calculate Your ROI"
              }
            ].map((product, index) => (
              <AnimatedSection key={index} delay={100 * index}>
                <div className={`bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-enterprise-accent hover:shadow-lg transition-all h-full flex flex-col ${product.featured ? 'border-l-4 border-l-enterprise-accent' : ''}`}>
                  <div className="w-12 h-12 bg-enterprise-accent/10 rounded-lg flex items-center justify-center mb-4 text-enterprise-accent">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-enterprise-primary font-heading">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {product.description}
                  </p>
                  {product.term && product.term}
                  {product.benefits && (
                    <ul className="mt-3 mb-4 space-y-1">
                      {product.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <Check className="h-4 w-4 text-enterprise-accent flex-shrink-0 mr-1.5 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-auto pt-4">
                    <Link 
                      to={product.link} 
                      className={`inline-flex items-center justify-center w-full py-2 px-4 rounded-lg transition-all font-medium ${product.featured ? 'bg-enterprise-accent text-white hover:bg-enterprise-accent-dark' : 'bg-enterprise-primary/10 text-enterprise-primary hover:bg-enterprise-primary/20'}`}
                    >
                      {product.cta} <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Solution Finder Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Find Your Ideal Solution</h2>
              <p className="text-xl text-gray-600 mb-2">
                What's your biggest transit challenge today?
              </p>
              <p className="text-gray-500">
                Select your top challenge to see our recommended solutions
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Bus className="w-6 h-6" />,
                title: "Microtransit & DRT",
                description: "Cut operational costs by up to 25% with flexible, on-demand transit that adapts to your community's unique needs.",
                link: "/solutions/microtransit",
                product: "MobilityDR",
                cta: "Explore Microtransit"
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Mobility as a Service",
                description: "Boost ridership by 18-40% by connecting all transportation options through a single, user-friendly platform.",
                link: "/solutions/maas",
                product: "Kyyti",
                cta: "Explore MaaS"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Paratransit & NEMT",
                description: "Reduce per-trip costs by 20-30% with specialized solutions for ADA paratransit and medical transportation.",
                link: "/solutions/paratransit",
                product: "MobilityDR & OptiRun",
                cta: "Improve Paratransit"
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "First Mile/Last Mile",
                description: "Increase fixed-route ridership by 15% with on-demand shuttles that connect riders to main transit lines.",
                link: "/solutions/firstmile",
                product: "MobilityDR & Kyyti",
                cta: "Bridge the Gap"
              },
              {
                icon: <LineChart className="w-6 h-6" />,
                title: "Route Optimization",
                description: "Boost driver productivity by 30% with AI tools that calculate the most efficient vehicle paths.",
                link: "/solutions/optimization",
                product: "OptiRun",
                cta: "Optimize Routes"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Regional Coordination",
                description: "Expand service across boundaries by connecting multiple providers while maintaining operational independence.",
                link: "/solutions/regional",
                product: "Trip Exchange",
                cta: "Coordinate Services"
              }
            ].map((solution, index) => (
              <AnimatedSection key={index} delay={100 * index}>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-enterprise-accent hover:shadow-lg transition-all h-full flex flex-col">
                  <div className="w-12 h-12 bg-enterprise-accent/10 rounded-lg flex items-center justify-center mb-4 text-enterprise-accent">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-enterprise-primary font-heading">
                    {solution.title}
                  </h3>
                  <div className="mb-3">
                    <span className="inline-flex items-center rounded-md bg-enterprise-accent/10 px-2 py-1 text-xs font-medium text-enterprise-accent">
                      {solution.product}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                  <div className="mt-auto pt-2">
                    <Link 
                      to={solution.link} 
                      className="inline-flex items-center justify-center w-full bg-enterprise-primary/10 text-enterprise-primary hover:bg-enterprise-primary/20 py-2 px-4 rounded-lg transition-all font-medium"
                    >
                      {solution.cta} <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Add community-focused image showcase with improved CTA */}
          <AnimatedSection delay={200}>
            <div className="relative rounded-xl overflow-hidden shadow-xl mb-8">
              <img 
                src="/rural-community-shuttle.jpg" 
                alt="Community-focused mobility solutions"
                className="w-full h-64 object-cover object-center md:h-80"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "/MobilityDR.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-enterprise-primary/80 to-transparent flex items-center">
                <div className="px-8 md:px-12 max-w-lg">
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">Sustainable Community Mobility</h3>
                  <p className="text-white/90 mb-4">
                    Reduce costs by 20% while empowering rural and small urban communities with accessible transportation solutions.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link 
                      to="/solutions/community" 
                      className="inline-flex items-center bg-white text-enterprise-primary px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
                    >
                      Explore Community Solutions <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center bg-enterprise-accent text-white px-4 py-2 rounded-md font-medium hover:bg-enterprise-accent-dark transition-colors"
                    >
                      Get a Quote <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="md:flex items-center">
                <div className="md:w-2/3 p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-enterprise-primary font-heading">Get Your Free Transit Optimization Guide</h2>
                  <p className="text-gray-600 mb-6">
                    Subscribe to our newsletter and receive our exclusive guide with proven strategies that have helped agencies reduce costs by 15-25%. You'll also get regular ROI calculators and implementation templates.
                  </p>
                  <form className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-enterprise-accent/30 focus:border-enterprise-accent"
                    />
                    <button
                      type="submit"
                      className="bg-enterprise-accent text-white px-6 py-3 rounded-lg hover:bg-enterprise-accent/90 transition-colors whitespace-nowrap font-medium"
                    >
                      Get Free Guide
                    </button>
                  </form>
                  <p className="text-sm text-gray-500 mt-3 flex items-center">
                    <Shield className="w-4 h-4 mr-1.5 text-enterprise-accent" />
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </div>
                <div className="md:w-1/3 bg-gradient-to-r from-enterprise-primary to-enterprise-accent p-10 text-white hidden md:block">
                  <h3 className="text-xl font-bold mb-4">What You'll Get:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span><strong>FREE Guide:</strong> "5 Ways to Cut Transit Costs by 25%"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span><strong>Exclusive:</strong> Implementation planning templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span><strong>Monthly:</strong> Case studies & cost-saving tips</span>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <div className="flex items-center">
                      <div className="text-3xl font-bold">$0</div>
                      <div className="ml-2">
                        <div className="text-sm">Value: $197</div>
                        <div className="text-xs">YOURS FREE</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-enterprise-primary to-enterprise-accent rounded-xl overflow-hidden shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12">
                <AnimatedSection>
                  <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">Limited Time Offer</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-heading">Save 15-25% on Transit Operations</h2>
                  <p className="text-white/90 text-lg mb-6">
                    Schedule a demo this month and receive a free implementation plan worth $2,500. Our experts will analyze your specific challenges and create a custom roadmap.
                  </p>
                  <ul className="text-white/90 mb-6 space-y-3">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span><strong>15-25% operational cost reduction</strong> — guaranteed</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span><strong>60-day implementation</strong> with dedicated support</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-enterprise-accent flex-shrink-0 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      <span><strong>FREE implementation plan</strong> ($2,500 value)</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/schedule-demo">
                      <button className="bg-white text-enterprise-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                        Schedule a Demo Now
                      </button>
                    </Link>
                    <Link to="/roi-calculator">
                      <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 font-medium">
                        Calculate Your ROI <Calculator className="w-5 h-5" />
                      </button>
                    </Link>
                  </div>
                  <p className="text-white/70 text-sm mt-4">
                    *Offer valid until the end of the month. Terms and conditions apply.
                  </p>
                </AnimatedSection>
              </div>
              <div className="hidden lg:block relative h-full">
                <img 
                  src="/OptiRun.png" 
                  alt="Transit Operations" 
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-enterprise-primary/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 p-4 rounded-lg shadow-lg">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-14 h-14 rounded-full bg-enterprise-accent flex items-center justify-center text-white">
                        <TrendingUp className="w-7 h-7" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Average cost savings with DemandTrans</div>
                      <div className="text-3xl font-bold text-enterprise-primary">22.5%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;