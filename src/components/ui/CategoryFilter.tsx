import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProductCategory } from '../../types/product';

interface CategoryFilterProps {
  activeCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
  counts: Record<ProductCategory, number>;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  activeCategory, 
  onCategoryChange,
  counts
}) => {
  const categories: { id: ProductCategory; name: string }[] = [
    { id: 'all', name: 'All Products' },
    { id: 'vegetables', name: 'Vegetables' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'herbs', name: 'Herbs' },
    { id: 'dairy', name: 'Dairy' },
  ];

  return (
    <div className="flex flex-wrap gap-2 my-6">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === category.id
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.name} {counts[category.id] > 0 && `(${counts[category.id]})`}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;