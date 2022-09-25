import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedShowsList : null,
    selectedShow : null,
    selectedCinema : null
}

const selectedSlice = createSlice({
    name:'selected',
    initialState,
    reducers:{
        setSelectedShowsList:(state, action)=>{
            state.selectedShowsList = action.payload
        },
        setSelectedShow:(state, action)=>{
            state.selectedShow = action.payload
        },
        setSelectedCinema:(state, action)=>{
            state.selectedCinema = action.payload
        }
    }
})

export const { setSelectedShowsList, setSelectedShow, setSelectedCinema } = selectedSlice.actions;

export default selectedSlice.reducer;