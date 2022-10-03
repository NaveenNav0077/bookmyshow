import { createAsyncThunk } from '@reduxjs/toolkit'
import Axios from 'axios'


const URL = "https://show-time-server.herokuapp.com/"

export const getMovies = createAsyncThunk('movies/get', async (payload, thunkApi)=>{
    try{
        const response = await Axios.get(URL +'movies')
        return response.data
    } catch (err){
        return thunkApi.rejectWithValue(err);
    }
})

export const searchMovies = createAsyncThunk('search/get', async (payload, thunkApi)=>{
    try{
        const response = await Axios.get(URL + `movies?search=${payload}`)
        return response.data
    } catch (err){
        return thunkApi.rejectWithValue(err);
    }
})

export const sortMovies = createAsyncThunk('sort/get', async (payload, thunkApi)=>{
    try{
        const response = await Axios.get(URL +`movies/sort?attribute=${payload.attribute}&type=${payload.type}`)
        console.log(response.data)
        return response.data
    }
    catch(err){
        return thunkApi.rejectWithValue(err);
    }
})