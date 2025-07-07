import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face",
      bio: "15+ years in luxury real estate"
    },
    {
      name: "Michael Chen",
      role: "Senior Agent",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face",
      bio: "Specialist in commercial properties"
    },
    {
      name: "Isabella Rodriguez",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop&crop=face",
      bio: "Expert in digital marketing strategies"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We maintain the highest standards in every aspect of our service"
    },
    {
      title: "Integrity",
      description: "Honest, transparent dealings in all our client relationships"
    },
    {
      title: "Innovation",
      description: "Embracing new technologies to enhance the buying experience"
    }
  ];

  return (
    <section id="about" className="py-12  px-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-blue-400">
            About DreamHome
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 15 years, we've been helping clients find their perfect homes 
            through personalized service and deep market expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold mb-6 text-blue-400">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At DreamHome, we believe that finding the perfect property should be an exciting 
              and seamless experience. Our mission is to connect discerning clients with 
              exceptional properties while providing unparalleled service throughout the journey.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We combine deep market knowledge with cutting-edge technology and personalized 
              attention to ensure every client finds not just a house, but their dream home.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=400&fit=crop" 
              alt="Modern architecture"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-600">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-4 text-primary">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-blue-600">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
