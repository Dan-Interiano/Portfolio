import React from 'react'
import "./ProjectList.css"
import Projects from "../Projects/Projects"

export default function ProjectList() {
  return (
    <div className='pl'>
        <div className='pl-texts'>
            <h1 className='pl-title'>  Duis aute irure dolor in reprehenderit </h1>
            <p className='pl-desc'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum,
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
            </p>
        </div>
        <div className='pl-list'>
            <Projects />
            <Projects />
            <Projects />
            <Projects />
        </div>
    </div>
  )
}
