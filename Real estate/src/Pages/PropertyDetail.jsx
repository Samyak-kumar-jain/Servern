import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, Home, MapPin } from "lucide-react";
import { properties } from '../Data/properties';
import LoadingSpinner from '@/components/LoadingSpinner';
import { useToast } from "@/hooks/use-toast";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      const foundProperty = properties.find(p => p.id === id);
      setProperty(foundProperty || null);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  const handleContactAgent = () => {
    if (property) {
      toast({
        title: "Contact Request Sent!",
        description: `We'll connect you with ${property.agent.name} shortly.`,
      });
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-8">The property you're looking for doesn't exist.</p>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold gradient-text">DreamHome</span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Back to Properties
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="pt-20">
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img 
            src={property.images[currentImageIndex]} 
            alt={property.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute bottom-8 left-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {property.name}
            </h1>
            <div className="flex items-center text-white text-lg">
              <MapPin className="h-5 w-5 mr-2" />
              {property.location}
            </div>
          </div>

          {/* Image Dots */}
          {property.images.length > 1 && (
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {property.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {/* Price */}
            <div className="animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="text-4xl font-bold text-primary mb-2 md:mb-0">
                  {property.price}
                </div>
                <div className="flex items-center space-x-6 text-gray-600">
                  <span>{property.bedrooms} Bedrooms</span>
                  <span>{property.bathrooms} Bathrooms</span>
                  <span>{property.area}</span>
                </div>
              </div>

              <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                {property.type}
              </div>
            </div>

            {/* Description */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Property</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {property.fullDescription}
              </p>
            </div>

            {/* Features */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors"
                  >
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`${property.name} - Image ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Agent Card */}
              <Card className="mb-8 shadow-lg animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Agent</h3>

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white text-lg font-bold">
                        {property.agent.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-800">{property.agent.name}</h4>
                    <p className="text-gray-600 text-sm">Licensed Real Estate Agent</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <span className="text-gray-600">📞</span>
                      <span className="ml-2 text-gray-700">{property.agent.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-600">✉️</span>
                      <span className="ml-2 text-gray-700">{property.agent.email}</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleContactAgent}
                    className="w-full bg-primary hover:bg-primary/90 text-white mb-3 transition-all duration-200 hover:scale-105"
                  >
                    Contact Agent
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Schedule Viewing
                  </Button>
                </CardContent>
              </Card>

              {/* Summary Card */}
              <Card className="shadow-lg animate-fade-in" style={{ animationDelay: '1s' }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Property Summary</h3>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property Type:</span>
                      <span className="font-medium">{property.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bedrooms:</span>
                      <span className="font-medium">{property.bedrooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bathrooms:</span>
                      <span className="font-medium">{property.bathrooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Area:</span>
                      <span className="font-medium">{property.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-bold text-primary">{property.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
