import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { setSize } from '../../../store/features/filters/filterSlice';


const SizeSelector: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedSize = useSelector((state: RootState) => state.filter.size);

 
  const sizes = ['S', 'M', 'L', 'XL'];

  const handleSelect = (size: string) => {
    dispatch(setSize(size));
  };

  return (
    <div className="flex gap-4">
      {sizes.map((size) => (
        <button
          key={size}
          className={`w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 ${
            selectedSize === size ? 'bg-blue-500 text-white' : 'bg-white text-black'
          }`}
          onClick={() => handleSelect(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
