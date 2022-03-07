import React from 'react'
import "./toggle.css"
import Sun from "../../img/sun.png"
import Moon from "../../img/moon.png"

export default function Toggle() {
  return (
    <div className='toggle'>
        <img src={Sun} className='t-icon'/>
        <img src={Moon} className='t-icon'/>
        <button className='t-button'></button>
    </div>
  )
}

