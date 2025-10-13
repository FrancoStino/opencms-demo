import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <div className="w-8 h-8 border-2 border-gray-300 dark:border-gray-700 border-t-primary-600 rounded-full animate-spin mb-4"></div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Caricamento...
      </p>
    </div>
  );
};

export default LoadingSpinner;