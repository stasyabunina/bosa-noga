import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../app/config';

export const postCartOrder = createAsyncThunk('cart/postCartOrder', async (body) => {
    const response = await axios.post(`${config.baseUrl}${process.env.REACT_APP_ORDER_REQ}`, body);

    return response.data;
});