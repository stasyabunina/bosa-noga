import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProduct = createAsyncThunk('product/getProduct', async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_URL}${process.env.REACT_APP_ITEMS_REQ}/${id}`);
    
    return response.data;
});