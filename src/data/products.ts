import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Fresh Organic Tomatoes',
    category: 'vegetables',
    price: 3.99,
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg',
    description: 'Juicy, vine-ripened organic tomatoes. Perfect for salads, sandwiches, or making homemade pasta sauce.',
    unit: 'lb',
    inStock: true,
    featured: true,
    organic: true
  },
  {
    id: 2,
    name: 'Crisp Red Apples',
    category: 'fruits',
    price: 4.49,
    image: 'https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg',
    description: 'Sweet and crisp red apples freshly picked from our orchards. Rich in nutrients and perfect for snacking.',
    unit: 'lb',
    inStock: true,
    organic: true
  },
  {
    id: 3,
    name: 'Organic Carrots',
    category: 'vegetables',
    price: 2.99,
    image: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg',
    description: 'Crunchy, sweet carrots grown without pesticides. Great for roasting, soups, or enjoying raw.',
    unit: 'bunch',
    inStock: true,
    organic: true
  },
  {
    id: 4,
    name: 'Fresh Basil',
    category: 'herbs',
    price: 2.49,
    image: 'https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg',
    description: 'Aromatic basil leaves perfect for Italian dishes, salads, and homemade pesto.',
    unit: 'bunch',
    inStock: true
  },
  {
    id: 5,
    name: 'Creamy Farm Cheese',
    category: 'dairy',
    price: 6.99,
    image: 'https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg',
    description: 'Artisanal cheese made from 100% grass-fed cow\'s milk. Rich, creamy texture with a mild flavor.',
    unit: '8 oz',
    inStock: true,
    featured: true
  },
  {
    id: 6,
    name: 'Ripe Strawberries',
    category: 'fruits',
    price: 5.99,
    image: 'https://images.pexels.com/photos/46174/strawberries-berries-fruits-freshness-46174.jpeg',
    description: 'Sweet, juicy strawberries picked at peak ripeness. Perfect for desserts or enjoying fresh.',
    unit: 'pint',
    inStock: true,
    organic: true
  },
  {
    id: 7,
    name: 'Fresh Spinach',
    category: 'vegetables',
    price: 3.49,
    image: 'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg',
    description: 'Tender, nutrient-rich spinach leaves. Excellent for salads, smoothies, or sautéed as a side dish.',
    unit: 'bunch',
    inStock: true,
    organic: true
  },
  {
    id: 8,
    name: 'Fresh Mint',
    category: 'herbs',
    price: 1.99,
    image: 'https://images.pexels.com/photos/594292/pexels-photo-594292.jpeg',
    description: 'Refreshing mint leaves perfect for teas, cocktails, and adding flavor to desserts.',
    unit: 'bunch',
    inStock: true
  },
  {
    id: 9,
    name: 'Whole Milk',
    category: 'dairy',
    price: 4.79,
    image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg',
    description: 'Creamy, nutrient-rich whole milk from grass-fed cows. Pasteurized but not homogenized.',
    unit: 'half gallon',
    inStock: true
  },
  {
    id: 10,
    name: 'Fresh Blueberries',
    category: 'fruits',
    price: 6.49,
    image: 'https://images.pexels.com/photos/1198315/pexels-photo-1198315.jpeg',
    description: 'Plump, sweet blueberries bursting with flavor and antioxidants.',
    unit: 'pint',
    inStock: true,
    featured: true,
    organic: true
  },
  {
    id: 11,
    name: 'Sweet Bell Peppers',
    category: 'vegetables',
    price: 3.29,
    image: 'https://images.pexels.com/photos/128536/pexels-photo-128536.jpeg',
    description: 'Colorful, crunchy bell peppers perfect for salads, stir-fries, or roasting.',
    unit: 'lb',
    inStock: true
  },
  {
    id: 12,
    name: 'Fresh Rosemary',
    category: 'herbs',
    price: 2.29,
    image: 'https://images.pexels.com/photos/10886837/pexels-photo-10886837.jpeg',
    description: 'Aromatic rosemary sprigs that add wonderful flavor to roasted meats, potatoes, and breads.',
    unit: 'bunch',
    inStock: true,
    organic: true
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};