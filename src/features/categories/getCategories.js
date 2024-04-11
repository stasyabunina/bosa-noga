import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import config from '../../app/config';

export const getCategories = createAsyncThunk('catalog/getCategories', async () => {
    const response = await axios.get(config.baseUrl + process.env.REACT_APP_CATEGORIES_REQ);
    
    return response.data;
});