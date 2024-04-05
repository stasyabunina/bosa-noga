import { createSlice } from '@reduxjs/toolkit';
import { getProduct } from './getProduct';

const initialState = {
    item: '',
    isLoading: false,
    error: null
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        //...
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProduct.pending, (state) => {
                return { ...state, item: null, isLoading: true, error: null };
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                const item = action.payload;
                return { ...state, item, isLoading: false };
            })
            .addCase(getProduct.rejected, (state, action) => {
                const { error } = action.error;
                return { ...state, isLoading: false, error };
            });
    }
})

export default productSlice.reducer;