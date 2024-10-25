import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { setColor } from '../../../store/features/filters/filterSlice';

const ColorSelector: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedColor = useSelector((state: RootState) => state.filter.color);

  
  const colors = [
    { name: 'Red', class: 'bg-red-500' },
    { name: 'Blue', class: 'bg-blue-500' },
    { name: 'Green', class: 'bg-green-500' },
    { name: 'Black', class: 'bg-black' },
    { name: 'White', class: 'bg-white border border-gray-300' }, 
  ];

  const handleSelect = (color: string) => {
    dispatch(setColor(color));
  };

  return (
    <div className="flex gap-4">
      {colors.map((color) => (
        <button
          key={color.name}
          className={`w-10 h-10 rounded-full ${color.class} ${
            selectedColor === color.name ? 'ring-2 ring-blue-500' : ''
          }`}
          onClick={() => handleSelect(color.name)}
          title={color.name} 
        />
      ))}
    </div>
  );
};

export default ColorSelector;
