import { createSlice } from '@reduxjs/toolkit'
import { getMovies, searchMovies } from './movieAction'

const initialState = {
    movies: null,  
    error:null
}

export const movieSlice = createSlice({
    name:'movies',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(getMovies.fulfilled, (state, action)=>{
            state.movies = action.payload
        })
        .addCase(getMovies.rejected, (state, action)=>{
            state.error = action.payload
        })     
        .addCase(searchMovies.fulfilled, (state, action)=>{
            if(action.payload.result!==null){
                state.movies = action.payload
            } 
        })
        .addCase(searchMovies.rejected, (state, action)=>{
            state.error = action.payload
        })  
    }
})

export default movieSlice.reducer