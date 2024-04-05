import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCatalog = createAsyncThunk('catalog/getCatalog', async ({ id, value }) => {
    let response;

    if (value) {
        if (id !== 11) {
            response = await axios.get(`${process.env.REACT_APP_URL}${process.env.REACT_APP_ITEMS_REQ}?categoryId=${id}&offset=0&q=${value}`);
        } else {
            response = await axios.get(`${process.env.REACT_APP_URL}${process.env.REACT_APP_ITEMS_REQ}?offset=0&q=${value}`);
        }
    } else {
        if (id !== 11) {
            response = await axios.get(`${process.env.REACT_APP_URL}${process.env.REACT_APP_ITEMS_REQ}?categoryId=${id}&offset=0`);
        } else {
            response = await axios.get(`${process.env.REACT_APP_URL}${process.env.REACT_APP_ITEMS_REQ}?offset=0`);
        }
    }

    return response.data;
});