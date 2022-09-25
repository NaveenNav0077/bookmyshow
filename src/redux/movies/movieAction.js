import { createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'

export const getMovies = createAsyncThunk('movies/get', async (payload, thunkApi)=>{
    try{
        const response = await Axios.get('http://localhost:5000/movies')
        return response.data
    } catch (err){
        return thunkApi.rejectWithValue(err);
    }
})