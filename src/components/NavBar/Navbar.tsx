import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { RootState } from "../../store/store"; 

const Navbar: React.FC = () => {
  const cartItemCount = useSelector((state: RootState) => state.cart.items.length); // Assuming you have a cart slice with items array

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold">
          <Link to="/">Logo</Link>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Menu Items */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/" className="hover:text-blue-400">Products</Link>
          <Link to="/" className="hover:text-blue-400">Contact</Link>

          {/* Add to Cart */}
          <Link to="/cart" className="relative hover:text-blue-400">
            <FaShoppingCart />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-xs rounded-full px-1">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
