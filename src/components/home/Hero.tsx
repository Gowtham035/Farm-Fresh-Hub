import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/5913679/pexels-photo-5913679.jpeg"
          alt="Farm fresh produce"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-lg animate-slide-up">
          <span className="inline-block bg-primary-500 text-white font-medium px-4 py-1 rounded-full text-sm mb-4">
            100% Organic Produce
          </span>
          <h1 className="text-white mb-6 leading-tight">
            From Our Farm <br />Fresh to Your Table
          </h1>
          <p className="text-white/90 text-lg mb-8">
            Discover the taste of locally grown, seasonal produce delivered directly to your doorstep. Support sustainable farming and enjoy the freshest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/products" 
              className="btn btn-primary flex items-center justify-center"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about" 
              className="btn btn-outline border-white text-white hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;