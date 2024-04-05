import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadItems = createAsyncThunk('catalog/loadItems', async ({ id, value, offset }) => {
    let response;

    if (value) {
        if (id !== 11) {
            response = await axios.get(`${process.env.REACT_APP_URL}${process.env.REACT_APP_ITEMS_REQ}?categoryId=${id}&offset=${offset}&q=${value}`);
        } else {
            response = await axios.get(`${process.env.REACT_APP_URL}${process.env.REACT_APP_ITEMS_REQ}?offset=${offset}&q=${value}`);
        }
    } else {
        if (id !== 11) {
            response = await axios.get(`${process.env.REACT_APP_URL}${process.env.REACT_APP_ITEMS_REQ}?categoryId=${id}&offset=${offset}`);
        } else {
            response = await axios.get(`${process.env.REACT_APP_URL}${process.env.REACT_APP_ITEMS_REQ}?offset=${offset}`);
        }
    }

    return response.data;
});