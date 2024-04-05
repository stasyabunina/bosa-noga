import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../categories/getCategories';

const initialState = {
    categories: [{
        id: 11,
        title: 'Все'
    }],
    selectedCategory: {
        id: 11,
        title: 'Все'
    },
    isLoading: false,
    error: null
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        updateCategory: (state, action) => {
            const selectedCategory = state.categories.find(o => o.id === action.payload);
            return { ...state, selectedCategory };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                return {
                    ...state, categories: [{
                        id: 11,
                        title: 'Все'
                    }], isLoading: true, error: null
                };
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                const categories = action.payload;
                return {
                    ...state, categories: [{
                        id: 11,
                        title: 'Все'
                    }, ...categories], isLoading: false,
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