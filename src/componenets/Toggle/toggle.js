import React from 'react'
import "./toggle.css"
import Sun from "../../img/sun.png"
import Moon from "../../img/moon.png"
import { useContext } from 'react'
import { ThemeContext } from '../../context'

export default function Toggle() {
    const theme = useContext(ThemeContext);

    const handleToggleClick = (event) => {
        console.log(event)
        theme.dispatch({ type: "TOGGLE" })
    }
  return (
    <div className='toggle'>
        <img src={Sun} className='t-icon'/>
        <img src={Moon} className='t-icon'/>
        <button className='t-button' onClick={handleToggleClick} style={{left: theme.state.darkMode ? 0 : 25}}></button>
    </div>
  )
}

