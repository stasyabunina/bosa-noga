import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../app/config';

export const loadItems = createAsyncThunk('catalog/loadItems', async ({ id, value, offset }) => {
    const params = new URLSearchParams({
        categoryId: id ?? '',
        offset: offset,
        q: value ?? ''
    });

    const url = new URL(`${config.baseUrl}${process.env.REACT_APP_ITEMS_REQ}?${params}`)

    const response = await axios.get(url);

    return response.data;
});