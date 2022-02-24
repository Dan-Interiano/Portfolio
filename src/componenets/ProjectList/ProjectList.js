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
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum,
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
            </p>
        </div>
        <div className='pl-list'>
            {projects.map((item) => (
                <Projects img={item.img} key={item.id} link={item.link}/>
            ))}
            
        </div>
    </div>
  )
}
