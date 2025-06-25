import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-24 px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <Leaf className="h-20 w-20 text-primary-500" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track!
        </p>
        <Link 
          to="/" 
          className="btn btn-primary inline-flex items-center"
        >
          <Home className="mr-2 h-5 w-5" />
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;