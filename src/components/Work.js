import React from 'react'
import { useState } from 'react'
import './Work.css'


function Work(props) {
    const [Works, setWorks] = useState("");
    const [Work, setWork] = useState({company : '' , start : '', end : ''});

    const handleChange = (e)=>{
        setWork({...Work, [e.target.name]: e.target.value})
    }

    const handleClick = ()=>{
        setWorks((prevWorks) =>{
            const newWorks = [...prevWorks, Work]
            props.passdata(newWorks)
            return newWorks
        })
        setWork({company : '' , start : '', end : ''})
    }

  return (
    <div className='work-details'>
        <h2>Work Experience</h2>
        <input type="text" name='company' onChange={handleChange} value={Work.company}/>
        <input type="text" name='start' onChange={handleChange} value={Work.start}/>
        <input type="text" name='end' onChange={handleChange} value={Work.end}/>
        <button onClick={handleClick}>Add</button>      
    </div>
  )
}

export default Work