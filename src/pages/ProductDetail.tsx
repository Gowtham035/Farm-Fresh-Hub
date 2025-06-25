import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Leaf, ShieldCheck, Truck } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { Product } from '../types/product';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const productData = getProductById(parseInt(id, 10));
      if (productData) {
        setProduct(productData);
      }
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    
    setIsAddingToCart(true);
    
    // Add to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 500);
  };

  if (!product) {
    return (
      <div className="container-custom py-32 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
        <Link to="/products" className="btn btn-primary">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-16">
      <div className="container-custom">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-primary-600 transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          <span>Back</span>
        </button>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Image */}
          <div className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-96 lg:h-[500px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.organic && (
                  <span className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
                    <Leaf className="h-3 w-3 mr-1" /> Organic
                  </span>
                )}
                {product.featured && (
                  <span className="bg-secondary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="lg:w-1/2">
            <div className="mb-2 flex items-center">
              <span className="text-sm font-medium px-3 py-1 bg-primary-100 text-primary-800 rounded-full capitalize">
                {product.category}
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-2">
              {product.name}
            </h1>
            
            <div className="text-2xl font-bold text-primary-700 mb-4">
              ${product.price.toFixed(2)} <span className="text-sm text-gray-500 font-normal">/ {product.unit}</span>
            </div>
            
            <p className="text-gray-700 mb-6">
              {product.description}
            </p>
            
            <div className="border-t border-gray-200 pt-6 mb-6">
              <div className="flex flex-wrap gap-y-4">
                <div className="w-full sm:w-1/2 flex items-center">
                  <ShieldCheck className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-gray-700">100% Satisfaction Guarantee</span>
                </div>
                <div className="w-full sm:w-1/2 flex items-center">
                  <Truck className="h-5 w-5 text-primary-600 mr-2" />
                  <span className="text-gray-700">Fast Delivery</span>
                </div>
              </div>
            </div>
            
            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex border border-gray-300 rounded-md">
                <button
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-4 py-2 border-x border-gray-300 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              
              <button
                className={`btn btn-primary flex items-center space-x-2 ${isAddingToCart ? 'animate-pulse' : ''}`}
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
            </div>
            
            {/* Product Metadata */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Product Details</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="font-medium min-w-28">Category:</span>
                  <span className="text-gray-700 capitalize">{product.category}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-28">Unit:</span>
                  <span className="text-gray-700">{product.unit}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-28">Organic:</span>
                  <span className="text-gray-700">{product.organic ? 'Yes' : 'No'}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-28">Availability:</span>
                  <span className={`font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;