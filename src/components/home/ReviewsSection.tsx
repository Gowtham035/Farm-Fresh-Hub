import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { reviews } from '../../data/reviews';

const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalReviews = reviews.length;
  const slideRef = useRef<HTMLDivElement>(null);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalReviews - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalReviews - 1 : prevIndex - 1
    );
  };

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-secondary-500 fill-secondary-500' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read testimonials from our satisfied customers who enjoy farm-fresh produce delivered to their doorstep.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel controls */}
          <button 
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Reviews carousel */}
          <div className="overflow-hidden">
            <div 
              ref={slideRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className="min-w-full p-4"
                >
                  <div className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-md">
                    <div className="flex items-center space-x-4 mb-4">
                      <img 
                        src={review.avatar} 
                        alt={review.name}
                        className="h-14 w-14 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{review.name}</h3>
                        <div className="flex mt-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic">{review.text}</p>
                    <p className="mt-4 text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;