import { createSelector } from '@reduxjs/toolkit';

export const cart = state => state.cart;

export const items = state => cart(state).items;

export const totalPriceSum = createSelector(
    items,
    items => items.reduce((acc, item) => {
        const { priceSum } = item
        return acc + priceSum
    }, 0)
)