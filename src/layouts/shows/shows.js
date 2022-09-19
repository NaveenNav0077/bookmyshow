import React from 'react'
import './shows.scss'
import { useNavigate } from "react-router-dom";


export default function Shows() {
  let navigate = useNavigate(); 
  return (
    <div className='shows'>

      <div className='shows_filter'>

        <div className='shows_filter_title'>Filters</div>

        <div className='shows_filter_container'>

            <div className='shows_filter_box' >
              <div className='shows_filter_box_title'>Language</div> 
              <div className='shows_filter_box_options'>
                <div className='shows_filter_box_list'>Tamil</div>
                <div className='shows_filter_box_list'>Malayalam</div>
                <div className='shows_filter_box_list'>Hindi</div>
                <div className='shows_filter_box_list'>English</div>
              </div>
            </div>

            <div className='shows_filter_box'>
              <div className='shows_filter_box_title'>Genres</div> 
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
                <div className='shows_filter_box_list'>XD</div>
                <div className='shows_filter_box_list'>IMAX</div>
              </div>
            </div>
            
        </div>

      </div>

      <div className='shows_container'>
        <div className='shows_container_title'>Movies In Location</div>
        <div className='shows_container_items'>

          <div className='show_box' onClick={()=>navigate('/theaters')}>
            <img className='show_box_img' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA1M2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00076943-tfcjhqgdmm-portrait.jpg' alt='show ' />
            <div className='show_box_discription' >
              <div className='show_box_show_title'>Top Gun Mavric</div>
              <div className='show_box_show_language'>English, Tamil, Hindhi..</div>
            </div>
          </div>

          <div className='show_box'>
            <img className='show_box_img' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA1M2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00076943-tfcjhqgdmm-portrait.jpg' alt='show ' />
            <div className='show_box_discription' >
              <div className='show_box_show_title'>Top Gun Mavric</div>
              <div className='show_box_show_language'>English, Tamil, Hindhi..</div>
            </div>
          </div>

          <div className='show_box'>
            <img className='show_box_img' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA1M2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00076943-tfcjhqgdmm-portrait.jpg' alt='show ' />
            <div className='show_box_discription' >
              <div className='show_box_show_title'>Top Gun Mavric</div>
              <div className='show_box_show_language'>English, Tamil, Hindhi..</div>
            </div>
          </div>

          <div className='show_box'>
            <img className='show_box_img' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA1M2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00076943-tfcjhqgdmm-portrait.jpg' alt='show ' />
            <div className='show_box_discription' >
              <div className='show_box_show_title'>Top Gun Mavric</div>
              <div className='show_box_show_language'>English, Tamil, Hindhi..</div>
            </div>
          </div>

          <div className='show_box'>
            <img className='show_box_img' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA1M2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00076943-tfcjhqgdmm-portrait.jpg' alt='show ' />
            <div className='show_box_discription' >
              <div className='show_box_show_title'>Top Gun Mavric</div>
              <div className='show_box_show_language'>English, Tamil, Hindhi..</div>
            </div>
          </div>

          <div className='show_box'>
            <img className='show_box_img' src='https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTIlICA1M2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00076943-tfcjhqgdmm-portrait.jpg' alt='show ' />
            <div className='show_box_discription' >
              <div className='show_box_show_title'>Top Gun Mavric</div>
              <div className='show_box_show_language'>English, Tamil, Hindhi..</div>
            </div>
          </div>


        </div>
      </div>
        
    </div>
  )
}
