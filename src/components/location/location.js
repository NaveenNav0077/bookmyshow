import React, { useState } from 'react'
import './location.scss'
export default function Location() {
  const [locationModel, setlocationModel] = useState(false);
  return (
    <div className='Location'>
        <div onClick={()=>setlocationModel(!locationModel)}>Location</div> 
        {
          locationModel && (
              <div>
                <div onClick={()=>setlocationModel(!locationModel)}  className='location_container'></div>
                <div className='location_model'>
                  <div className='location_model_header'>
                    <input className='location_model_search' placeholder='Search for your city' />
                  </div>
                  <div className='location_model_body'>
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png" alt="location" />
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png" alt="location" />
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/bang.png" alt="location" />
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png" alt="location" />
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png" alt="location" />
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/chd.png" alt="location" />
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/chen.png" alt="location" />
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/pune.png" alt="location" />
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png" alt="location" />
                    <img src="https://in.bmscdn.com/m6/images/common-modules/regions/koch.png" alt="location" />
                  </div>
                </div>
              </div>
          )
        }        
    </div>
  )
}
