import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// Redux action
import { AppDispatch, RootState } from "../../store/store"; // Types
import { fetchProductById } from "../../store/features/products/productSlice";
import ColorSelector from "../filter/Color/colorFilter";
import SizeSelector from "../filter/Size/SizeFilter";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the product ID from the URL params
  const dispatch = useDispatch<AppDispatch>();

  const { product, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id)); // Dispatch the Redux action to fetch the product
    }
  }, [dispatch, id]);

  if (loading) {
    return <p className="text-center text-blue-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  if (!product) {
    return <p className="text-center">Product not found</p>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row">
          {/* Image section */}
          <div className="flex-shrink-0 w-full md:w-1/2"> {/* Adjust width to half */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-80 object-contain mb-6"
            />
          </div>

          {/* Details section */}
          <div className="md:ml-6 w-full md:w-1/2"> {/* Adjust width to half */}
            <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
            <p className="text-xl text-blue-600 font-bold mb-2">${product.price}</p>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-sm text-gray-500">Category: {product.category}</p>
            
            <div className="mt-4">
              <p className="font-semibold mb-2">Color</p>
              <ColorSelector />
            </div>

            <div className="mt-4">
              <p className="font-semibold mb-2">Size</p>
              <SizeSelector />
            </div>

            {/* Buttons section */}
            <div className="mt-6 flex gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Add to Cart
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
