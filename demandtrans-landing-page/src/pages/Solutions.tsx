import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Bus,
  Cloud,
  Globe,
  LineChart,
  MapPin,
  Shield,
  Smartphone,
  Users,
  BookOpen,
  Check,
  ChevronRight,
  Filter,
  X
} from 'lucide-react';

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

const Solutions = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  
  const clearFilters = () => {
    setActiveFilters([]);
  };

  const solutions = [
    {
      id: "kyyti",
      icon: <Smartphone />,
      title: "Mobility as a Service",
      description: "Integrated platform that connects all community transportation options through one customer interface. Our MaaS solution is specifically designed for small urban and rural communities who need to offer both fixed-route and demand-responsive services.",
      approach: "We tailor the platform to your community's specific needs, incorporating local transit services, micromobility options, and private providers in a single app with booking and payment capabilities.",
      benefits: [
        "Seamless trip planning, booking, and payment across multiple transportation modes",
        "Target subsidies and incentives to transportation-disadvantaged populations",
        "Gain valuable insights through anonymized travel data analytics"
      ],
      features: [
        "Multi-modal trip planning",
        "Mobile ticketing",
        "Real-time updates",
        "Integrated payment systems"
      ],
      image: "/Kyyti MaaS Platform   Solutions -2025-02-28 at 11.17..png",
      product: "Kyyti MaaS Platform",
      caseStudy: "San Joaquin Vamos MaaS platform connecting 7+ transit providers",
      caseStudyLink: "/impact/san-joaquin",
      screenshot: "/Kyyti MaaS Platform   Solutions -2025-02-28 at 11.17..png",
      challenge: "How do we make all transportation options in our community accessible to riders through a single platform?",
      tags: ["mobile-app", "rider-experience", "integration", "small-urban", "rural"]
    },
    {
      id: "mobilitydr",
      icon: <Bus />,
      title: "Demand-Responsive Transportation",
      description: "Transportation services that adapt to customer requests rather than following fixed routes and schedules. Our platform handles all configurations from fully on-demand microtransit to structured solutions like deviated fixed-route and checkpoint services.",
      approach: "We implement automated scheduling, routing, and dispatch optimized for your specific service zones, time periods, and rider populations, with flexible configurations that can change by time of day.",
      benefits: [
        "15-25% reduction in operational costs through optimized routing and scheduling",
        "30% increase in vehicle productivity through better resource utilization",
        "Support for flexible service configurations that adapt to community needs"
      ],
      features: [
        "Real-time scheduling",
        "Automated dispatching",
        "Service zone management",
        "Customer communications"
      ],
      image: "/MobilityDR.png",
      product: "MobilityDR Platform",
      caseStudy: "Denver RTD FlexRide serving 23 service zones with 45 vehicles",
      caseStudyLink: "/impact/denver-rtd",
      screenshot: "/MobilityDR.png",
      challenge: "How do we provide cost-effective transit service in areas where fixed routes don't work well?",
      tags: ["cost-reduction", "flexible-service", "microtransit", "driver-shortage"]
    },
    {
      id: "paratransit",
      icon: <Users />,
      title: "ADA Paratransit & NEMT",
      description: "Specialized transportation solutions for ADA paratransit and non-emergency medical transportation requirements. We help agencies optimize these services while ensuring compliance with regulatory requirements.",
      approach: "Our products enable you to combine paratransit, NEMT, and other demand-responsive services using the same fleet, with automated scheduling that ensures trips are provided within required pick-up windows while maintaining proper cost allocation.",
      benefits: [
        "Reduce paratransit operating costs while maintaining or improving service levels",
        "Automate cost allocation across multiple funding sources and reporting requirements",
        "Integrate with other demand-responsive services for greater operational efficiency"
      ],
      features: [
        "Automated scheduling",
        "Compliance management",
        "Resource optimization",
        "Service tracking"
      ],
      image: "/MobilityDR.png",
      product: "MobilityDR & OptiRun",
      caseStudy: "Chicago SCR annual cost savings of over $1 million with OptiRun",
      caseStudyLink: "/impact/chicago-scr",
      screenshot: "/MobilityDR.png",
      challenge: "How do we maintain high-quality ADA service while controlling the growing costs?",
      tags: ["accessibility", "compliance", "cost-reduction", "specialized-service"]
    },
    {
      id: "firstmile",
      icon: <MapPin />,
      title: "First Mile/Last Mile",
      description: "Connecting services that bridge the gap between homes or destinations and fixed-route public transportation. These solutions extend the reach of transit networks to areas not well-served by fixed routes.",
      approach: "We design flexible first/last mile services that cost-effectively augment your fixed-route public transportation investments, with zone-based services tailored to specific transit connection points.",
      benefits: [
        "Extend fixed-route service reach without expanding traditional bus routes",
        "Increase fixed-route ridership by solving the first/last mile problem",
        "Serve low-density areas more efficiently than with fixed routes"
      ],
      features: [
        "Zone-based services",
        "Transit connection points",
        "Flexible routing",
        "Real-time coordination"
      ],
      image: "/community-transit.jpg",
      product: "MobilityDR & Kyyti",
      caseStudy: "Denver RTD's 15 first/last mile zones connecting to regional transit",
      caseStudyLink: "/impact/denver-rtd",
      screenshot: "/MobilityDR.png",
      challenge: "How do we connect riders to our main transit network from areas that can't support traditional fixed routes?",
      tags: ["fixed-route", "service-extension", "rider-experience", "transit-connections"]
    },
    {
      id: "regional",
      icon: <Globe />,
      title: "Regional Coordination",
      description: "Integrated solutions that enable multiple providers to function as a coordinated network while maintaining operational independence. Our approach breaks down silos between transportation providers.",
      approach: "DemandTrans leverages open data standards and our Trip Exchange platform to enable coordinated services across jurisdictional boundaries, allowing providers to maintain their scheduling platforms while participating in a regional system.",
      benefits: [
        "Enable cross-boundary services without requiring agencies to change their core systems",
        "Match riders to the lowest-cost service that best meets their needs",
        "Maintain proper cost allocation and reporting across multiple providers"
      ],
      features: [
        "Multi-agency integration",
        "Resource sharing",
        "Automated trip exchange",
        "Performance tracking"
      ],
      image: "/Trip Exchange.png",
      product: "Trip Exchange & Dynamic Translator",
      caseStudy: "NEORide's five-state EZ Connect coordinated services network",
      caseStudyLink: "/impact/neoride",
      screenshot: "/Trip Exchange.png",
      challenge: "How do we coordinate multiple transportation providers across jurisdictional boundaries while preserving their autonomy?",
      tags: ["integration", "multi-agency", "cross-boundary", "coordination"]
    },
    {
      id: "optimization",
      icon: <LineChart />,
      title: "Route Optimization",
      description: "Advanced algorithms that calculate the most efficient paths for transit vehicles based on real-time conditions. These tools maximize productivity while controlling costs.",
      approach: "Our field-tested algorithms optimize scheduling and routing according to dynamic customer demand and vehicle constraints, leveraging 40+ years of expertise in demand-responsive transportation.",
      benefits: [
        "Reduce empty vehicle miles by up to 25%",
        "Increase driver productivity by up to 30%",
        "Optimize resource allocation based on real-time demand patterns"
      ],
      features: [
        "Real-time optimization",
        "Demand prediction",
        "Resource allocation",
        "Performance analytics"
      ],
      image: "/OptiRun.png",
      product: "OptiRun",
      caseStudy: "Chicago's SCR paratransit $1 million+ annual savings",
      caseStudyLink: "/impact/chicago-scr",
      screenshot: "/OptiRun.png",
      challenge: "How do we reduce operational costs while serving the same or more trips with our existing fleet?",
      tags: ["cost-reduction", "efficiency", "resource-optimization", "driver-shortage"]
    },
    {
      id: "integration",
      icon: <Shield />,
      title: "Service Integration",
      description: "Solutions that enable commingling of services, allowing agencies to serve distinct populations with the same fleet. This approach maximizes resource utilization across service types.",
      approach: "Our technology allows you to seamlessly integrate paratransit, microtransit, and other demand-responsive services with guaranteed pick-up windows and proper cost allocation between funding sources.",
      benefits: [
        "Overcome paratransit and NEMT funding and reporting silos",
        "Maximize fleet utilization across multiple service types",
        "Maintain service quality while reducing overall operational costs"
      ],
      features: [
        "Service commingling",
        "Cost allocation",
        "Compliance tracking",
        "Performance reporting"
      ],
      image: "/MobilityDR.png",
      product: "MobilityDR",
      caseStudy: "Denver RTD's integrated service delivery model across service types",
      caseStudyLink: "/impact/denver-rtd",
      screenshot: "/MobilityDR.png",
      challenge: "How do we combine different service types and funding sources while meeting all compliance requirements?",
      tags: ["integration", "cost-reduction", "compliance", "resource-optimization"]
    },
    {
      id: "consulting",
      icon: <BookOpen />,
      title: "Consulting Services",
      description: "Expert guidance from industry leaders with decades of experience in demand-responsive transportation. Our team provides comprehensive support through all phases of implementation.",
      approach: "DemandTrans offers service design, technology planning, implementation support, and performance analysis backed by our team's extensive experience operating and designing flexible transit services.",
      benefits: [
        "Benefit from the expertise of industry pioneers in demand-responsive transit",
        "Receive data-driven recommendations based on proven implementations",
        "Get ongoing support tailored to your specific operational context"
      ],
      features: [
        "Service planning",
        "Technology assessment",
        "Performance analysis",
        "Implementation support"
      ],
      image: "/sustainable-mobility.jpg",
      product: "Professional Services",
      caseStudy: "TCRP research projects on demand-responsive transportation",
      caseStudyLink: "/impact/research",
      screenshot: "/MobilityDR.png",
      challenge: "How do we ensure our new transit technology implementation is successful from start to finish?",
      tags: ["implementation", "planning", "expertise", "technology-assessment"]
    }
  ];

  // Solution finder filter categories
  const filterCategories = [
    {
      name: "Challenge",
      filters: [
        { id: "cost-reduction", label: "Cost Reduction" },
        { id: "driver-shortage", label: "Driver Shortage" },
        { id: "fixed-route", label: "Fixed-Route Enhancement" },
        { id: "coordination", label: "Regional Coordination" },
        { id: "compliance", label: "Regulatory Compliance" },
      ]
    },
    {
      name: "Service Type",
      filters: [
        { id: "microtransit", label: "Microtransit" },
        { id: "paratransit", label: "Paratransit" },
        { id: "rural", label: "Rural Transit" },
        { id: "specialized-service", label: "Specialized Service" },
        { id: "flexible-service", label: "Flexible Service" },
      ]
    },
    {
      name: "Feature Focus",
      filters: [
        { id: "integration", label: "System Integration" },
        { id: "rider-experience", label: "Rider Experience" },
        { id: "efficiency", label: "Operational Efficiency" },
        { id: "resource-optimization", label: "Resource Optimization" },
        { id: "multi-agency", label: "Multi-Agency" },
      ]
    }
  ];

  // Filter solutions based on active filters
  const filteredSolutions = activeFilters.length === 0 
    ? solutions 
    : solutions.filter(solution => 
        activeFilters.some(filter => solution.tags.includes(filter))
      );

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-enterprise-primary to-enterprise-primary-dark text-white py-20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-enterprise-accent/90 font-medium block mb-3 uppercase tracking-wider">IMPLEMENTATION FOCUS</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Digital Solutions for Modern Transit</h1>
              <p className="text-xl text-gray-300 mb-8">
                Tailored solutions for every transit need, from small rural communities to large metropolitan areas.
              </p>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                At DemandTrans, we understand that each community has unique transportation needs. Our solutions are designed to be adaptable to your specific context, whether you're looking to enhance existing fixed-route services, implement new demand-responsive options, or create a coordinated regional network.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                We partner with you to tailor your service configuration, leveraging our deep industry expertise and flexible technology platform to deliver solutions that address your specific challenges and goals.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Solution Finder */}
      <section className="py-12 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Filter className="w-5 h-5 text-enterprise-accent" />
                    <h2 className="text-2xl font-bold text-enterprise-primary font-heading">Solution Finder</h2>
                  </div>
                  {activeFilters.length > 0 && (
                    <button 
                      onClick={clearFilters}
                      className="text-sm text-gray-500 hover:text-enterprise-accent flex items-center gap-1"
                    >
                      <X className="w-4 h-4" /> Clear filters
                    </button>
                  )}
                </div>
                
                <p className="text-gray-600 mb-6">
                  Select one or more options below to find solutions that address your specific transit challenges.
                </p>
                
                <div className="space-y-6">
                  {filterCategories.map((category, idx) => (
                    <div key={idx}>
                      <h3 className="text-sm font-medium text-gray-500 mb-3">{category.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.filters.map((filter, fidx) => (
                          <button
                            key={fidx}
                            onClick={() => toggleFilter(filter.id)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                              activeFilters.includes(filter.id)
                                ? 'bg-enterprise-accent text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {filter.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {activeFilters.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-2">
                      {filteredSolutions.length} solution{filteredSolutions.length !== 1 ? 's' : ''} found
                    </p>
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Transit Solutions</h2>
              <p className="text-xl text-gray-600">
                Our solutions address the unique challenges of transit agencies of all sizes, from small rural communities to large metropolitan areas.
              </p>
            </div>
          </AnimatedSection>

          {filteredSolutions.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No solutions match your current filters. Please adjust your criteria.</p>
              <button 
                onClick={clearFilters}
                className="mt-4 text-enterprise-accent hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map((solution, index) => (
                <AnimatedSection key={index} delay={index * 100}>
                  <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-enterprise-accent hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="p-6">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-enterprise-accent/10 rounded-lg flex items-center justify-center text-enterprise-accent flex-shrink-0">
                          {solution.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-enterprise-primary font-heading">
                            {solution.title}
                          </h3>
                          <div className="mt-1">
                            <span className="inline-flex items-center rounded-md bg-enterprise-accent/10 px-2 py-1 text-xs font-medium text-enterprise-accent">
                              {solution.product}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {solution.challenge && (
                        <div className="mb-4 p-3 border-l-4 border-enterprise-accent/30 bg-gray-50 italic text-gray-600 text-sm">
                          "{solution.challenge}"
                        </div>
                      )}
                      
                      <p className="text-gray-700 mb-4">
                        {solution.description}
                      </p>
                      
                      <p className="text-gray-600 mb-6 text-sm border-t border-gray-100 pt-4">
                        <span className="font-semibold text-enterprise-primary block mb-1">The DemandTrans Approach:</span>
                        {solution.approach}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-enterprise-primary mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {solution.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                              <Check className="w-4 h-4 text-enterprise-accent flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-enterprise-primary mb-3">Key Features:</h4>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {solution.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-700 text-sm">
                              <div className="w-2 h-2 bg-enterprise-accent rounded-full flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {solution.caseStudy && (
                        <div className="mt-auto p-3 bg-gray-50 rounded-lg border border-gray-100 mb-6">
                          <h4 className="text-sm font-semibold text-enterprise-primary mb-1">Success Story:</h4>
                          <p className="text-sm text-gray-600">{solution.caseStudy}</p>
                          <Link 
                            to={solution.caseStudyLink} 
                            className="text-xs text-enterprise-accent hover:underline mt-1 inline-block"
                          >
                            Read case study
                          </Link>
                        </div>
                      )}
                      
                      <Link 
                        to={`/solutions/${solution.id}`} 
                        className="inline-flex items-center text-enterprise-accent hover:gap-2 transition-all font-medium mt-auto"
                      >
                        Learn More <ChevronRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                    
                    {solution.image && (
                      <div className="mt-auto overflow-hidden h-48 relative border-t border-gray-100">
                        <img 
                          src={solution.image} 
                          alt={`${solution.title}`} 
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                          onError={(e) => {
                            e.currentTarget.src = "/MobilityDR.png";
                            e.currentTarget.alt = `${solution.title} (fallback)`;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Featured Solution */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12">
                  <span className="text-enterprise-accent text-sm font-medium uppercase tracking-wider">Featured Solution</span>
                  <h2 className="text-3xl font-bold mb-4 mt-2 text-enterprise-primary font-heading">Demand-Responsive Transportation</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Maximize efficiency with flexible transit services that adapt to customer demand rather than following fixed routes and schedules.
                  </p>
                  <ul className="space-y-4 mb-8">
                    {[
                      "15-25% reduction in operational costs",
                      "30% increase in driver productivity",
                      "Multiple flexible service configurations",
                      "Automated scheduling and optimization",
                      "Real-time adjustments to demand patterns"
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <Check className="w-5 h-5 text-enterprise-accent flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/solutions/mobilitydr" 
                    className="bg-enterprise-accent text-white px-6 py-3 rounded-lg hover:bg-enterprise-accent/90 transition-colors flex items-center gap-2 inline-flex font-medium"
                  >
                    Learn More <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="h-full relative overflow-hidden">
                    <img 
                      src="/MobilityDR.png"
                      alt="MobilityDR Platform"
                      className="h-full w-full object-cover object-left transition-transform hover:scale-105 duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                  <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-xl">
                    <div className="flex items-center gap-3">
                      <Bus className="w-8 h-8 text-enterprise-accent" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-enterprise-primary">MobilityDR</span>
                        <span className="text-sm text-gray-600">Microtransit Platform</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Why Choose DemandTrans */}
      <section className="py-16 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Why Choose DemandTrans</h2>
              <p className="text-xl text-gray-600">
                Our deep expertise and flexible approach set us apart in the transit technology landscape.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8 text-enterprise-accent" />,
                title: "40+ Years of Expertise",
                description: "Our team includes pioneering experts in demand-responsive transportation with decades of real-world experience."
              },
              {
                icon: <Shield className="w-8 h-8 text-enterprise-accent" />,
                title: "Proven Results",
                description: "Transit agencies implementing our solutions have achieved 15-25% cost reductions and 30% productivity improvements."
              },
              {
                icon: <Globe className="w-8 h-8 text-enterprise-accent" />,
                title: "Integration Focus",
                description: "We're committed to open standards and system interoperability, enabling seamless connections between disparate systems."
              },
              {
                icon: <Bus className="w-8 h-8 text-enterprise-accent" />,
                title: "Demand-Response Specialists",
                description: "Unlike vendors who treat flexible service as an add-on, we specialize exclusively in demand-responsive transportation."
              },
              {
                icon: <Cloud className="w-8 h-8 text-enterprise-accent" />,
                title: "Cloud-Native Solutions",
                description: "Our technology is built on modern cloud architecture, ensuring scalability, reliability, and continuous enhancement."
              },
              {
                icon: <LineChart className="w-8 h-8 text-enterprise-accent" />,
                title: "Data-Driven Approach",
                description: "Comprehensive analytics and reporting provide insights that drive ongoing service improvements and cost reductions."
              }
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={index * 100}>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-enterprise-accent hover:shadow-md transition-all h-full">
                  <div className="w-12 h-12 bg-enterprise-accent/10 rounded-lg flex items-center justify-center mb-4 text-enterprise-accent">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-enterprise-primary font-heading">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-heading">Ready to overcome your transit challenges?</h2>
                  <p className="text-white/90 text-lg mb-6">
                    Schedule a personalized demo to see our solutions in action and discover how they can help address your agency's specific needs.
                  </p>
                  <ul className="space-y-3 mb-8 text-white/90">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span>Typical 15-25% reduction in operational costs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span>Implementation in as little as 60 days</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <span>Dedicated support from transit technology experts</span>
                    </li>
                  </ul>
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
    </div>
  );
};

export default Solutions;