import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import ReviewsSection from '../components/home/ReviewsSection';
import CategoryCard from '../components/home/CategoryCard';
import { getProductsByCategory } from '../data/products';

const Home: React.FC = () => {
  // Calculate products count per category for display on category cards
  const categoryCounts = {
    vegetables: getProductsByCategory('vegetables').length,
    fruits: getProductsByCategory('fruits').length,
    herbs: getProductsByCategory('herbs').length,
    dairy: getProductsByCategory('dairy').length,
  };

  const categories = [
    {
      name: 'Vegetables',
      image: 'https://images.pexels.com/photos/2255903/pexels-photo-2255903.jpeg',
      count: categoryCounts.vegetables,
      slug: 'vegetables',
    },
    {
      name: 'Fruits',
      image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
      count: categoryCounts.fruits,
      slug: 'fruits',
    },
    {
      name: 'Herbs',
      image: 'https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg',
      count: categoryCounts.herbs,
      slug: 'herbs',
    },
    {
      name: 'Dairy Products',
      image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg',
      count: categoryCounts.dairy,
      slug: 'dairy',
    },
  ];

  return (
    <>
      <Hero />
      
      {/* Categories Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.slug}
                name={category.name}
                image={category.image}
                count={category.count}
                slug={category.slug}
              />
            ))}
          </div>
        </div>
      </section>

      <FeaturedProducts />

      {/* Value Proposition Section */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Why Choose Farm Fresh?</h2>
            <p className="text-gray-600">
              We're committed to bringing you the highest quality produce straight from our farms to your table.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/4505169/pexels-photo-4505169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Organic Farming" 
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Organic</h3>
              <p className="text-gray-600">
                Our farms use organic practices, free from synthetic pesticides and fertilizers.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1131774/pexels-photo-1131774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Fresh Produce" 
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Farm Fresh Daily</h3>
              <p className="text-gray-600">
                Produce is harvested at peak ripeness and delivered to you within 24 hours.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="bg-primary-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/2225534/pexels-photo-2225534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Local Support" 
                  className="w-10 h-10 object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Support Local</h3>
              <p className="text-gray-600">
                By choosing us, you're supporting local farmers and sustainable agriculture.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />
    </>
  );
};

export default Home;