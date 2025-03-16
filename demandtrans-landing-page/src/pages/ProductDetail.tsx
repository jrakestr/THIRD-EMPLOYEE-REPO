import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
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
import BrandedButton from '../components/BrandedButton';
import AnimatedSection from '../components/common/AnimatedSection';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorDisplay from '../components/common/ErrorDisplay';
import { useProduct } from '../controllers/ProductController';
import { getIcon } from '../utils/IconMapper';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  // Use the controller to fetch product data
  const { product, loading, error } = useProduct(productId);

  // Memoized function to toggle FAQ
  const toggleFaq = useCallback((index: number) => {
    setExpandedFaq(prevIndex => prevIndex === index ? null : index);
  }, []);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

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

  // Show not found state
  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-enterprise-primary mb-4 font-heading">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist or has been moved.</p>
          <Link to="/products" className="bg-enterprise-accent text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
            View All Products
          </Link>
        </div>
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
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">{product.title}</h1>
                  <p className="text-xl text-gray-300 mb-6">{product.subtitle}</p>
                  <p className="text-gray-300 mb-8">{product.description}</p>
                  <div className="flex flex-wrap gap-4">
                    <BrandedButton variant="primary" className="bg-white text-enterprise-primary">
                      Schedule a Demo
                    </BrandedButton>
                    <BrandedButton variant="accent" className="bg-enterprise-accent flex items-center gap-2">
                      Download Brochure <Download className="w-4 h-4" />
                    </BrandedButton>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="relative overflow-hidden rounded-lg shadow-2xl">
                    <img 
                      src={product.heroImage} 
                      alt={product.title} 
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-20 z-30">
        <div className="container mx-auto px-6">
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
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Key Features</h2>
                <p className="text-gray-600">
                  {product.title} provides a comprehensive set of features designed to transform your transit operations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {product.keyFeatures.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-enterprise-accent hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-enterprise-accent/10 rounded-lg flex items-center justify-center mb-4 text-enterprise-accent">
                      {getIcon(feature.icon)}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-enterprise-primary font-heading">
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
                <div className="bg-gray-50 rounded-xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-6 text-enterprise-primary font-heading">Related Solutions</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.relatedSolutions.map((solution, index) => (
                      <Link 
                        key={index}
                        to={`/solutions/${solution}`}
                        className="inline-flex items-center rounded-full bg-enterprise-accent/10 px-3 py-1 text-sm font-medium text-enterprise-accent hover:bg-enterprise-accent/20 transition-colors"
                      >
                        {solution}
                      </Link>
                    ))}
                  </div>
                  <p className="text-gray-600">
                    {product.title} is used in various transit solutions. Click on the tags above to learn more about each solution.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {activeTab === 'features' && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Features & Benefits</h2>
                <p className="text-gray-600">
                  Discover how {product.title} can transform your transit operations with these powerful features.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid lg:grid-cols-2 gap-12 mb-20">
                <div>
                  <img 
                    src={product.screenshots[0].image}
                    alt="Feature Highlight"
                    className="rounded-xl shadow-xl mb-8"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-enterprise-primary font-heading">Intelligent Routing & Scheduling</h3>
                  <p className="text-gray-600 mb-6">
                    Our advanced algorithms continuously optimize routes and schedules based on real-time conditions, historical patterns, and current demand. This results in shorter wait times, more efficient vehicle utilization, and improved service reliability.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Real-time traffic integration",
                      "Historical demand pattern analysis",
                      "Continuous route optimization",
                      "Automated schedule adjustments"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1">
                          <Check className="w-5 h-5 text-enterprise-accent" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img 
                    src={product.screenshots[1].image}
                    alt="Feature Highlight"
                    className="rounded-xl shadow-xl mb-8"
                  />
                  <h3 className="text-2xl font-bold mb-4 text-enterprise-primary font-heading">Intuitive User Interfaces</h3>
                  <p className="text-gray-600 mb-6">
                    Our platform provides tailored interfaces for each user role, from dispatchers and administrators to drivers and riders. Each interface is designed for maximum efficiency and ease of use, reducing training time and improving productivity.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Role-based dashboards",
                      "Mobile-optimized interfaces",
                      "Customizable layouts",
                      "Accessibility-compliant design"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1">
                          <Check className="w-5 h-5 text-enterprise-accent" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-r from-enterprise-primary to-enterprise-accent rounded-xl p-8 md:p-12 text-white">
                  <h3 className="text-2xl font-bold mb-6 font-heading">Ready to see these features in action?</h3>
                  <p className="text-white/90 mb-8">
                    Schedule a personalized demo to see how {product.title} can transform your transit operations.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <BrandedButton variant="primary" className="bg-white text-enterprise-primary">
                      Schedule a Demo
                    </BrandedButton>
                    <BrandedButton variant="accent" className="bg-transparent border-2 border-white text-white hover:bg-white/10 flex items-center gap-2">
                      Download Brochure <Download className="w-5 h-5" />
                    </BrandedButton>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {activeTab === 'screenshots' && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Platform Screenshots</h2>
                <p className="text-gray-600">
                  Get a closer look at the {product.title} interface and features.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {product.screenshots.map((screenshot, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
                    <div className="relative overflow-hidden">
                      <img 
                        src={screenshot.image} 
                        alt={screenshot.caption}
                        className="w-full h-64 object-cover transition-transform hover:scale-105 duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700">{screenshot.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {activeTab === 'specs' && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Technical Specifications</h2>
                <p className="text-gray-600">
                  Detailed technical information about the {product.title} platform.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <div className="w-12 h-12 bg-enterprise-accent/10 rounded-lg flex items-center justify-center mb-6 text-enterprise-accent">
                      <Cloud className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-enterprise-primary font-heading">Deployment Options</h3>
                    <ul className="space-y-3">
                      {product.technicalSpecs.deployment.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1">
                            <Check className="w-5 h-5 text-enterprise-accent" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <div className="w-12 h-12 bg-enterprise-accent/10 rounded-lg flex items-center justify-center mb-6 text-enterprise-accent">
                      <Server className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-enterprise-primary font-heading">Integration Capabilities</h3>
                    <ul className="space-y-3">
                      {product.technicalSpecs.integration.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1">
                            <Check className="w-5 h-5 text-enterprise-accent" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <div className="w-12 h-12 bg-enterprise-accent/10 rounded-lg flex items-center justify-center mb-6 text-enterprise-accent">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-enterprise-primary font-heading">Security & Compliance</h3>
                    <ul className="space-y-3">
                      {product.technicalSpecs.security.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1">
                            <Check className="w-5 h-5 text-enterprise-accent" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                    <div className="w-12 h-12 bg-enterprise-accent/10 rounded-lg flex items-center justify-center mb-6 text-enterprise-accent">
                      <Laptop className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-enterprise-primary font-heading">System Requirements</h3>
                    <ul className="space-y-3">
                      {product.technicalSpecs.requirements.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1">
                            <Check className="w-5 h-5 text-enterprise-accent" />
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="max-w-3xl mx-auto mt-16">
                <div className="bg-gray-50 rounded-xl p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-6 text-enterprise-primary font-heading">Technical Documentation</h3>
                  <p className="text-gray-600 mb-8">
                    Access detailed technical documentation for the {product.title} platform.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <a href="#" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-enterprise-accent transition-all">
                      <FileText className="w-6 h-6 text-enterprise-accent" />
                      <div>
                        <p className="font-semibold text-enterprise-primary">API Documentation</p>
                        <p className="text-sm text-gray-500">PDF, 2.4 MB</p>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-enterprise-accent transition-all">
                      <FileText className="w-6 h-6 text-enterprise-accent" />
                      <div>
                        <p className="font-semibold text-enterprise-primary">Integration Guide</p>
                        <p className="text-sm text-gray-500">PDF, 1.8 MB</p>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-enterprise-accent transition-all">
                      <FileText className="w-6 h-6 text-enterprise-accent" />
                      <div>
                        <p className="font-semibold text-enterprise-primary">Security Whitepaper</p>
                        <p className="text-sm text-gray-500">PDF, 3.2 MB</p>
                      </div>
                    </a>
                    <a href="#" className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-enterprise-accent transition-all">
                      <FileText className="w-6 h-6 text-enterprise-accent" />
                      <div>
                        <p className="font-semibold text-enterprise-primary">System Requirements</p>
                        <p className="text-sm text-gray-500">PDF, 1.1 MB</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {activeTab === 'case-studies' && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Case Studies</h2>
                <p className="text-gray-600">
                  See how transit agencies are transforming their operations with {product.title}.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid md:grid-cols-2 gap-8">
                {product.caseStudy.map((caseStudy, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-enterprise-accent transition-all">
                    <h3 className="text-xl font-bold mb-4 text-enterprise-primary font-heading">
                      {caseStudy.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {caseStudy.description}
                    </p>
                    <a href={caseStudy.link} className="inline-flex items-center text-enterprise-accent hover:gap-2 transition-all">
                      Read Case Study <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="max-w-3xl mx-auto mt-16">
                <div className="bg-gradient-to-r from-enterprise-primary to-enterprise-accent rounded-xl p-8 md:p-12 text-white">
                  <h3 className="text-2xl font-bold mb-6 font-heading">Want to be our next success story?</h3>
                  <p className="text-white/90 mb-8">
                    Contact our team to discuss how {product.title} can transform your transit operations.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <BrandedButton variant="primary" className="bg-white text-enterprise-primary">
                      Contact Sales
                    </BrandedButton>
                    <BrandedButton variant="accent" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                      Schedule a Demo
                    </BrandedButton>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {activeTab === 'faq' && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Frequently Asked Questions</h2>
                <p className="text-gray-600">
                  Find answers to common questions about {product.title}.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="max-w-3xl mx-auto">
                <div className="space-y-4">
                  {product.faqs.map((faq, index) => (
                    <div 
                      key={index} 
                      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                    >
                      <button 
                        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                        onClick={() => toggleFaq(index)}
                      >
                        <span className="font-semibold text-enterprise-primary">{faq.question}</span>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-enterprise-accent" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-enterprise-accent" />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="mt-16 bg-gradient-to-r from-enterprise-primary to-enterprise-accent rounded-xl p-8 md:p-12 text-white">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-bold mb-6 font-heading">Still Have Questions?</h3>
                  <p className="text-white/90 mb-8">
                    Our team is ready to help you understand how {product.title} can transform your transit operations.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <BrandedButton variant="primary" className="bg-white text-enterprise-primary">
                      Contact Sales
                    </BrandedButton>
                    <BrandedButton variant="accent" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                      Schedule a Demo
                    </BrandedButton>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Sticky Request Demo Button */}
      <RequestDemoButton />
    </div>
  );
};

export default ProductDetail;