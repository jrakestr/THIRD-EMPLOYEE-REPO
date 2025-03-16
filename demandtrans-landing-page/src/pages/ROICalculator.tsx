import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowRight, 
  Calculator, 
  DollarSign, 
  LineChart, 
  TrendingDown,
  Map
} from 'lucide-react';
import ROICalculatorComponent from '../components/ROICalculator';
import ServiceAreaVisualizer from '../components/ServiceAreaVisualizer';
import ParallaxHero from '../components/ParallaxHero';

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

const ROICalculatorPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <ParallaxHero 
        title="Interactive Transit Tools"
        subtitle="Estimate your potential savings and visualize service improvements with our interactive tools."
        primaryButtonText="Calculate ROI"
        primaryButtonLink="#roi-calculator"
        secondaryButtonText="Visualize Service Area"
        secondaryButtonLink="#service-visualizer"
        secondaryButtonIcon={<Map className="w-5 h-5" />}
        imageUrl="/MobilityDR.png"
      />

      {/* Calculator Section */}
      <section id="roi-calculator" className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Transit ROI Calculator</h2>
              <p className="text-xl text-gray-600 mb-8">
                Estimate your potential savings and return on investment with DemandTrans solutions.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="max-w-5xl mx-auto">
              <ROICalculatorComponent />
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Service Area Visualizer Section */}
      <section id="service-visualizer" className="py-16 md:py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Service Area Visualizer</h2>
              <p className="text-xl text-gray-600 mb-8">
                Visualize potential coverage improvements and service optimization with our interactive map tool.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <div className="max-w-5xl mx-auto">
              <ServiceAreaVisualizer />
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">How Our Solutions Drive ROI</h2>
              <p className="text-xl text-gray-600 mb-8">
                DemandTrans solutions deliver measurable financial benefits through multiple efficiency improvements.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingDown className="w-6 h-6" />,
                  title: "Reduced Operating Costs",
                  description: "Optimize routes and schedules to reduce deadhead miles and improve vehicle utilization, cutting fuel and maintenance costs."
                },
                {
                  icon: <LineChart className="w-6 h-6" />,
                  title: "Increased Productivity",
                  description: "Serve more riders with the same resources through intelligent trip grouping and real-time optimization."
                },
                {
                  icon: <DollarSign className="w-6 h-6" />,
                  title: "Lower Cost Per Trip",
                  description: "Our clients typically see a 20-30% reduction in cost per trip after implementing our solutions."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-enterprise-accent hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-enterprise-accent/10 rounded-lg flex items-center justify-center mb-4 text-enterprise-accent">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-enterprise-primary font-heading">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-enterprise-primary to-enterprise-accent rounded-xl overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-heading">Ready for a Detailed Analysis?</h2>
                  <p className="text-white/90 text-lg mb-6">
                    Contact our team for a personalized ROI analysis based on your specific operational data.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="bg-white text-enterprise-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-block">
                      Schedule a Consultation
                    </a>
                    <a href="#" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2 font-medium">
                      Request Demo <ArrowRight className="w-5 h-5" />
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

export default ROICalculatorPage;