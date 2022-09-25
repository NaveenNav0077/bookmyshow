import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './movies/movieSlice'
import selectedSlice from './selected/selectedSlice'

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        selected: selectedSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: true,
        serializableCheck: false
    }),
})