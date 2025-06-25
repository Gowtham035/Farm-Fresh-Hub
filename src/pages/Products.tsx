import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/products/ProductCard';
import CategoryFilter from '../components/ui/CategoryFilter';
import { getProductsByCategory, products } from '../data/products';
import { Product, ProductCategory } from '../types/product';
import { Leaf, Search } from 'lucide-react';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as ProductCategory) || 'all';
  
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(initialCategory);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Calculate products count per category
  const categoryCounts = {
    all: products.length,
    vegetables: getProductsByCategory('vegetables').length,
    fruits: getProductsByCategory('fruits').length,
    herbs: getProductsByCategory('herbs').length,
    dairy: getProductsByCategory('dairy').length,
  };

  // Update filtered products when category or search changes
  useEffect(() => {
    // First filter by category
    let result = activeCategory === 'all' ? 
      products : 
      getProductsByCategory(activeCategory);
    
    // Then filter by search term if it exists
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(term) || 
        product.description.toLowerCase().includes(term)
      );
    }
    
    setFilteredProducts(result);
    
    // Update URL params
    if (activeCategory === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', activeCategory);
    }
    setSearchParams(searchParams);
  }, [activeCategory, searchTerm, searchParams]);

  const handleCategoryChange = (category: ProductCategory) => {
    setActiveCategory(category);
    // Reset search when changing category
    setSearchTerm('');
  };

  return (
    <>
      {/* Header Banner */}
      <div className="relative h-80">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/95425/pexels-photo-95425.jpeg" 
            alt="Fresh produce" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom">
            <div className="max-w-xl">
              <h1 className="text-white font-serif mb-4">Our Products</h1>
              <p className="text-white/90 text-lg">
                Browse our selection of fresh, seasonal produce straight from our farm to your table.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="section bg-white">
        <div className="container-custom">
          {/* Search and Filter Container */}
          <div className="mb-8">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-gray-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <CategoryFilter 
              activeCategory={activeCategory} 
              onCategoryChange={handleCategoryChange}
              counts={categoryCounts}
            />
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="flex justify-center mb-4">
                <Leaf className="h-12 w-12 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-gray-600">
                {searchTerm ? 
                  `We couldn't find any products matching "${searchTerm}". Try another search term or browse by category.` :
                  `We don't have any ${activeCategory} products at the moment. Check back soon!`
                }
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;