import React,{ useState } from 'react'
import './Authendication.scss'

export default function Authendication() {
  const [authModel, setAuthModel] = useState(false);
  return (
      <>
        <div className='Authendication' style={{ height:"30px", width:"80px" }} onClick={()=>setAuthModel(!authModel)}>
          <div>SignIn</div>
        </div>
        <div>
        {
          authModel && (
          <div>
            <div  className='auth_container' onClick={()=>setAuthModel(!authModel)}></div>
            <div className='auth_model'>
              <div className='auth_model_header'>
                Get Started
              </div>
              <div className='auth_model_body'>
                
              </div>
            </div>
          </div>  
          )
        }
        </div>
      </>
  )
}
