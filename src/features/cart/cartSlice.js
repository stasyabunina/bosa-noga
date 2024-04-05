import { createSlice } from '@reduxjs/toolkit';
import { postCartOrder } from './postCartOrder';

const initialState = {
    items: [],
    itemsAmount: 0,
    priceSum: 0,
    isLoading: false,
    error: null,
    success: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            return { ...state, items: [...state.items, item], itemsAmount: state.itemsAmount + 1, priceSum: state.priceSum + item.priceSum };
        },
        updateItem: (state, action) => {
            const item = action.payload;
            state.priceSum += item.priceSum;
            state.items.map(o => o.id === item.id && o.size === item.size ? { ...o, amount: o.amount += item.amount, priceSum: o.priceSum += item.priceSum } : item);
        },
        removeItem: (state, action) => {
            const { id, priceSum } = action.payload;
            return { ...state, items: state.items.filter(item => item.id !== id), priceSum: state.priceSum - priceSum, itemsAmount: state.itemsAmount - 1 }
        },
        resetCart: (_state, _action) => {
            return { ...initialState };
        },
        loadCart: (_state, action) => {
            const cart = action.payload;
            return { ...initialState, items: cart.items, itemsAmount: cart.itemsAmount, priceSum: cart.priceSum };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(postCartOrder.pending, (state) => {
                return { ...state, isLoading: true, error: null };
            })
            .addCase(postCartOrder.fulfilled, (_state, _action) => {
                return { ...initialState, success: true };
            })
            .addCase(postCartOrder.rejected, (state, action) => {
                const { error } = action.error;
                return { ...state, isLoading: false, error };
            })
    }
});

export const { addItem, removeItem, updateItem, resetCart, loadCart } = cartSlice.actions;

export default cartSlice.reducer;