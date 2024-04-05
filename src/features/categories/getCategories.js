import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCategories = createAsyncThunk('catalog/getCategories', async () => {
    const response = await axios.get(process.env.REACT_APP_URL + process.env.REACT_APP_CATEGORIES_REQ);
    
    return response.data;
});