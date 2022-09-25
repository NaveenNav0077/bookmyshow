import React from 'react'
import './header.scss'
import Authendication from '../../components/Authendication/Authendication'
import SearchBar from '../../components/SearchBar/searchbar'
import Location from '../../components/location/location'

function Header() {
  return (
    <div className='header'>
      
      <div className='header_search'>
        <div className='header_search_left'>
            <div className='app-logo'>book<span style={{color:"#F84464", fontSize:"30px"}}>my</span>show</div>
            <SearchBar />
        </div>
        <div className='header_search_right'>
            <Location />
            <Authendication />
        </div>
      </div>

      <div className='header_routes'>        
        <div className='header_routes_container'>
          <div className='routes'>Movies</div>
          <div className='routes'>Streams</div>
          <div className='routes'>Events</div>
        </div>        
      </div>
      
    </div>
  )
}

export default Header