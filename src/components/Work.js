import React from 'react'
import { useState } from 'react'
import './Work.css'


function Work(props) {
    const [Works, setWorks] = useState("");
    const [Work, setWork] = useState({company : '' , start : '', end : '', position: ''});

    const handleChange = (e)=>{
        setWork({...Work, [e.target.name]: e.target.value})
    }

    const handleClick = ()=>{
        setWorks((prevWorks) =>{
            const newWorks = [...prevWorks, Work]
            props.passdata(newWorks)
            return newWorks
        })
        setWork({company : '' , start : '', end : '', position: ''})
    }

  return (
    <div className='work-details'>
        <h2>Work Experience</h2>
        <input type="text" name='company' placeholder='Company Name' onChange={handleChange} value={Work.company}/>
        <input type="text" name='position' placeholder='Position' onChange={handleChange} value={Work.position}/>
        <input type="text" name='start' placeholder='Start Year' onChange={handleChange} value={Work.start}/>
        <input type="text" name='end' placeholder='End Year' onChange={handleChange} value={Work.end}/>
        <button onClick={handleClick}>Add</button>      
    </div>
  )
}

export default Work