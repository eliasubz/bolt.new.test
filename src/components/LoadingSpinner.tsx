import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <Loader2 className="animate-spin h-8 w-8 text-blue-500" />
    </div>
  );
};

export default LoadingSpinner;