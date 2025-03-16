import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Brain,
  Cloud,
  Database,
  Lock,
  Smartphone,
  Zap,
  Globe,
  Layers,
  MapPin,
  Bus,
  ChevronRight,
  Shield,
  Users,
  Check
} from 'lucide-react';
import BrandedButton from '../components/BrandedButton';
import TechnologyDemo from '../components/TechnologyDemo';
import { getCaseStudiesByProduct } from '../data/caseStudies';

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

const Technology = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    {
      icon: <Bus />,
      title: "MobilityDR Platform",
      tagline: "Transform your demand-responsive transportation with our comprehensive management platform",
      description: "MobilityDR is a state-of-the-art integrated technology platform for microtransit and related flexible services. Its field-tested algorithms optimize scheduling and routing according to dynamic customer demand and vehicle constraints, containing operating costs while offering a more convenient travel experience.",
      capabilities: [
        "Automated scheduling and real-time routing optimization",
        "Customer-facing mobile app for trip booking and management", 
        "Driver app with turn-by-turn navigation and manifest management",
        "Real-time vehicle tracking and ETA calculations",
        "Multiple service configurations in a single platform",
        "Commingling capabilities for multiple service types",
        "Comprehensive reporting and performance analytics"
      ],
      benefits: [
        "15-25% reduction in operational costs",
        "Handle up to 50% more trips with the same resources",
        "Increase on-time performance by up to 35%"
      ],
      implementations: getCaseStudiesByProduct("mobilitydr").slice(0, 2).map(study => 
        `${study.clientName}: ${study.fullDescription.split('.')[0]}.`
      ),
      techTerms: "DRT = Demand-Responsive Transportation, service that adapts to customer requests rather than fixed routes and schedules",
      screenshot: "/MobilityDR.png",
      delay: 0,
      link: "/solutions/mobilitydr",
      featured: true
    },
    {
      icon: <Smartphone />,
      title: "Kyyti MaaS Platform",
      tagline: "One app for all your riders that connects every transportation option in your community",
      description: "Our Mobility as a Service platform integrates all means of travel offered in the community through a single app. It goes beyond standard urban transportation offerings to address the needs of small urban and rural communities with both fixed-route and demand-responsive options.",
      capabilities: [
        "Multi-modal trip planning across all transportation options",
        "Mobile ticketing and payment integration",
        "Real-time travel updates and vehicle tracking",
        "Targeted subsidies and incentives for specific populations",
        "White-label branding with your agency's identity",
        "Customer feedback and messaging system",
        "Analytics dashboard for travel patterns and preferences"
      ],
      benefits: [
        "Increase overall ridership through multi-modal connections",
        "Reduce average passenger wait times by 40%",
        "Target transportation subsidies to specific populations and trip types"
      ],
      implementations: getCaseStudiesByProduct("kyyti").slice(0, 2).map(study => 
        `${study.clientName}: ${study.fullDescription.split('.')[0]}.`
      ),
      techTerms: "MaaS = Mobility as a Service, integrating various forms of transport services into a single accessible platform",
      screenshot: "/Kyyti MaaS Platform   Solutions -2025-02-28 at 11.17..png",
      delay: 100,
      link: "/solutions/kyyti",
      featured: true
    },
    {
      icon: <Brain />,
      title: "OptiRun",
      tagline: "Reduce your operating costs with optimized driver and vehicle deployment",
      description: "OptiRun is an intuitive and visual software application that ADA paratransit and other large demand-responsive operators use to ensure their vehicle runs and associated driver shift schedules are efficient and cost-effective. It addresses the unique scheduling challenges of DRT through mathematical optimization techniques grounded in real-life constraints.",
      capabilities: [
        "Driver shift optimization based on demand patterns",
        "Multiple flexible driver schedule types",
        "Optimized lunch break scheduling",
        "Call center staff scheduling extension",
        "Visual scheduling interface",
        "Performance analytics and cost reporting"
      ],
      benefits: [
        "Reduce empty vehicle miles by up to 25%",
        "Cut scheduling time by 75%",
        "$1M+ annual cost savings for large paratransit operators"
      ],
      implementations: [
        "Chicago SCR: $1+ million annual cost savings in first year",
        "Large ADA paratransit operations across the US"
      ],
      techTerms: "AI-powered resource optimization using advanced mathematical models and historical demand patterns",
      screenshot: "/OptiRun.png",
      delay: 200,
      link: "/solutions/optimization"
    },
    {
      icon: <Layers />,
      title: "Trip Exchange",
      tagline: "Collaboratively organize community transportation resources while retaining independence",
      description: "The Trip Exchange is a decentralized system enabling multiple demand-responsive providers to function as a network while maintaining their own methods of booking and scheduling trips. This non-proprietary platform allows providers to work together to address customer demand in a timely and cost-effective manner.",
      capabilities: [
        "Automated trip referrals between providers",
        "Real-time trip status updates",
        "Secure customer profile sharing",
        "Cost negotiation capabilities",
        "Financial settlement reporting",
        "Provider performance tracking"
      ],
      benefits: [
        "Increase cross-boundary service without adding vehicles",
        "Reduce per-trip costs through shared resources",
        "Maintain provider autonomy over operations"
      ],
      implementations: [
        "Denver Region: Coordinating four transportation providers across three counties",
        "Various human services transportation networks"
      ],
      techTerms: "Interagency coordination platform that maintains operational independence while enabling resource sharing",
      screenshot: "/Trip Exchange.png",
      delay: 300,
      link: "/solutions/regional"
    },
    {
      icon: <Database />,
      title: "Dynamic Translator",
      tagline: "Making your different systems talk to each other, even if they were never designed to work together",
      description: "Our Dynamic Translator solutions address interoperability challenges in demand-responsive transportation by enabling different software systems to communicate effectively, even when existing vendors aren't positioned to refine their code for coordination. It uses transactional data specification (TDS) message formats to enable electronic referrals between systems.",
      capabilities: [
        "Trip referrals between disparate software systems",
        "Customer profile and eligibility information sharing",
        "Booking confirmations across platforms",
        "Real-time status updates",
        "Compliance with TDS data standards",
        "Legacy system integration"
      ],
      benefits: [
        "Eliminate manual data entry between systems",
        "Enable real-time data sharing across platforms",
        "Implement regional coordination without replacing existing systems"
      ],
      implementations: [
        "NEORide: Coordinating 18 transit agencies across five states",
        "SORTA: Integrating paratransit and microtransit operations"
      ],
      techTerms: "Interoperability solution that connects disparate transportation data systems using GTFS (General Transit Feed Specification) and TDS (Transactional Data Specification) standards",
      screenshot: "/MobilityDR.png",
      delay: 400,
      link: "/solutions/regional"
    },
    {
      icon: <Cloud />,
      title: "Elemiah",
      tagline: "On-demand transport technology platform for the Global South",
      description: "Elemiah is an app-based shared-ride service tailored to the unique conditions of the global south. Powered by the combined capabilities of MobilityDR and our MaaS solution, it helps formalize informal transportation and bring popular transportation from the margins to the mainstream.",
      capabilities: [
        "Mobile app for booking and payment",
        "Support for local mobile payment methods",
        "Driver management tools",
        "Real-time ride matching",
        "Safety and security features",
        "Anonymized trip data for planning"
      ],
      benefits: [
        "Formalize informal transportation networks",
        "Improve reliability and safety for passengers",
        "Increase driver income through more efficient operations"
      ],
      implementations: [
        "Abidjan, Ivory Coast: Facilitating thousands of monthly trips",
        "Expanding to additional Global South markets"
      ],
      techTerms: "Adapted technology for informal transit networks commonly found in developing regions",
      screenshot: "/MobilityDR.png",
      delay: 500,
      link: "/solutions"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-enterprise-primary to-enterprise-primary-dark text-white py-20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-enterprise-accent/90 font-medium block mb-3 uppercase tracking-wider">TECHNOLOGY PLATFORM</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Our Product Suite</h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive technology solutions designed specifically for demand-responsive transportation
              </p>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                DemandTrans offers a comprehensive suite of technology products designed specifically for public and community transportation. Each product can be implemented independently or integrated for an end-to-end solution, with open data standards ensuring seamless connectivity.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our product suite includes platforms for demand-responsive services, mobility-as-a-service capability, optimization tools, and integration solutions. These are designed to work together while remaining flexible enough to meet the specific needs of each community.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Featured Products</h2>
              <p className="text-xl text-gray-600">
                Our flagship solutions for demand-responsive transportation and mobility management
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {products.filter(p => p.featured).map((product, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden h-full border border-gray-100 hover:border-enterprise-accent hover:shadow-lg transition-all">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-enterprise-accent/10 rounded-lg flex items-center justify-center text-enterprise-accent flex-shrink-0">
                        {product.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-enterprise-primary font-heading">{product.title}</h3>
                        <p className="text-gray-600 font-medium">{product.tagline}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6">
                      {product.description}
                    </p>

                    {product.techTerms && (
                      <div className="bg-gray-50 p-3 rounded-md mb-6 text-sm text-gray-600 italic">
                        {product.techTerms}
                      </div>
                    )}

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-enterprise-primary mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <Check className="w-5 h-5 text-enterprise-accent flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-enterprise-primary mb-3">Implementation Examples</h4>
                      <ul className="space-y-2">
                        {product.implementations.map((implementation, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <div className="w-2 h-2 bg-enterprise-accent rounded-full flex-shrink-0" />
                            <span>{implementation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      to={product.link} 
                      className="inline-flex items-center text-enterprise-accent hover:gap-2 transition-all font-medium"
                    >
                      Learn More <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                  <div className="h-64 relative overflow-hidden border-t border-gray-100">
                    <img 
                      src={product.screenshot} 
                      alt={product.title}
                      className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* All Products */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Complete Product Suite</h2>
              <p className="text-xl text-gray-600">
                Our full range of technology solutions for demand-responsive transportation
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <AnimatedSection key={index} delay={product.delay}>
                <div className="flex gap-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-enterprise-accent hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-enterprise-accent/10 rounded-lg flex items-center justify-center text-enterprise-accent flex-shrink-0">
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-enterprise-primary font-heading">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.tagline}</p>
                    
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Capabilities:</h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
                      {product.capabilities.slice(0, 6).map((capability, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                          <div className="w-2 h-2 bg-enterprise-accent rounded-full flex-shrink-0" />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to={product.link} 
                      className="inline-flex items-center text-enterprise-accent hover:gap-2 transition-all font-medium"
                    >
                      View Details <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-4 text-enterprise-primary font-heading">Seamless Integration</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Our products are designed from the ground up for interoperability, allowing you to start with a single component and expand over time.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "Open-source data standards at the core",
                      "APIs for connecting with third-party systems",
                      "Transactional Data Specification (TDS) compliance",
                      "Middleware solutions for legacy systems",
                      "No vendor lock-in by design"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-enterprise-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/solutions/integration" 
                    className="bg-enterprise-accent text-white px-6 py-3 rounded-lg hover:bg-enterprise-accent/90 transition-colors flex items-center gap-2 inline-flex font-medium"
                  >
                    Learn About Integration <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="md:w-1/2 bg-gradient-to-br from-enterprise-primary to-enterprise-accent p-8 md:p-12 text-white">
                  <h3 className="text-2xl font-bold mb-6 font-heading">Why Integration Matters</h3>
                  <p className="mb-6">
                    Community transportation should be coordinated among publicly and privately operated providers, but too often services are siloed due to disparate rules and funding streams.
                  </p>
                  <p className="mb-6">
                    DemandTrans is an industry leader in solutions that enable multiple demand-responsive providers to function as a network, helping to ensure that riders are matched to the lowest-cost service that best meets their travel needs.
                  </p>
                  <p>
                    When finite resources are used productively, a community's transportation dollars serve the greatest numbers of people.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-enterprise-primary to-enterprise-accent rounded-xl overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-heading">Ready to transform your transit operations?</h2>
                  <p className="text-white/90 text-lg mb-6">
                    Schedule a personalized demo to see our technology in action and discover how it can benefit your organization.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="bg-white text-enterprise-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-block">
                      Schedule a Demo
                    </a>
                    <a href="/roi-calculator" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2 font-medium">
                      Calculate ROI <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block relative h-full">
                  <img 
                    src="/OptiRun.png" 
                    alt="OptiRun Platform" 
                    className="h-full w-full object-cover object-left"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-enterprise-primary/80 to-transparent"></div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Interactive Platform Demo</h2>
              <p className="text-xl text-gray-600">
                Explore how our technology transforms transit operations from all perspectives - administrators, riders, and drivers.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="max-w-5xl mx-auto">
              <TechnologyDemo />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Technology;