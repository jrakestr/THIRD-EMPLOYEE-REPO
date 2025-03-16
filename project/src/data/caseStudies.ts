import { CaseStudy } from '../models/DataModels';

export interface DetailedCaseStudy extends CaseStudy {
  id: string;
  clientName: string;
  location: string;
  clientType: string;
  product: string;
  solution: string;
  results: {
    key: string;
    value: string;
    description: string;
  }[];
  fullDescription: string;
  implementationTime: string;
  tags: string[];
  heroImage: string;
}

// Centralized repository of all case studies
export const caseStudies: Record<string, DetailedCaseStudy> = {
  "denver-rtd": {
    id: "denver-rtd",
    title: "Denver RTD FlexRide",
    description: "Implementation of MobilityDR for Denver's extensive microtransit service, resulting in 30% cost reduction and 25% increase in ridership.",
    link: "/impact/denver-rtd",
    clientName: "Denver Regional Transportation District",
    location: "Denver, Colorado",
    clientType: "Transit Agency",
    product: "MobilityDR Platform",
    solution: "Demand-Responsive Transportation",
    results: [
      {
        key: "22%",
        value: "Cost Reduction",
        description: "Reduced operational costs through optimized routing and scheduling"
      },
      {
        key: "45",
        value: "Vehicles Optimized",
        description: "Deployment across the RTD fleet"
      },
      {
        key: "35%",
        value: "Improved On-Time",
        description: "Enhanced on-time performance through real-time adjustments"
      },
      {
        key: "90",
        value: "Day Implementation",
        description: "Complete implementation timeline"
      }
    ],
    fullDescription: "Denver RTD partnered with DemandTrans to transform their demand-responsive services across 23 service zones, serving thousands of daily riders with increased efficiency. The implementation included full-scale deployment of the MobilityDR platform, driver training, and integration with existing RTD systems.",
    implementationTime: "90 days",
    tags: ["microtransit", "cost-reduction", "service-optimization"],
    heroImage: "/MobilityDR.png"
  },
  "san-joaquin-rtd": {
    id: "san-joaquin-rtd",
    title: "San Joaquin RTD",
    description: "Deployment of MobilityDR for paratransit services, improving on-time performance from 85% to 97% while reducing cost per trip.",
    link: "/impact/san-joaquin-rtd",
    clientName: "San Joaquin Regional Transit District",
    location: "Stockton, California",
    clientType: "Transit Agency",
    product: "MobilityDR Platform",
    solution: "Paratransit & NEMT",
    results: [
      {
        key: "12%",
        value: "Cost Reduction",
        description: "Per-trip cost savings through optimization"
      },
      {
        key: "97%",
        value: "On-Time Performance",
        description: "Improved from initial 85% baseline"
      },
      {
        key: "18%",
        value: "Increased Productivity",
        description: "More trips per vehicle service hour"
      },
      {
        key: "120",
        value: "Day Implementation",
        description: "Complete implementation timeline"
      }
    ],
    fullDescription: "San Joaquin RTD implemented MobilityDR to enhance their paratransit operations, focusing on improving service quality while containing costs. The implementation included comprehensive training for schedulers and dispatchers, as well as integration with existing eligibility systems.",
    implementationTime: "120 days",
    tags: ["paratransit", "ada-compliance", "service-quality"],
    heroImage: "/MobilityDR.png"
  },
  "san-joaquin-vamos": {
    id: "san-joaquin-vamos",
    title: "Vamos Mobility in San Joaquin",
    description: "Implementation of Kyyti for San Joaquin COG's Vamos Mobility program, connecting multiple transit services across several counties.",
    link: "/impact/san-joaquin-vamos",
    clientName: "San Joaquin Council of Governments",
    location: "San Joaquin County, California",
    clientType: "Regional Planning Agency",
    product: "Kyyti MaaS Platform",
    solution: "Mobility as a Service",
    results: [
      {
        key: "7+",
        value: "Transit Providers",
        description: "Connected in a single platform"
      },
      {
        key: "40%",
        value: "Reduced Wait Times",
        description: "Through improved coordination between services"
      },
      {
        key: "18%",
        value: "Ridership Increase",
        description: "Growth since implementation"
      },
      {
        key: "60",
        value: "Day Implementation",
        description: "Complete implementation timeline"
      }
    ],
    fullDescription: "San Joaquin COG implemented our Kyyti MaaS platform to connect 7+ transit providers in a single interface, dramatically improving rider experience and inter-agency coordination. The platform integrates fixed-route, demand-responsive, and specialized transportation services across multiple counties.",
    implementationTime: "60 days",
    tags: ["maas", "multi-agency", "regional"],
    heroImage: "/Kyyti MaaS Platform   Solutions -2025-02-28 at 11.17..png"
  },
  "helsinki": {
    id: "helsinki",
    title: "Helsinki Regional Transport",
    description: "Deployment of Kyyti in Helsinki, integrating public transit, city bikes, e-scooters, and taxis into a single platform.",
    link: "/impact/helsinki",
    clientName: "Helsinki Regional Transport Authority",
    location: "Helsinki, Finland",
    clientType: "Transit Authority",
    product: "Kyyti MaaS Platform",
    solution: "Mobility as a Service",
    results: [
      {
        key: "6",
        value: "Transport Modes",
        description: "Integrated in a single platform"
      },
      {
        key: "24%",
        value: "Transit Usage Increase",
        description: "Growth in public transit ridership"
      },
      {
        key: "30%",
        value: "Improved Satisfaction",
        description: "Increase in customer satisfaction scores"
      },
      {
        key: "90",
        value: "Day Implementation",
        description: "Complete implementation timeline"
      }
    ],
    fullDescription: "Helsinki Regional Transport Authority implemented Kyyti to create a seamless mobility ecosystem in the Helsinki metropolitan area. The platform integrates traditional public transit with newer mobility options including city bikes, e-scooters, and ride-hailing services.",
    implementationTime: "90 days",
    tags: ["maas", "urban", "multi-modal"],
    heroImage: "/Kyyti MaaS Platform   Solutions -2025-02-28 at 11.17..png"
  },
  "neoride": {
    id: "neoride",
    title: "NEORide EZ Connect",
    description: "Implementation of Trip Exchange for NEORide's five-state coordinated services network, enabling seamless cross-boundary transportation.",
    link: "/impact/neoride",
    clientName: "NEORide",
    location: "Multiple States, Midwest US",
    clientType: "Transit Consortium",
    product: "Trip Exchange & Dynamic Translator",
    solution: "Regional Coordination",
    results: [
      {
        key: "18",
        value: "Transit Agencies",
        description: "Connected across five states"
      },
      {
        key: "22%",
        value: "Reduced Deadhead",
        description: "Through cross-boundary coordination"
      },
      {
        key: "15%",
        value: "Cost Reduction",
        description: "Through resource sharing"
      },
      {
        key: "180",
        value: "Day Implementation",
        description: "Complete implementation timeline"
      }
    ],
    fullDescription: "NEORide implemented our Trip Exchange platform to create a coordinated transportation network across 18 transit agencies in five states. The implementation enabled cross-boundary services while allowing each agency to maintain its operational independence.",
    implementationTime: "180 days",
    tags: ["regional", "multi-agency", "coordination"],
    heroImage: "/Trip Exchange.png"
  },
  "chicago-pace": {
    id: "chicago-pace",
    title: "Chicago Pace SCR Optimization",
    description: "Implementation of OptiRun for Pace's ADA paratransit services, resulting in over $1 million annual cost savings.",
    link: "/impact/chicago-pace",
    clientName: "Pace Suburban Bus",
    location: "Chicago Metropolitan Area, Illinois",
    clientType: "Transit Agency",
    product: "OptiRun",
    solution: "Route Optimization",
    results: [
      {
        key: "$1M+",
        value: "Annual Savings",
        description: "Cost reduction in first year"
      },
      {
        key: "25%",
        value: "Reduced Empty Miles",
        description: "Through optimized routing"
      },
      {
        key: "75%",
        value: "Scheduling Time Reduction",
        description: "Through automated optimization"
      },
      {
        key: "120",
        value: "Day Implementation",
        description: "Complete implementation timeline"
      }
    ],
    fullDescription: "Pace Suburban Bus implemented OptiRun to optimize their ADA paratransit operations in the Chicago metropolitan area. The system's advanced algorithms significantly reduced empty vehicle miles and streamlined the scheduling process.",
    implementationTime: "120 days",
    tags: ["paratransit", "optimization", "cost-reduction"],
    heroImage: "/OptiRun.png"
  },
  "la-metro": {
    id: "la-metro",
    title: "LA Metro MicroTransit",
    description: "Implementation of zone-based microtransit service in Los Angeles, providing first/last mile connections to major transit hubs.",
    link: "/impact/la-metro",
    clientName: "Los Angeles Metropolitan Transportation Authority",
    location: "Los Angeles, California",
    clientType: "Transit Agency",
    product: "MobilityDR Platform",
    solution: "First Mile/Last Mile",
    results: [
      {
        key: "6",
        value: "Service Zones",
        description: "Implemented across LA County"
      },
      {
        key: "28%",
        value: "Fixed-Route Connections",
        description: "Percentage of trips connecting to fixed-route"
      },
      {
        key: "32%",
        value: "New Transit Users",
        description: "First-time transit users"
      },
      {
        key: "150",
        value: "Day Implementation",
        description: "Complete implementation timeline"
      }
    ],
    fullDescription: "LA Metro implemented our MobilityDR platform to create a flexible microtransit service focused on first/last mile connections to major transit hubs. The service has been particularly successful in attracting new transit users who previously relied on private vehicles.",
    implementationTime: "150 days",
    tags: ["microtransit", "first-mile-last-mile", "urban"],
    heroImage: "/MobilityDR.png"
  },
  "trimet": {
    id: "trimet",
    title: "TriMet Flexible Services",
    description: "Deployment of on-demand service in Portland suburbs, increasing transit access while reducing operational costs.",
    link: "/impact/trimet",
    clientName: "TriMet",
    location: "Portland Metropolitan Area, Oregon",
    clientType: "Transit Agency",
    product: "MobilityDR Platform",
    solution: "Demand-Responsive Transportation",
    results: [
      {
        key: "4",
        value: "Service Zones",
        description: "Covering suburban communities"
      },
      {
        key: "18%",
        value: "Cost Reduction",
        description: "Compared to previous fixed-route service"
      },
      {
        key: "24%",
        value: "Coverage Increase",
        description: "Expanded service area coverage"
      },
      {
        key: "90",
        value: "Day Implementation",
        description: "Complete implementation timeline"
      }
    ],
    fullDescription: "TriMet replaced underperforming fixed routes in suburban areas with flexible, on-demand service using the MobilityDR platform. The implementation has successfully expanded service coverage while reducing operational costs.",
    implementationTime: "90 days",
    tags: ["microtransit", "suburban", "fixed-route-replacement"],
    heroImage: "/MobilityDR.png"
  }
};

// Helper function to get case studies by product
export const getCaseStudiesByProduct = (productId: string): DetailedCaseStudy[] => {
  return Object.values(caseStudies).filter(study => study.product.toLowerCase().includes(productId.toLowerCase()));
};

// Helper function to get case studies by solution
export const getCaseStudiesBySolution = (solutionId: string): DetailedCaseStudy[] => {
  return Object.values(caseStudies).filter(study => study.solution.toLowerCase().includes(solutionId.toLowerCase()));
};

// Helper function to get primary case studies for a product (limit to top 2)
export const getPrimaryCaseStudies = (productId: string): CaseStudy[] => {
  const matchingStudies = getCaseStudiesByProduct(productId);
  return matchingStudies.slice(0, 2).map(({ title, description, link }) => ({ title, description, link }));
};

export default caseStudies; 