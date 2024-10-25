import React from 'react';
import SortDropdown from '../sort/SortDropdown';
import PriceRangeSlider from '../price-range/PriceRangeSlider';
import Category from '../catagories/Catagories';
import ColorSelector from '../Color/colorFilter';
import SizeSelector from '../Size/SizeFilter';
import BrandDropdown from '../brand-filter/BrandFilter';

const FilterSection: React.FC = () => {
  return (
    <div className="filter-section  p-4 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <div className="flex flex-col gap-4">
        <PriceRangeSlider />
        <SortDropdown />
        <Category />
        <BrandDropdown/>
      </div>
    </div>
  );
};

export default FilterSection;
