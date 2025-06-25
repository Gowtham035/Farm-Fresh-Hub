import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  name: string;
  image: string;
  count: number;
  slug: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image, count, slug }) => {
  return (
    <Link 
      to={`/products?category=${slug}`}
      className="group relative overflow-hidden rounded-lg shadow-md h-64"
    >
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 z-10"></div>
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
        <h3 className="text-white text-2xl font-bold drop-shadow-md">{name}</h3>
        <p className="text-white text-sm bg-primary-600/80 mt-2 rounded-full px-3 py-1 w-fit">
          {count} items
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;