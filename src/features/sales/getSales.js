import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../app/config';

export const getSales = createAsyncThunk('sales/getSales', async () => {
    const response = await axios.get(config.baseUrl + process.env.REACT_APP_TOP_SALES_REQ);
    return response.data;
});