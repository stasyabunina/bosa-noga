import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const postCartOrder = createAsyncThunk('cart/postCartOrder', async (body) => {
    const response = await axios.post(`${process.env.REACT_APP_URL}${process.env.REACT_APP_ORDER_REQ}`, body);

    return response.data;
});