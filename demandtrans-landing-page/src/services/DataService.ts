// Data Service for the application
// This service handles data fetching, caching, and manipulation

import { Solution, Product, SuccessStory, TeamMember } from '../models/DataModels';

// In-memory cache for data
const cache = new Map<string, any>();

// Cache expiration time in milliseconds (5 minutes)
const CACHE_EXPIRATION = 5 * 60 * 1000;

class DataService {
  // Get all solutions with caching
  async getSolutions(): Promise<Solution[]> {
    const cacheKey = 'solutions';
    
    // Check if data is in cache and not expired
    if (cache.has(cacheKey)) {
      const { data, timestamp } = cache.get(cacheKey);
      if (Date.now() - timestamp < CACHE_EXPIRATION) {
        return data;
      }
    }
    
    // In a real app, this would be an API call
    // For now, we'll simulate a network request
    const data = await this.fetchSolutions();
    
    // Store in cache
    cache.set(cacheKey, {
      data,
      timestamp: Date.now()
    });
    
    return data;
  }
  
  // Get a specific solution by ID
  async getSolutionById(id: string): Promise<Solution | null> {
    const solutions = await this.getSolutions();
    return solutions.find(solution => solution.id === id) || null;
  }
  
  // Get all products with caching
  async getProducts(): Promise<Product[]> {
    const cacheKey = 'products';
    
    // Check if data is in cache and not expired
    if (cache.has(cacheKey)) {
      const { data, timestamp } = cache.get(cacheKey);
      if (Date.now() - timestamp < CACHE_EXPIRATION) {
        return data;
      }
    }
    
    // In a real app, this would be an API call
    const data = await this.fetchProducts();
    
    // Store in cache
    cache.set(cacheKey, {
      data,
      timestamp: Date.now()
    });
    
    return data;
  }
  
  // Get a specific product by ID
  async getProductById(id: string): Promise<Product | null> {
    const products = await this.getProducts();
    return products.find(product => product.id === id) || null;
  }
  
  // Get success stories with caching
  async getSuccessStories(): Promise<SuccessStory[]> {
    const cacheKey = 'successStories';
    
    // Check if data is in cache and not expired
    if (cache.has(cacheKey)) {
      const { data, timestamp } = cache.get(cacheKey);
      if (Date.now() - timestamp < CACHE_EXPIRATION) {
        return data;
      }
    }
    
    // In a real app, this would be an API call
    const data = await this.fetchSuccessStories();
    
    // Store in cache
    cache.set(cacheKey, {
      data,
      timestamp: Date.now()
    });
    
    return data;
  }
  
  // Get team members with caching
  async getTeamMembers(): Promise<TeamMember[]> {
    const cacheKey = 'teamMembers';
    
    // Check if data is in cache and not expired
    if (cache.has(cacheKey)) {
      const { data, timestamp } = cache.get(cacheKey);
      if (Date.now() - timestamp < CACHE_EXPIRATION) {
        return data;
      }
    }
    
    // In a real app, this would be an API call
    const data = await this.fetchTeamMembers();
    
    // Store in cache
    cache.set(cacheKey, {
      data,
      timestamp: Date.now()
    });
    
    return data;
  }
  
  // Clear all cache
  clearCache(): void {
    cache.clear();
  }
  
  // Clear specific cache entry
  clearCacheEntry(key: string): void {
    cache.delete(key);
  }
  
  // Simulate API calls with mock data
  private async fetchSolutions(): Promise<Solution[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // This would be replaced with actual API call in production
    return [
      {
        id: "mobilitydr",
        title: "Microtransit & DRT Solutions",
        subtitle: "Flexible Transit for Modern Communities",
        description: "Our MobilityDR platform provides comprehensive demand-responsive transportation with flexible service configurations and automated scheduling.",
        heroImage: "/MobilityDR.png",
        icon: "Bus",
        product: "MobilityDR",
        screenshot: "/MobilityDR.png",
        features: [
          "Real-time scheduling",
          "Automated dispatching",
          "Service zone management",
          "Customer communications"
        ],
        benefits: [
          "Reduce operational costs by up to 30%",
          "Increase service coverage without adding vehicles",
          "Improve on-time performance and reliability",
          "Enhance rider experience with real-time updates",
          "Simplify compliance reporting and service tracking",
          "Integrate with existing transit infrastructure"
        ],
        keyFeatures: [
          {
            icon: "Globe",
            title: "Multi-Modal Integration",
            description: "Seamlessly connect with fixed-route services, microtransit, and other transportation options."
          },
          {
            icon: "LineChart",
            title: "Real-Time Optimization",
            description: "Advanced algorithms continuously optimize routes and schedules based on current conditions."
          },
          {
            icon: "Smartphone",
            title: "Mobile Applications",
            description: "Intuitive apps for riders to book trips and for drivers to manage their schedules."
          },
          {
            icon: "Shield",
            title: "Comprehensive Security",
            description: "Enterprise-grade security with role-based access control and data encryption."
          }
        ],
        screenshots: [
          {
            image: "/MobilityDR.png",
            caption: "Dispatcher Dashboard with real-time vehicle tracking and trip management"
          },
          {
            image: "/MobilityDR.png",
            caption: "Mobile app for riders showing trip booking interface"
          },
          {
            image: "/MobilityDR.png",
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
            "Internet connection (4G/LTE or better recommended)"
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
          }
        ]
      },
      {
        id: "kyyti",
        title: "Mobility as a Service",
        subtitle: "Comprehensive Mobility Platform",
        description: "Our Kyyti MaaS platform enables customers to access all community travel options through a single interface, tailored for small urban and rural communities.",
        heroImage: "/Kyyti MaaS Platform   Solutions -2025-02-28 at 11.17..png",
        icon: "Smartphone",
        product: "Kyyti",
        screenshot: "/Kyyti MaaS Platform   Solutions -2025-02-28 at 11.17..png",
        features: [
          "Multi-modal trip planning",
          "Mobile ticketing",
          "Real-time updates",
          "Integrated payment systems"
        ],
        benefits: [
          "Increase transit ridership by improving accessibility",
          "Enhance user experience with seamless multi-modal trips",
          "Gain valuable insights through comprehensive analytics",
          "Reduce private vehicle usage and environmental impact",
          "Improve mobility equity with integrated subsidies",
          "Streamline operations with automated reporting"
        ],
        keyFeatures: [
          {
            icon: "Globe",
            title: "Multi-Modal Integration",
            description: "Seamlessly connect all transportation options including public transit, microtransit, rideshare, and more."
          },
          {
            icon: "Smartphone",
            title: "Mobile-First Design",
            description: "Intuitive mobile app for riders to plan, book, and pay for trips across multiple modes."
          },
          {
            icon: "LineChart",
            title: "Analytics Dashboard",
            description: "Comprehensive analytics for transit agencies to monitor usage and optimize service."
          },
          {
            icon: "Shield",
            title: "Secure Payment Processing",
            description: "Integrated payment processing with multiple options including credit cards and mobile wallets."
          }
        ],
        screenshots: [
          {
            image: "/Kyyti MaaS Platform   Solutions -2025-02-28 at 11.17..png",
            caption: "Kyyti mobile app showing multi-modal trip planning"
          },
          {
            image: "/Kyyti MaaS Platform   Solutions -2025-02-28 at 11.17..png",
            caption: "Payment integration screen with multiple options"
          },
          {
            image: "/Kyyti MaaS Platform   Solutions -2025-02-28 at 11.17..png",
            caption: "Analytics dashboard showing usage patterns"
          }
        ],
        technicalSpecs: {
          deployment: [
            "Cloud-hosted SaaS solution",
            "White-label mobile app",
            "Customizable branding"
          ],
          integration: [
            "REST API for third-party integration",
            "GTFS and GTFS-RT support",
            "Standard payment gateways",
            "Custom integration services available"
          ],
          security: [
            "PCI DSS compliant",
            "End-to-end encryption",
            "GDPR compliant",
            "Regular security audits"
          ],
          requirements: [
            "iOS 14+ or Android 8+ for mobile apps",
            "Modern web browser for admin interface",
            "Internet connection (4G/LTE or better recommended)"
          ]
        },
        caseStudies: [
          {
            title: "Vamos Mobility in San Joaquin",
            description: "Implementation of Kyyti for San Joaquin COG's Vamos Mobility program, connecting multiple transit services across several counties.",
            link: "#vamos-case-study"
          },
          {
            title: "Helsinki Regional Transport",
            description: "Deployment of Kyyti in Helsinki, integrating public transit, city bikes, e-scooters, and taxis into a single platform.",
            link: "#helsinki-case-study"
          }
        ],
        faqs: [
          {
            question: "How does Kyyti integrate with existing transit services?",
            answer: "Kyyti integrates with existing transit services through standard protocols like GTFS and GTFS-RT, as well as custom APIs when needed. We work closely with transit agencies to ensure seamless integration with their existing systems."
          },
          {
            question: "Can Kyyti be customized with our agency's branding?",
            answer: "Yes, Kyyti is available as a white-label solution that can be fully customized with your agency's branding, including logos, colors, and terminology."
          }
        ]
      }
    ];
  }
  
  private async fetchProducts(): Promise<Product[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // This would be replaced with actual API call in production
    return [
      {
        id: "mobilitydr",
        title: "MobilityDR Platform",
        subtitle: "Comprehensive Demand-Responsive Transportation Solution",
        description: "MobilityDR is a state-of-the-art platform designed specifically for demand-responsive transportation services. It combines advanced scheduling algorithms, real-time optimization, and intuitive interfaces for operators, drivers, and riders.",
        heroImage: "/MobilityDR.png",
        icon: "Bus",
        relatedSolutions: ["microtransit", "paratransit", "firstmile"],
        screenshot: "/MobilityDR.png",
        features: [
          "Real-time scheduling and dispatching",
          "Automated route optimization",
          "Customer mobile apps",
          "Driver management tools",
          "Analytics and reporting"
        ],
        keyFeatures: [
          {
            icon: "Globe",
            title: "Multi-Modal Integration",
            description: "Seamlessly connect with fixed-route services, microtransit, and other transportation options."
          },
          {
            icon: "LineChart",
            title: "Real-Time Optimization",
            description: "Advanced algorithms continuously optimize routes and schedules based on current conditions."
          },
          {
            icon: "Smartphone",
            title: "Mobile Applications",
            description: "Intuitive apps for riders to book trips and for drivers to manage their schedules."
          },
          {
            icon: "Shield",
            title: "Comprehensive Security",
            description: "Enterprise-grade security with role-based access control and data encryption."
          }
        ],
        screenshots: [
          {
            image: "/MobilityDR.png",
            caption: "Dispatcher Dashboard with real-time vehicle tracking and trip management"
          },
          {
            image: "/MobilityDR.png",
            caption: "Mobile app for riders showing trip booking interface"
          },
          {
            image: "/MobilityDR.png",
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
            "Internet connection (4G/LTE or better recommended)"
          ]
        },
        caseStudy: [
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
          }
        ]
      },
      {
        id: "kyyti",
        title: "Kyyti MaaS Platform",
        subtitle: "Comprehensive Mobility as a Service Solution",
        description: "Kyyti is a state-of-the-art MaaS platform that connects all transportation options in your community through a single, integrated interface. It enables riders to plan, book, and pay for multi-modal trips seamlessly.",
        heroImage: "/Kyyti MaaS Platform   Solutions -2025-02-28 at 11.17..png",
        icon: "Smartphone",
        relatedSolutions: ["maas", "firstmile"],
        screenshot: "/Kyyti MaaS Platform   Solutions -2025-02-28 at 11.17..png",
        features: [
          "Multi-modal trip planning",
          "Mobile ticketing",
          "Real-time updates",
          "Integrated payment systems"
        ],
        keyFeatures: [
          {
            icon: "Globe",
            title: "Multi-Modal Integration",
            description: "Seamlessly connect all transportation options including public transit, microtransit, rideshare, and more."
          },
          {
            icon: "Smartphone",
            title: "Mobile-First Design",
            description: "Intuitive mobile app for riders to plan, book, and pay for trips across multiple modes."
          },
          {
            icon: "LineChart",
            title: "Analytics Dashboard",
            description: "Comprehensive analytics for transit agencies to monitor usage and optimize service."
          },
          {
            icon: "Shield",
            title: "Secure Payment Processing",
            description: "Integrated payment processing with multiple options including credit cards and mobile wallets."
          }
        ],
        screenshots: [
          {
            image: "/Kyyti MaaS Platform   Solutions -2025-02-28 at 11.17..png",
            caption: "Kyyti mobile app showing multi-modal trip planning"
          },
          {
            image: "/Kyyti MaaS Platform   Solutions -2025-02-28 at 11.17..png",
            caption: "Payment integration screen with multiple options"
          },
          {
            image: "/Kyyti MaaS Platform   Solutions -2025-02-28 at 11.17..png",
            caption: "Analytics dashboard showing usage patterns"
          }
        ],
        technicalSpecs: {
          deployment: [
            "Cloud-hosted SaaS solution",
            "White-label mobile app",
            "Customizable branding"
          ],
          integration: [
            "REST API for third-party integration",
            "GTFS and GTFS-RT support",
            "Standard payment gateways",
            "Custom integration services available"
          ],
          security: [
            "PCI DSS compliant",
            "End-to-end encryption",
            "GDPR compliant",
            "Regular security audits"
          ],
          requirements: [
            "iOS 14+ or Android 8+ for mobile apps",
            "Modern web browser for admin interface",
            "Internet connection (4G/LTE or better recommended)"
          ]
        },
        caseStudy: [
          {
            title: "Vamos Mobility in San Joaquin",
            description: "Implementation of Kyyti for San Joaquin COG's Vamos Mobility program, connecting multiple transit services across several counties.",
            link: "#vamos-case-study"
          },
          {
            title: "Helsinki Regional Transport",
            description: "Deployment of Kyyti in Helsinki, integrating public transit, city bikes, e-scooters, and taxis into a single platform.",
            link: "#helsinki-case-study"
          }
        ],
        faqs: [
          {
            question: "How does Kyyti integrate with existing transit services?",
            answer: "Kyyti integrates with existing transit services through standard protocols like GTFS and GTFS-RT, as well as custom APIs when needed. We work closely with transit agencies to ensure seamless integration with their existing systems."
          },
          {
            question: "Can Kyyti be customized with our agency's branding?",
            answer: "Yes, Kyyti is available as a white-label solution that can be fully customized with your agency's branding, including logos, colors, and terminology."
          }
        ]
      }
    ];
  }
  
  private async fetchSuccessStories(): Promise<SuccessStory[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return [
      {
        title: "FlexRide Microtransit Service in Denver",
        location: "Denver Regional Transportation District",
        description: "The largest microtransit program in the U.S. pre-pandemic, encompassing 23 service zones and providing 2000 rides daily with just 45 vehicles.",
        image: "/MobilityDR.png",
        results: [
          "15 first/last mile service zones",
          "8 local community service zones",
          "Integrated school transportation service",
          "Fully automated scheduling and dispatching"
        ]
      },
      {
        title: "Vamos Mobility Platform in Stockton",
        location: "San Joaquin Council of Governments",
        description: "Comprehensive MaaS platform connecting residents with affordable and clean transportation options across multiple counties.",
        image: "/Kyyti MaaS Platform   Solutions -2025-02-28 at 11.17..png",
        results: [
          "Integrated multiple transit services",
          "Mobile ticketing implementation",
          "Uber integration with subsidies",
          "EV car share integration"
        ]
      },
      {
        title: "NEORide Multi-Agency Integration",
        location: "Ohio, Kentucky, Michigan, West Virginia, Arkansas",
        description: "Coordinating 18 public transit agencies across five states through innovative technology solutions.",
        image: "/Trip Exchange.png",
        results: [
          "Automated trip referrals",
          "Cross-agency coordination",
          "Seamless customer experience",
          "Enhanced resource utilization"
        ]
      }
    ];
  }
  
  private async fetchTeamMembers(): Promise<TeamMember[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    return [
      {
        name: "Roger Teal",
        title: "Founder and President",
        bio: "Roger has 40 years of professional experience in transportation and is internationally recognized for his expertise in demand-responsive service. An MIT-trained civil engineer, he left his tenured faculty position at UC Irvine to follow his entrepreneurial dreams.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Todd Voirol",
        title: "Chief Technology Officer",
        bio: "Todd is a software designer and developer with 20 years of experience in full life-cycle programming. He is the chief software architect for the MobilityDR platform and the Trip Exchange.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      },
      {
        name: "Jeff Becker",
        title: "Senior Consultant",
        bio: "Jeff provides clients with extensive transit planning and operations expertise. He conceived and designed the Denver RTD's FlexRide program—the largest microtransit deployment pre-pandemic.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
      }
    ];
  }
}

// Create a singleton instance
const dataService = new DataService();

export default dataService;