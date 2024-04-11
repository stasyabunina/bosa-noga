import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../categories/getCategories';

const initialState = {
    categories: [],
    selectedCategory: null,
    isLoading: false,
    error: null
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        updateCategory: (state, action) => {
            const id = action.payload;
            const selectedCategory = id ? state.categories.find(o => o.id === id) : null;
            return { ...state, selectedCategory };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                return {
                    ...state, categories: [], isLoading: true, error: null
                };
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                const categories = action.payload;
                return {
                    ...state, categories: categories, isLoading: false,
                };
            })
            .addCase(getCategories.rejected, (state, action) => {
                const { error } = action.error;
                return { ...state, isLoading: false, error };
            })
    }
});

export const { updateCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;