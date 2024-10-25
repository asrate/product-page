import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import * as Slider from '@radix-ui/react-slider';
import { setPriceRange } from '../../../store/features/filters/filterSlice';

const PriceRangeSlider: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  
  const priceRange = useSelector((state: RootState) => state.filter.priceRange);

  
  const handleValueChange = (values: number[]) => {
    dispatch(setPriceRange(values));
  };

  return (
    <div className="flex flex-col space-y-4">
      <label className="text-sm font-semibold">
        Price Range: ${priceRange[0]} - ${priceRange[1]}
      </label>
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-8"
        min={0}
        max={1000}
        step={10}
        value={priceRange}  
        onValueChange={handleValueChange}  
      >
        <Slider.Track className="bg-gray-200 relative grow h-2 rounded-full">
          <Slider.Range className="absolute bg-blue-500 h-full rounded-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-4 h-4 bg-blue-500 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <Slider.Thumb className="block w-4 h-4 bg-blue-500 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </Slider.Root>
    </div>
  );
};

export default PriceRangeSlider;
