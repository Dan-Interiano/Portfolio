import React from 'react'
import "./ProjectList.css"
import Projects from "../Projects/Projects"
import {projects} from "../../data.js"


export default function ProjectList() {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>  Check out some of the projects I've done below! </h1>
            <p className='pl-desc'>
            Here I was able to put my skills to the test by creating some really challenging applications! 
            I was even able to create an app to track my favorite hobby using a backend database! 
            </p>
        </div>
        <div className='pl-list'>
            {projects.map((item) => (
                <Projects img={item.img} key={item.id} link={item.link} name={item.name}/>
            ))}
            
        </div>
    </div>
  )
}
