import React, { useState, useEffect } from 'react'
import './shows.scss'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedShow } from "../../redux/selected/selectedSlice"
import { sortMovies } from "../../redux/movies/movieAction"


export default function Shows() {
  let navigate = useNavigate(); 
  const dispatch = useDispatch();
  const state = useSelector(state=>state)
  const [ sort, setSort] = useState({
    attribute:'name',
    type:"asd"
  })

  useEffect(()=>{
    dispatch(sortMovies(sort))
  },[sort, dispatch])

  

  const selectedShow = (show)=>{
      dispatch(setSelectedShow(show))
      navigate('/theaters')
  }

  function onSortChange(key, value){
    setSort(
      (pre)=>({
        ...pre,
        [key]:value 
      })
    )
  }

  return (
    <div className='shows'>

      <div className='shows_filter'>
        
        <div className='shows_filter_title'>Sorts</div>
        <div className='shows_filter_container'>
            <div className='shows_filter_box' >
              <div className='shows_filter_box_title'>Sort By</div> 
              <div className='shows_filter_box_options'>
                <div onClick={()=>onSortChange("attribute", "name")} className={ `shows_filter_box_list ${ sort.attribute === "name" && `selected_list`}`} >Name</div>  
                <div onClick={()=>onSortChange("attribute", "ratings")} className={ `shows_filter_box_list ${ sort.attribute === "ratings" && `selected_list`}`}>Ratings</div>        
              </div>
            </div>
            <div className='shows_filter_box' >
              <div className='shows_filter_box_title'>Type</div> 
              <div className='shows_filter_box_options'>
                <div onClick={()=>onSortChange("type", "asd")} className={ `shows_filter_box_list ${ (sort.attribute === "name" && sort.type === "asd") && `selected_list`}`}>A - Z</div>  
                <div onClick={()=>onSortChange("type", "dsd")} className={ `shows_filter_box_list ${ (sort.attribute === "name" && sort.type === "dsd") && `selected_list`}`}>Z - A</div>
                <div onClick={()=>onSortChange("type", "asd")} className={ `shows_filter_box_list ${ (sort.attribute === "ratings" && sort.type === "asd") && `selected_list`}`}>0 - 100</div> 
                <div onClick={()=>onSortChange("type", "dsd")} className={ `shows_filter_box_list ${ (sort.attribute === "ratings" && sort.type === "dsd") && `selected_list`}`}>100 - 0</div>       
              </div>
            </div>
        </div>
        <div className='shows_filter_title'></div>
        <div className='shows_filter_title'></div>
        <div className='shows_filter_title'>Filters</div>
        <div className='shows_filter_container'>

            <div className='shows_filter_box' >
              <div className='shows_filter_box_title'>Language</div> 
              <div className='shows_filter_box_options'>
                <div className='shows_filter_box_list'>English</div>  
                <div className='shows_filter_box_list'>Hindi</div>
                <div className='shows_filter_box_list'>Kannada</div>
                <div className='shows_filter_box_list'>Malayalam</div>   
                <div className='shows_filter_box_list'>Tamil</div>
                <div className='shows_filter_box_list'>Telugu</div>           
              </div>
            </div>

            <div className='shows_filter_box'>
              <div className='shows_filter_box_title'>Genre</div> 
              <div className='shows_filter_box_options'>
                <div className='shows_filter_box_list'>Action</div>
                <div className='shows_filter_box_list'>Thriler</div>
                <div className='shows_filter_box_list'>Sci-Fi</div>
                <div className='shows_filter_box_list'>Adventure</div>
                <div className='shows_filter_box_list'>Crime</div>
                <div className='shows_filter_box_list'>Comedy</div>
                <div className='shows_filter_box_list'>Fantasy</div>
              </div>
            </div>

            <div className='shows_filter_box'>
              <div className='shows_filter_box_title'>Format</div> 
              <div className='shows_filter_box_options'>
                <div className='shows_filter_box_list'>2D</div>
                <div className='shows_filter_box_list'>3D</div>
                <div className='shows_filter_box_list'>4DX</div>
                <div className='shows_filter_box_list'>IMAX</div>
              </div>
            </div>
            
        </div>

      </div>

      <div className='shows_container'>
        <div className='shows_container_title'>Movies In Location</div>
        <div className='shows_container_items'>
          {
            state.selected?.selectedShowsList?.result?.map((show,key)=>{
                return (
                    <div className='show_box' key={key} onClick={()=>selectedShow(show)}>
                      <img className='show_box_img' src={show.image} alt='show ' />
                      <div className='show_box_discription' >
                        <div className='show_box_show_title'>{show.name}</div>
                        <div className='show_box_show_language'>{show.language.slice(0,20)}..</div>
                      </div>
                    </div>  
                )
            })
          }   
        </div>
      </div>
        
    </div>
  )
}
