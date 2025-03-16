import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Award,
  BookOpen,
  Building2,
  GraduationCap,
  Users
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

const About = () => {
  const team = [
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

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-enterprise-primary to-enterprise-primary-dark text-white py-20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading">About DemandTrans</h1>
              <p className="text-xl text-gray-300 mb-8">
                Transforming transit operations since 1964 with innovative technology solutions and deep industry expertise.
              </p>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Our History</h2>
              <p className="text-gray-600">
                DemandTrans Solutions stands out among its competitors for its decades-long track record of success. Established in 1964, we've developed resource scheduling systems for major clients including the World Bank, British Telecom, and the American Hospital Association. Since 2010, we've focused on building solutions for the evolving surface transportation space, with a particular commitment to public on-demand and demand-responsive services.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {[
                {
                  icon: <Building2 />,
                  title: "Founded",
                  value: "1964",
                  description: "Established with a vision for innovation"
                },
                {
                  icon: <Users />,
                  title: "Clients Served",
                  value: "100+",
                  description: "Transit agencies and organizations"
                },
                {
                  icon: <GraduationCap />,
                  title: "Experience",
                  value: "50+ Years",
                  description: "In transportation technology"
                },
                {
                  icon: <Award />,
                  title: "Recognition",
                  value: "Industry Leader",
                  description: "In demand-responsive solutions"
                }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 mx-auto mb-4 text-enterprise-accent">
                    {stat.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-enterprise-primary font-heading">{stat.title}</h3>
                  <p className="text-2xl font-bold text-enterprise-accent mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Our Leadership Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the experts behind DemandTrans' innovative solutions. Our leadership team brings decades of combined experience in transportation technology and operations.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-enterprise-primary font-heading">{member.name}</h3>
                    <p className="text-enterprise-accent font-medium mb-4">{member.title}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6 text-enterprise-primary font-heading">Our Values</h2>
              <p className="text-gray-600">
                At DemandTrans, our values guide everything we do. We're committed to innovation, excellence, and creating positive impact in the communities we serve.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BookOpen />,
                  title: "Expertise",
                  description: "Decades of experience in DRT and flexible mobility services for local transportation."
                },
                {
                  icon: <Users />,
                  title: "Collaboration",
                  description: "We listen to our clients and design tailored technology solutions through transparent communication."
                },
                {
                  icon: <Award />,
                  title: "Excellence",
                  description: "Commitment to delivering high-quality, innovative solutions that exceed expectations."
                }
              ].map((value, index) => (
                <div key={index} className="p-6 rounded-xl border border-gray-100 hover:border-enterprise-accent transition-all bg-white shadow-sm hover:shadow-md">
                  <div className="w-12 h-12 text-enterprise-accent mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-enterprise-primary font-heading">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
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
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-heading">Ready to transform your transit operations?</h2>
                  <p className="text-white/90 text-lg mb-6">
                    Schedule a personalized demo to see our solutions in action and discover how they can benefit your organization.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="#" className="bg-white text-enterprise-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-block">
                      Schedule a Demo
                    </a>
                    <a href="/roi-calculator" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2 font-medium">
                      Calculate ROI <Award className="w-5 h-5" />
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

export default About;