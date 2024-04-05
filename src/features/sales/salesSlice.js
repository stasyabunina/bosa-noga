import { createSlice } from '@reduxjs/toolkit';
import { getSales } from './getSales';

const initialState = {
    items: [],
    isLoading: false,
    error: null
};

const salesSlice = createSlice({
    name: 'sales',
    initialState,
    reducers: {
        //...
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSales.pending, (state) => {
                return { ...state, items: [], isLoading: true, error: null };
            })
            .addCase(getSales.fulfilled, (state, action) => {
                const items = action.payload;
                return { ...state, items, isLoading: false };
            })
            .addCase(getSales.rejected, (state, action) => {
                const { error } = action.error;
                return { ...state, isLoading: false, error };
            });
    }
});

export default salesSlice.reducer;