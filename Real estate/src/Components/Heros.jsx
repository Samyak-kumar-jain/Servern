import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
          Find Your Dream Home
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Discover exceptional properties with premium amenities and stunning locations. 
          Your perfect home awaits in our curated collection of luxury real estate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            onClick={() => scrollToSection('properties')}
            size="lg"
            className="bg-blue-600 hover:bg-primary/90  px-8 py-4 text-lg rounded-full  transition-all duration-200 hover:scale-105"
          >
            Explore Properties
          </Button>
          <Button 
            onClick={() => scrollToSection('about')}
            variant="outline" 
            size="lg"
            className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg rounded-full transition-all duration-200"
          >
            Learn More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Premium Properties</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection('properties')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float"
      >
        <ArrowDown className="h-8 w-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
