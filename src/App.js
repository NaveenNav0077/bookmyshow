import React, { useEffect } from 'react'
import './App.scss';
import Header from './layouts/header/header'
import Shows from './layouts/shows/shows.js'
import Theaters from './routes/theaters/theaters'
import Selected from './routes/selected/selected'
import Footer from './layouts/footer/footer'
import { Route, Routes  } from 'react-router-dom'
import { getMovies } from './redux/movies/movieAction'
import { setSelectedShowsList } from './redux/selected/selectedSlice' 
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state=>state)
  useEffect(()=>{
    if(state.movies.movies===null){
      dispatch(getMovies())
    }
    if(state.movies.movies!==null){
      dispatch(setSelectedShowsList(state.movies.movies))
    }
  },[dispatch, state])
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Shows />} />
        <Route path='/theaters' element={<Theaters />} />
        <Route path='/selected' element={<Selected />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
