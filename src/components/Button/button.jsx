import React from 'react'
import './button.scss'

export default function Button({ text }) {
  return (
    <div className='Button' style={{ height:"30px", width:"80px" }}>
        {text}
    </div>
  )
}
