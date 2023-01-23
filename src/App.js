import React from 'react'
import "./App.css"
import Personal from './components/Personal'
import { useState } from 'react';

function App() {
  const [PersonalDetails, setPersonalDetails] = useState("");
  
  
  return (
    <div className='cv-field'>
      <div className='get-details'>
        <Personal passdata={setPersonalDetails}/>
      </div>

      
    </div>
  )
}

export default App
