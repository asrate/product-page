import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { setBrand } from '../../../store/features/filters/filterSlice'; 

const BrandDropdown: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const brandOption = useSelector((state: RootState) => state.filter.brand); 

  
  const handleSelect = (value: string) => {
    dispatch(setBrand(value)); 
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
          onSelect={() => handleSelect(' Samsung')} 
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
      
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default BrandDropdown;
