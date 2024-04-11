import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../app/config';

export const getProduct = createAsyncThunk('product/getProduct', async (id) => {
    const response = await axios.get(`${config.baseUrl}${process.env.REACT_APP_ITEMS_REQ}/${id}`);
    
    return response.data;
});