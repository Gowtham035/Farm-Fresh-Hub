import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Leaf } from 'lucide-react';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = React.useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsAdding(true);
    addToCart(product);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  return (
    <div className="card group hover:shadow-lg">
      <Link to={`/products/${product.id}`} className="block">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.organic && (
              <span className="bg-primary-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                <Leaf className="h-3 w-3 mr-1" /> Organic
              </span>
            )}
            {product.featured && (
              <span className="bg-secondary-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Featured
              </span>
            )}
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-lg text-gray-900">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.unit}</p>
            </div>
            <div className="font-semibold text-lg text-primary-700">
              ${product.price.toFixed(2)}
            </div>
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm text-gray-600 capitalize">{product.category}</span>
            <button 
              onClick={handleAddToCart}
              className={`flex items-center space-x-1 text-sm font-medium rounded-full bg-primary-100 text-primary-700 hover:bg-primary-200 px-3 py-1.5 transition-all ${isAdding ? 'animate-pulse-once' : ''}`}
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;