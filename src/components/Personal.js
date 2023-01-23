import React from 'react'
import { useState } from 'react';

function Personal(props) {
    const [Details, setDetails] = useState({ name:'' ,title:'' ,phone:'' , email: '', adress: '' });
  
    const handleChange = (e)=>{
        setDetails({...Details, [e.target.name] : e.target.value})
        props.passdata(Details)
        //props.setPersonalDetails(Details)
    }

    // const handleAdd = ()=>{
    // }
  
    return (
    <div className='personal-details'>
      <h2>Personal Details</h2>
      <input type="text" name='name' onChange={handleChange} placeholder={"Name"}/>
      <input type="text" name='title' onChange={handleChange} placeholder={"Title"}/>
      <input type="number" name='phone' onChange={handleChange} placeholder={"Phone number"}/>
      <input type="email" name='email' onChange={handleChange} placeholder={"Email"}/>
      <input type="text" name='adress' onChange={handleChange} placeholder={"Adress"}/>
      {/* <button onClick={handleAdd}>Add</button> */}
      {/* <div>
        <p>{Details.name}</p>
        <p>{Details.title}</p>
        <p>{Details.phone}</p>
        <p>{Details.email}</p>
        <p>{Details.adress}</p>
        <p>{"whatttt"}</p>
      </div> */}

    </div>
  )
}

export default Personal
