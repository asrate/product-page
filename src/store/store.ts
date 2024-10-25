import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice"
import filterReducer from "./features/filters/filterSlice";
import cartReducer from "./features/Add-Cart/cartSlice"

const store = configureStore({
    reducer:{
product: productReducer,
filter: filterReducer,
cart: cartReducer
    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;