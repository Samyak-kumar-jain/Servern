import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg">
      <div className="relative overflow-hidden">
        <img 
          src={property.image} 
          alt={property.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {property.type}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-blue-600 group-hover:transition-colors">
          {property.name}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {property.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-primary">
            {property.price}
          </div>
          <div className="text-sm text-gray-500">
            {property.bedrooms} bed • {property.bathrooms} bath • {property.area}
          </div>
        </div>
        
        <Button 
          onClick={handleViewDetails}
          className="w-full bg-blue-600 hover:bg-primary/90 text-white transition-all duration-200 hover:scale-105"
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
