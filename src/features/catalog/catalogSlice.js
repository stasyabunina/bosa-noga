import { createSlice } from '@reduxjs/toolkit';
import { getCatalog } from './getCatalog';
import { loadItems } from './loadItems';

const initialState = {
    items: [],
    search: '',
    isLoading: false,
    error: null,
    moreLoading: false,
    moreError: null,
    loadedItemsLength: null
};

const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        updateSearchValue: (state, action) => {
            const { value } = action.payload;
            return { ...state, search: value };
        },
        resetSearchValue: (state, _action) => {
            return { ...state, search: '' };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCatalog.pending, (state) => {
                return { ...state, loadedItemsLength: null, items: [], isLoading: true, error: null };
            })
            .addCase(getCatalog.fulfilled, (state, action) => {
                const items = action.payload;
                return { ...state, items, isLoading: false };
            })
            .addCase(getCatalog.rejected, (state, action) => {
                const { error } = action.error;
                return { ...state, isLoading: false, error };
            })
            .addCase(loadItems.pending, (state) => {
                return { ...state, loadedItemsLength: null, moreLoading: true, moreError: null };
            })
            .addCase(loadItems.fulfilled, (state, action) => {
                const loadedItems = action.payload;
                return { ...state, items: [...state.items, ...loadedItems], loadedItemsLength: loadedItems.length, moreLoading: false};
            })
            .addCase(loadItems.rejected, (state, action) => {
                const { error } = action.error;
                return { ...state, moreLoading: false, moreError: error };
            })
    }
});

export const { updateSearchValue, resetSearchValue } = catalogSlice.actions;

export default catalogSlice.reducer;