import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import salesSlice from '../features/sales/salesSlice';
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

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer
});