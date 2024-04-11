import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../app/config';

export const getCatalog = createAsyncThunk('catalog/getCatalog', async ({ id, value }) => {
    const params = new URLSearchParams({
        categoryId: id ?? '',
        q: value ?? ''
    });

    const url = new URL(`${config.baseUrl}${process.env.REACT_APP_ITEMS_REQ}?${params}`)

    const response = await axios.get(url);

    return response.data;
});