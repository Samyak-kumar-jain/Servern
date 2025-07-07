import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 text-blue-400">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-primary mb-4"></div>
        <p className="text-lg text-gray-600">Loading property details...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
