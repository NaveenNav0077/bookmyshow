import { createSlice } from '@reduxjs/toolkit'
import { getMovies } from './movieAction'

const initialState = {
    movies: null,  
    error:null
}

export const movieSlice = createSlice({
    name:'movies',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getMovies.fulfilled, (state, action)=>{
            console.log(action.payload)
            state.movies = action.payload
            console.log(state.movies )
        })
        .addCase(getMovies.rejected, (state, action)=>{
            state.error = action.payload
        })     
    }
})

export default movieSlice.reducer