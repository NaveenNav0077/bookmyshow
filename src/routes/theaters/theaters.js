import React from 'react'
import './theaters.scss'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'

export default function Theaters() {
  const state = useSelector(state=>state)
  let navigate = useNavigate(); 

  return (
    <div className='theaters'>
        <div className='theater_show'>
            <div className='theater_show_title' >{state.selected.selectedShow.name}</div>
            <div className='theater_show_discripion' >
                <div className='theater_show_rating' >{state.selected.selectedShow.genre}</div>
                <div className='theater_show_duriation' >{state.selected.selectedShow.duration}</div>
            </div>
        </div>

        <div className='select_dates'>
            <div className='selected_date'>
                <div>SUN</div>
                <div style={{fontSize:'18px'}}>20</div>
                <div>SEP</div>
            </div>
            <div className='un_selected_date'>
                <div>MON</div>
                <div style={{fontSize:'18px'}}>21</div>
                <div>SEP</div>
            </div>
            <div className='un_selected_date'>
                <div>TUS</div>
                <div style={{fontSize:'18px'}}>22</div>
                <div>SEP</div>
            </div>
            <div className='un_selected_date'>
                <div>WED</div>
                <div style={{fontSize:'18px'}}>23</div>
                <div>SEP</div>
            </div>
            <div className='un_selected_date'>
                <div>THU</div>
                <div style={{fontSize:'18px'}}>24</div>
                <div>SEP</div>
            </div>
        </div>

        <div className='theaters_container'>
            <div className='theaters_list'>

                <div className='theater_list_box'></div>

                <div className='theater_box' onClick={()=>navigate('/selected')}>
                    <div className='theater_name_box'>
                        <div className='theater_name' style={{ padding: "7px" }}>INOX BSR Mall, OMR, Chennai</div>
                        <div className='theater_food' style={{ color: "#FFAC30", padding: "7px" }}>Foods & Beverage</div>
                    </div>
                    <div className='theater_show_timings_list'>
                        <div className='theater_show_timing'>01:00 PM</div>
                        <div className='theater_show_timing'>07:00 PM</div>
                        <div className='theater_show_timing'>10:00 PM</div>
                    </div>
                </div>
                
                <div className='theater_box' onClick={()=>navigate('/selected')}>
                    <div className='theater_name_box'>
                        <div className='theater_name' style={{ padding: "7px" }}>PVR Cinimas, OMR, Chennai</div>
                        <div className='theater_food' style={{ color: "#FFAC30", padding: "7px" }}>Foods & Beverage</div>
                    </div>
                    <div className='theater_show_timings_list'>
                        <div className='theater_show_timing'>01:00 PM</div>
                        <div className='theater_show_timing'>07:00 PM</div>
                        <div className='theater_show_timing'>10:00 PM</div>
                    </div>
                </div>

                <div className='theater_box' onClick={()=>navigate('/selected')}>
                    <div className='theater_name_box'>
                        <div className='theater_name' style={{ padding: "7px" }}>MULTIPLEX BSR Mall, OMR, Chennai</div>
                        <div className='theater_food' style={{ color: "#FFAC30", padding: "7px" }}>Foods & Beverage</div>
                    </div>
                    <div className='theater_show_timings_list'>
                        <div className='theater_show_timing'>01:00 PM</div>
                        <div className='theater_show_timing'>07:00 PM</div>
                        <div className='theater_show_timing'>10:00 PM</div>
                    </div>
                </div>
                
                <div className='theater_box' onClick={()=>navigate('/selected')}>
                    <div className='theater_name_box'>
                        <div className='theater_name' style={{ padding: "7px" }}>ARRS Cinimas, OMR, Chennai</div>
                        <div className='theater_food' style={{ color: "#FFAC30", padding: "7px" }}>Foods & Beverage</div>
                    </div>
                    <div className='theater_show_timings_list'>
                        <div className='theater_show_timing'>01:00 PM</div>
                        <div className='theater_show_timing'>07:00 PM</div>
                        <div className='theater_show_timing'>10:00 PM</div>
                    </div>
                </div>

                <div className='theater_box' onClick={()=>navigate('/selected')}>
                    <div className='theater_name_box'>
                        <div className='theater_name' style={{ padding: "7px" }}>INOX Cinimas, OMR, Chennai</div>
                        <div className='theater_food' style={{ color: "#FFAC30", padding: "7px" }}>Foods & Beverage</div>
                    </div>
                    <div className='theater_show_timings_list'>
                        <div className='theater_show_timing'>01:00 PM</div>
                        <div className='theater_show_timing'>07:00 PM</div>
                        <div className='theater_show_timing'>10:00 PM</div>
                    </div>
                </div>

                <div className='theater_box' onClick={()=>navigate('/selected')}>
                    <div className='theater_name_box'>
                        <div className='theater_name' style={{ padding: "7px" }}>PVR Cinimas, OMR, Chennai</div>
                        <div className='theater_food' style={{ color: "#FFAC30", padding: "7px" }}>Foods & Beverage</div>
                    </div>
                    <div className='theater_show_timings_list'>
                        <div className='theater_show_timing'>01:00 PM</div>
                        <div className='theater_show_timing'>07:00 PM</div>
                        <div className='theater_show_timing'>10:00 PM</div>
                    </div>
                </div>

            </div>
        </div>

    </div>
  )
}
