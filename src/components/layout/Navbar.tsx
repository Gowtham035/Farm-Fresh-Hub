import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Leaf, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navbarClass = isScrolled
    ? 'bg-white shadow-md py-2 transition-all duration-300'
    : 'bg-transparent py-4 transition-all duration-300';

  return (
    <header className={`fixed w-full z-50 ${navbarClass}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-primary-700 hover:text-primary-600 transition-colors"
          onClick={closeMenu}
        >
          <Leaf className="h-8 w-8" />
          <span className="font-serif font-bold text-xl md:text-2xl tracking-tight">Farm Fresh</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink 
            to="/"
            className={({ isActive }) => 
              isActive ? 'text-primary-700 font-medium' : 'text-gray-700 hover:text-primary-600 transition-colors'
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about"
            className={({ isActive }) => 
              isActive ? 'text-primary-700 font-medium' : 'text-gray-700 hover:text-primary-600 transition-colors'
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/products"
            className={({ isActive }) => 
              isActive ? 'text-primary-700 font-medium' : 'text-gray-700 hover:text-primary-600 transition-colors'
            }
          >
            Products
          </NavLink>
          <NavLink 
            to="/contact"
            className={({ isActive }) => 
              isActive ? 'text-primary-700 font-medium' : 'text-gray-700 hover:text-primary-600 transition-colors'
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Cart Icon */}
        <Link 
          to="/cart"
          className="flex items-center text-gray-700 hover:text-primary-600 transition-colors relative"
        >
          <ShoppingCart className="h-6 w-6" />
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 absolute top-full left-0 w-full shadow-lg animate-fade-in">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink 
                to="/"
                className={({ isActive }) => 
                  isActive ? 'text-primary-700 font-medium' : 'text-gray-700 hover:text-primary-600 transition-colors'
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about"
                className={({ isActive }) => 
                  isActive ? 'text-primary-700 font-medium' : 'text-gray-700 hover:text-primary-600 transition-colors'
                }
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/products"
                className={({ isActive }) => 
                  isActive ? 'text-primary-700 font-medium' : 'text-gray-700 hover:text-primary-600 transition-colors'
                }
                onClick={closeMenu}
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact"
                className={({ isActive }) => 
                  isActive ? 'text-primary-700 font-medium' : 'text-gray-700 hover:text-primary-600 transition-colors'
                }
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;