import React from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@radix-ui/react-dropdown-menu';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { setCatagory } from '../../../store/features/filters/filterSlice';


const Category: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const category = useSelector((state: RootState) => state.filter.category);

 
  const handleSelect = (value: string) => {
    dispatch(setCatagory(value)); 
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="px-4 py-2 text-black rounded-md bg-gray-200">
          Categories: {category || 'Select'}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white border border-gray-300 rounded-md shadow-lg p-2">
        <DropdownMenuItem
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onSelect={() => handleSelect('default')}
        >
          Default
        </DropdownMenuItem>

        <DropdownMenuItem
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onSelect={() => handleSelect('Mens Clothes')}
        >
          Men's Clothes
        </DropdownMenuItem>

        <DropdownMenuItem
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onSelect={() => handleSelect('Womens Clothes')}
        >
          Women's Clothes
        </DropdownMenuItem>

        <DropdownMenuItem
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onSelect={() => handleSelect('Electronics')}
        >
          Electronics
        </DropdownMenuItem>

        <DropdownMenuItem
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onSelect={() => handleSelect('Furniture')}
        >
          Furniture
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Category;
