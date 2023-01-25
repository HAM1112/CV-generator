import React from 'react'
import { useState } from 'react'
import './Education.css'


function Education(props) {

    const [Educations, setEducations] = useState('');
    const [Education, setEducation] = useState({university: '', program : '', start : '', end : ''});

    const handleChange = (e)=>{
        setEducation({...Education, [e.target.name]: e.target.value})
    }

    const handleClick = ()=>{
        setEducations((prevEdus) =>{
            const newEdus = [...prevEdus, Education]
            props.passdata(newEdus)
            return newEdus
        })
        setEducation({university : '', program : '' , start : '', end : ''})
    }

  return (
    <div className='education-details'>
        <h2>Educational Qualifications</h2>
        <input type="text" onChange={handleChange} name='university' value={Education.university} placeholder="University/School"  />
        <input type="text" onChange={handleChange} name='program' value={Education.program} placeholder="Program" />
        <input type="text" onChange={handleChange} name='start' value={Education.start} placeholder="Start Year" />
        <input type="text" onChange={handleChange} name='end' value={Education.end} placeholder="End Year" />
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Education