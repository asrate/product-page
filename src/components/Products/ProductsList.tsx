import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // For redirection
import { AppDispatch, RootState } from "../../store/store";
import { fetchProducts } from "../../store/features/products/productSlice";
import FilterSection from "../filter/Filter-Selection/FilterSection";
import { addToCart } from "../../store/features/Add-Cart/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate(); // Use navigate for redirection

  const { products, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Function to handle product image click
  const handleProductClick = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {loading && <p className="text-center text-blue-600">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar for Filters */}
        <div className="w-full md:w-1/5 bg-white p-4 rounded-lg shadow-lg">
          <FilterSection />
        </div>

        {/* Product List */}
        <div className="w-full md:w-4/5 overflow-visible">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <li
                key={product.id}
                className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white hover:shadow-lg transition-shadow duration-200"
              >
                {/* Image with click handler for redirection */}
                <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-contain mb-4 cursor-pointer"
                  // onClick={() => handleProductClick(product.id)} // Redirect when clicked
                />
                </Link>
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {product.title}
                </h2>
                <p className="text-blue-600 font-bold text-xl mt-2">
                  ${product.price}
                </p>
                <p className="text-sm text-gray-500 mt-1">Category: {product.category}</p>
                
                {/* Add to Cart Button */}
                <button
                //   onClick={() => dispatch(addToCart())}
                  className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-150"
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
