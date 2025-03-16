import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  ExternalLink, 
  FileText, 
  Globe, 
  Laptop, 
  LineChart, 
  Server, 
  Shield, 
  Smartphone, 
  Users 
} from 'lucide-react';
import RequestDemoButton from '../components/RequestDemoButton';

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

const SolutionDetail = () => {
  const { solutionId } = useParams<{ solutionId: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [solutionId]);

  // Mock data for the solution
  const solutions = {
    mobilitydr: {
      title: "MobilityDR Platform",
      subtitle: "Comprehensive Demand-Responsive Transportation Solution",
      description: "MobilityDR is a state-of-the-art platform designed specifically for demand-responsive transportation services. It combines advanced scheduling algorithms, real-time optimization, and intuitive interfaces for operators, drivers, and riders.",
      heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      keyFeatures: [
        {
          icon: <Globe />,
          title: "Multi-Modal Integration",
          description: "Seamlessly connect with fixed-route services, microtransit, and other transportation options."
        },
        {
          icon: <LineChart />,
          title: "Real-Time Optimization",
          description: "Advanced algorithms continuously optimize routes and schedules based on current conditions."
        },
        {
          icon: <Smartphone />,
          title: "Mobile Applications",
          description: "Intuitive apps for riders to book trips and for drivers to manage their schedules."
        },
        {
          icon: <Shield />,
          title: "Comprehensive Security",
          description: "Enterprise-grade security with role-based access control and data encryption."
        }
      ],
      benefits: [
        "Reduce operational costs by up to 30%",
        "Increase service coverage without adding vehicles",
        "Improve on-time performance and reliability",
        "Enhance rider experience with real-time updates",
        "Simplify compliance reporting and service tracking",
        "Integrate with existing transit infrastructure"
      ],
      screenshots: [
        {
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          caption: "Dispatcher Dashboard with real-time vehicle tracking and trip management"
        },
        {
          image: "https://images.unsplash.com/photo-1551503766-ac63dfa6401c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          caption: "Mobile app for riders showing trip booking interface"
        },
        {
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          caption: "Analytics dashboard showing key performance metrics"
        }
      ],
      technicalSpecs: {
        deployment: [
          "Cloud-hosted SaaS solution",
          "On-premises deployment available",
          "Hybrid deployment options"
        ],
        integration: [
          "REST API for third-party integration",
          "GTFS-flex support",
          "Standard transit data formats",
          "Custom integration services available"
        ],
        security: [
          "SOC 2 Type II compliant",
          "End-to-end encryption",
          "Role-based access control",
          "Regular security audits"
        ],
        requirements: [
          "Modern web browser for dispatch interface",
          "iOS 14+ or Android 8+ for mobile apps",
          "Internet connection (4G/LTE or better recommended)",
          "OS: Linux (Ubuntu 20.04 LTS or RHEL 8+)",
          "Database: PostgreSQL 13+"
        ]
      },
      caseStudies: [
        {
          title: "Denver RTD FlexRide",
          description: "Implementation of MobilityDR for Denver's extensive microtransit service, resulting in 30% cost reduction and 25% increase in ridership.",
          link: "#denver-case-study"
        },
        {
          title: "San Joaquin RTD",
          description: "Deployment of MobilityDR for paratransit services, improving on-time performance from 85% to 97% while reducing cost per trip.",
          link: "#san-joaquin-case-study"
        }
      ],
      faqs: [
        {
          question: "How long does implementation typically take?",
          answer: "Implementation time varies based on the complexity of your operations, but typically ranges from 4-12 weeks. Our team works closely with you to ensure a smooth transition and minimal service disruption."
        },
        {
          question: "Can MobilityDR integrate with our existing scheduling software?",
          answer: "Yes, MobilityDR is designed with open APIs that allow integration with most existing transit software. We have pre-built connectors for common systems and can develop custom integrations as needed."
        },
        {
          question: "What kind of training do you provide?",
          answer: "We provide comprehensive training for all user roles including dispatchers, administrators, and drivers. Training is available both in-person and virtually, and we offer ongoing support and refresher sessions as needed."
        },
        {
          question: "Is MobilityDR compliant with ADA requirements?",
          answer: "Yes, MobilityDR is fully compliant with ADA requirements for paratransit services. The platform includes features specifically designed to support ADA compliance, such as eligibility management and required reporting."
        },
        {
          question: "What technical support is available?",
          answer: "We offer 24/7 technical support for critical issues, with standard support available during business hours. Support is provided through multiple channels including phone, email, and an online portal."
        }
      ]
    },
    microtransit: {
      title: "Microtransit & DRT Solutions",
      subtitle: "Flexible Transit for Modern Communities",
      description: "Our microtransit solutions enable transit agencies to provide flexible, on-demand service that adapts to community needs while maximizing operational efficiency.",
      heroImage: "https://images.unsplash.com/photo-1532939163844-547f958e91b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      keyFeatures: [
        {
          icon: <Globe />,
          title: "Zone-Based Service",
          description: "Define custom service zones with different operating parameters."
        },
        {
          icon: <LineChart />,
          title: "Demand Prediction",
          description: "AI-powered algorithms predict demand patterns to optimize vehicle deployment."
        },
        {
          icon: <Smartphone />,
          title: "Rider Applications",
          description: "Branded mobile apps for trip booking, tracking, and payment."
        },
        {
          icon: <Users />,
          title: "Multi-Passenger Optimization",
          description: "Efficiently combine trips to maximize vehicle utilization."
        }
      ],
      benefits: [
        "Serve low-density areas cost-effectively",
        "Reduce wait times with dynamic vehicle deployment",
        "Increase ridership with convenient service",
        "Complement fixed-route services",
        "Gather detailed ridership data",
        "Adjust service based on actual demand"
      ],
      screenshots: [
        {
          image: "https://images.unsplash.com/photo-1551503766-ac63dfa6401c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          caption: "Service zone configuration interface"
        },
        {
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          caption: "Demand heatmap showing trip patterns"
        },
        {
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
          caption: "Driver app with navigation and passenger information"
        }
      ],
      technicalSpecs: {
        deployment: [
          "Cloud-hosted SaaS solution",
          "On-premises deployment available",
          "Hybrid deployment options"
        ],
        integration: [
          "REST API for third-party integration",
          "GTFS-flex support",
          "Standard transit data formats",
          "Custom integration services available"
        ],
        security: [
          "SOC 2 Type II compliant",
          "End-to-end encryption",
          "Role-based access control",
          "Regular security audits"
        ],
        requirements: [
          "Modern web browser for dispatch interface",
          "iOS 14+ or Android 8+ for mobile apps",
          "Internet connection (4G/LTE or better recommended)",
          "OS: Linux (Ubuntu 20.04 LTS or RHEL 8+)",
          "Database: PostgreSQL 13+"
        ]
      },
      caseStudies: [
        {
          title: "LA Metro MicroTransit",
          description: "Implementation of zone-based microtransit service in Los Angeles, providing first/last mile connections to major transit hubs.",
          link: "#la-metro-case-study"
        },
        {
          title: "TriMet Flexible Services",
          description: "Deployment of on-demand service in Portland suburbs, increasing transit access while reducing operational costs.",
          link: "#trimet-case-study"
        }
      ],
      faqs: [
        {
          question: "How does microtransit differ from traditional fixed-route service?",
          answer: "Microtransit offers flexible routing and scheduling based on actual demand, rather than following fixed routes and timetables. This allows for more efficient service in areas where traditional fixed routes may not be cost-effective."
        },
        {
          question: "Can microtransit replace our existing fixed-route service?",
          answer: "Microtransit typically works best as a complement to fixed-route service, not a replacement. It's ideal for first/last mile connections, low-density areas, or times of day when fixed-route service is less efficient."
        },
        {
          question: "What vehicles are typically used for microtransit?",
          answer: "Microtransit commonly uses smaller vehicles such as vans or cutaway buses, which are more cost-effective for lower-volume, flexible service. Our platform works with any vehicle type and can help optimize your fleet mix."
        },
        {
          question: "How do riders book trips?",
          answer: "Riders can book trips through multiple channels including a mobile app, web portal, or by phone. The system automatically assigns the trip to the most appropriate vehicle based on current conditions."
        },
        {
          question: "Can we set different service parameters for different areas?",
          answer: "Yes, our platform allows you to define multiple service zones with different operating parameters such as hours of service, maximum wait times, and pickup/dropoff restrictions."
        }
      ]
    }
  };

  const solution = solutions[solutionId as keyof typeof solutions];

  if (!solution) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-enterprise-primary mb-4">Solution Not Found</h1>
          <p className="text-gray-600 mb-8">The solution you're looking for doesn't exist or has been moved.</p>
          <Link to="/solutions" className="bg-enterprise-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
            View All Solutions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-enterprise-primary text-white py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{solution.title}</h1>
                  <p className="text-xl text-gray-300 mb-6">{solution.subtitle}</p>
                  <p className="text-gray-300 mb-8">{solution.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-white text-enterprise-primary px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-medium">
                      Schedule a Demo
                    </button>
                    <button className="bg-enterprise-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors font-medium flex items-center gap-2">
                      Download Brochure <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src={solution.heroImage} 
                    alt={solution.title} 
                    className="rounded-xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto hide-scrollbar">
            <button 
              className={`px-6 py-4 font-medium whitespace-nowrap ${
                activeTab === 'overview' 
                  ? 'text-enterprise-accent border-b-2 border-enterprise-accent' 
                  : 'text-gray-600 hover:text-enterprise-accent'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-6 py-4 font-medium whitespace-nowrap ${
                activeTab === 'features' 
                  ? 'text-enterprise-accent border-b-2 border-enterprise-accent' 
                  : 'text-gray-600 hover:text-enterprise-accent'
              }`}
              onClick={() => setActiveTab('features')}
            >
              Features & Benefits
            </button>
            <button 
              className={`px-6 py-4 font-medium whitespace-nowrap ${
                activeTab === 'screenshots' 
                  ? 'text-enterprise-accent border-b-2 border-enterprise-accent' 
                  : 'text-gray-600 hover:text-enterprise-accent'
              }`}
              onClick={() => setActiveTab('screenshots')}
            >
              Screenshots
            </button>
            <button 
              className={`px-6 py-4 font-medium whitespace-nowrap ${
                activeTab === 'specs' 
                  ? 'text-enterprise-accent border-b-2 border-enterprise-accent' 
                  : 'text-gray-600 hover:text-enterprise-accent'
              }`}
              onClick={() => setActiveTab('specs')}
            >
              Technical Specs
            </button>
            <button 
              className={`px-6 py-4 font-medium whitespace-nowrap ${
                activeTab === 'case-studies' 
                  ? 'text-enterprise-accent border-b-2 border-enterprise-accent' 
                  : 'text-gray-600 hover:text-enterprise-accent'
              }`}
              onClick={() => setActiveTab('case-studies')}
            >
              Case Studies
            </button>
            <button 
              className={`px-6 py-4 font-medium whitespace-nowrap ${
                activeTab === 'faq' 
                  ? 'text-enterprise-accent border-b-2 border-enterprise-accent' 
                  : 'text-gray-600 hover:text-enterprise-accent'
              }`}
              onClick={() => setActiveTab('faq')}
            >
              FAQ
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {activeTab === 'overview' && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-enterprise-primary">Key Features</h2>
                <p className="text-gray-600">
                  {solution.title} provides a comprehensive set of features designed to transform your transit operations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {solution.keyFeatures.map((feature, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:border-enterprise-accent transition-all">
                    <div className="w-12 h-12 bg-enterprise-accent/10 rounded-lg flex items-center justify-center mb-6 text-enterprise-accent">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-enterprise-primary">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="max-w-3xl mx-auto">
                <div></div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </div>
  );
};

export default SolutionDetail;