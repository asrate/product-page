import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { setSortOption } from '../../../store/features/filters/filterSlice';

const SortDropdown: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const sortOption = useSelector((state: RootState) => state.filter.sortOption);

  
  const handleSelect = (value: string) => {
    dispatch(setSortOption(value));
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="btn bg-blue-500 text-white py-2 px-4 rounded-md">
        Sort By: {sortOption || 'Select'}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="menu bg-white border border-gray-300 rounded-md shadow-lg">
        <DropdownMenu.Item
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onSelect={() => handleSelect('default')}
        >
          Default
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onSelect={() => handleSelect('Low to High')}
        >
          Price: Low to High
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onSelect={() => handleSelect('High to Low')}
        >
          Price: High to Low
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default SortDropdown;
