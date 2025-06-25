import React from 'react';

const About: React.FC = () => {
  return (
    <>
      {/* Hero Banner */}
      <div className="relative h-96">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg" 
            alt="Farm fields" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <h1 className="text-white font-serif mb-4">Our Story</h1>
            <p className="text-white/90 text-lg max-w-2xl">
              Learn about our journey, values, and commitment to providing the freshest produce while supporting sustainable farming practices.
            </p>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="lg:flex items-center gap-12">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                At Farm Fresh Hub, our mission is to reconnect people with the source of their food by providing the freshest, most nutritious produce while using sustainable farming practices that protect our planet for future generations.
              </p>
              <p className="text-gray-700 mb-4">
                We believe everyone deserves access to high-quality, nutritious food that's grown with care for both people and the environment. That's why we grow all our produce using organic methods, avoiding synthetic pesticides and fertilizers.
              </p>
              <p className="text-gray-700">
                By choosing Farm Fresh Hub, you're not just getting the best-tasting, most nutritious food – you're supporting a system that values farmers, communities, and the environment.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg" 
                alt="Farmers in the field" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg" 
                  alt="Sustainability" 
                  className="w-10 h-10 object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We implement farming practices that preserve and enhance natural resources, from soil health to water conservation. Our commitment to sustainability extends to our packaging, which is 100% compostable or recyclable.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/4911711/pexels-photo-4911711.jpeg" 
                  alt="Community" 
                  className="w-10 h-10 object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600">
                We believe in building strong relationships with our local community. We support local initiatives, provide educational farm tours, and donate surplus produce to food banks and community kitchens.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="bg-primary-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/867349/pexels-photo-867349.jpeg" 
                  alt="Transparency" 
                  className="w-10 h-10 object-cover rounded"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-gray-600">
                We believe you have the right to know exactly how your food is grown. We're open about our farming methods and welcome questions. Visit our farm to see firsthand how we grow the food that ends up on your table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-serif font-bold text-gray-800 text-center mb-12">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 relative inline-block">
                <img 
                  src="https://images.pexels.com/photos/2382695/pexels-photo-2382695.jpeg" 
                  alt="James Wilson" 
                  className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-primary-100"
                />
              </div>
              <h3 className="text-xl font-bold">Sridhar</h3>
              <p className="text-primary-600 font-medium mb-2">Founder & Head Farmer</p>
              <p className="text-gray-600 px-4">
                With over 20 years of farming experience, James started Farm Fresh Hub with a vision to bring sustainable agriculture to the community.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="https://images.pexels.com/photos/3756761/pexels-photo-3756761.jpeg" 
                  alt="Maria Rodriguez" 
                  className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-primary-100"
                />
              </div>
              <h3 className="text-xl font-bold">Harish</h3>
              <p className="text-primary-600 font-medium mb-2">Operations Manager</p>
              <p className="text-gray-600 px-4">
                Maria ensures everything runs smoothly from harvest to delivery. Her attention to detail guarantees you receive only the best produce.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mb-4">
                <img 
                  src="https://images.pexels.com/photos/5212688/pexels-photo-5212688.jpeg" 
                  alt="David Chen" 
                  className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-primary-100"
                />
              </div>
              <h3 className="text-xl font-bold">David Chen</h3>
              <p className="text-primary-600 font-medium mb-2">Agricultural Specialist</p>
              <p className="text-gray-600 px-4">
                David's expertise in sustainable farming methods has helped us implement innovative practices that protect our land while growing exceptional produce.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;