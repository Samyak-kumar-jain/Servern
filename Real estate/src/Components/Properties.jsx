import React from 'react';
import PropertyCard from './PropertyCard';
import { properties } from '../Data/properties';

const Properties = () => {
  return (
    <section id="properties" className="py-20  bg-gray-50 " >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text text-blue-400">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium properties, each offering 
            unique features and exceptional value in prime locations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div 
              key={property.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
