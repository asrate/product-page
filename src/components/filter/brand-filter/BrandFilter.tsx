import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { setBrand } from '../../../store/features/filters/filterSlice'; // Update with your actual action

const BrandDropdown: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const brandOption = useSelector((state: RootState) => state.filter.brand); // Adjust state based on your setup

  // Function to handle option selection
  const handleSelect = (value: string) => {
    dispatch(setBrand(value)); // Update with your actual action for setting brand
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="btn bg-blue-500 text-white py-2 px-4 rounded-md">
        Brand: {brandOption || 'Select'}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="menu bg-white border border-gray-300 rounded-md shadow-lg">
        <DropdownMenu.Item
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onSelect={() => handleSelect('All Brands')}
        >
          All Brands
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onSelect={() => handleSelect(' Samsung')} // Replace with actual brand names
        >
         Samsung
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onSelect={() => handleSelect(' Iphone')}
        >
          Iphone
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onSelect={() => handleSelect('LG')}
        >
         LG
        </DropdownMenu.Item>
        {/* Add more brands as needed */}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default BrandDropdown;
