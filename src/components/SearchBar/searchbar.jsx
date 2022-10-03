import React, { useState } from 'react';
import { searchMovies, getMovies } from '../../redux/movies/movieAction';
import { useDispatch } from 'react-redux'
import './searchbar.scss'

export default function SearchBar() {
  const dispatch = useDispatch();
  const [search,setSearch] = useState('');
  const onSearchChange = (str)=>{
      setSearch(str)
      str=str.toLowerCase()
      if(str === ''){
        dispatch(getMovies())
      } else {
        dispatch(searchMovies(str));
      }
  }

  return (
    <input className='SearchBar' value={search} onChange={(e)=>onSearchChange(e.target.value)} placeholder='Search for Movies, Streams, Sports' />
  )
}
