import React, { useEffect } from 'react';
import AnimatedSection from '../components/common/AnimatedSection';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorDisplay from '../components/common/ErrorDisplay';
import { ArrowRight } from 'lucide-react';
import { useSuccessStories } from '../controllers/SuccessStoryController';

const SuccessStories = () => {
  const { stories, loading, error } = useSuccessStories();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Show loading state
  if (loading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <ErrorDisplay error={error} className="max-w-lg" />
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-enterprise-primary to-enterprise-primary-dark text-white py-20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">Success Stories</h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover how we've helped transit agencies transform their operations and enhance customer experience.
              </p>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {stories.map((story, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div className="h-64 md:h-full relative overflow-hidden">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                    <div className={`p-8 md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <div className="uppercase tracking-wide text-sm text-enterprise-accent font-semibold">{story.location}</div>
                      <h2 className="mt-1 text-2xl font-bold text-enterprise-primary font-heading">{story.title}</h2>
                      <p className="mt-4 text-gray-600">{story.description}</p>
                      
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-enterprise-primary mb-3 font-heading">Key Results</h3>
                        <ul className="space-y-2">
                          {story.results.map((result, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-gray-700">
                              <div className="w-2 h-2 bg-enterprise-accent rounded-full flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mt-8">
                        <a href="#" className="inline-flex items-center text-enterprise-accent hover:gap-2 transition-all font-medium">
                          Read Full Case Study <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-enterprise-primary to-enterprise-accent rounded-xl overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="p-8 md:p-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-heading">Ready to become our next success story?</h2>
                  <p className="text-white/90 text-lg mb-6">
                    Schedule a personalized demo to see how our solutions can transform your transit operations.
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
                    src="/MobilityDR.png" 
                    alt="MobilityDR Platform" 
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

export default SuccessStories;