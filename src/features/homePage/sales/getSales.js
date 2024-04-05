import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSales = createAsyncThunk('sales/getSales', async () => {
    const response = await axios.get(process.env.REACT_APP_URL + process.env.REACT_APP_TOP_SALES_REQ);
    return response.data;
});