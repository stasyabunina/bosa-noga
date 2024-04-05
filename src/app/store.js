import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import salesSlice from '../features/homePage/sales/salesSlice';
import catalogSlice from '../features/catalog/catalogSlice';
import categoriesSlice from '../features/categories/categoriesSlice';
import cartSlice from '../features/cart/cartSlice';
import productSlice from '../features/product/productSlice';

const reducer = combineReducers({
  sales: salesSlice,
  catalog: catalogSlice,
  categories: categoriesSlice,
  cart: cartSlice,
  product: productSlice,
});

export const store = configureStore({
  reducer: reducer
});