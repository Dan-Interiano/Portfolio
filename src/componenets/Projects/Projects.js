import React from 'react'
import "./Projects.css"

export default function Projects({img, link, name}) {
  return (
    <div className='p'>
      <div className='p-browser'>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <p>{name}</p>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className='p-img'/>
      </a>
      
    </div>
  )
}
