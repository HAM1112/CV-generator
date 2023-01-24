import React from 'react'
import { useState } from 'react';

function Personal(props) {
    const [Details, setDetails] = useState({ name:'' ,title:'' ,phone:'' , email: '', adress: '' });
  
    const handleChange = (e)=>{
        setDetails((prevDetails)=>{
          const newDetails = {...prevDetails, [e.target.name] : e.target.value}
            props.passdata(newDetails)
            return newDetails
        })
    }
  
    return (
    <div className='personal-details'>
      <h2>Personal Details</h2>
      <input type="text" name='name' value={Details.name} onChange={handleChange} placeholder={"Name"}/>
      <input type="text" name='title' value={Details.title} onChange={handleChange} placeholder={"Title"}/>
      <input type="number" name='phone' value={Details.phone} onChange={handleChange} placeholder={"Phone number"}/>
      <input type="email" name='email' value={Details.email} onChange={handleChange} placeholder={"Email"}/>
      <input type="text" name='adress' value={Details.adress} onChange={handleChange} placeholder={"Adress"}/>

    </div>
  )
}

export default Personal
