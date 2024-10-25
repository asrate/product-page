// filterSlice.js (Redux slice for managing filters)

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortOption: 'default',
  priceRange: [0, 100],
  category: 'defualt',
  brand: 'default',
  color: 'default',
  size: 'default',
  material: 'default',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setCatagory:(state,action)=>{
        state.category=action.payload;
    },
    setSize:(state,action)=>{
        state.size=action.payload;

    },
    setBrand:(state,action)=>{
        state.brand=action.payload;
    },
    setColor:(state,action)=>{
        state.color=action.payload;
    },
    setMaterial:(state,action)=>{
        state.material=action.payload;
    },
  },
});

export const { setSortOption, setPriceRange, setCatagory, setColor, setBrand, setMaterial,setSize} = filterSlice.actions;

export default filterSlice.reducer;
