import React from 'react'
import "./App.css"
import Personal from './components/Personal'
import { useState } from 'react';
import Work from './components/Work';

function App() {
  const [PersonalDetails, setPersonalDetails] = useState("");
  const [WorkDetails, setWorkDetails] = useState('');
  
  return (
    <div className='cv-input-field'>
      <div className='get-details'>
        <Personal passdata={setPersonalDetails}/>
        <Work passdata={setWorkDetails}/>
      </div>
      <div className="display-cv">
        {PersonalDetails.name}
      </div>
      {WorkDetails ? <div>
        {WorkDetails.map((detail)=>{
          return (
            <div>
              <div>
                {detail.company}
              </div>
              <div>
                {detail.start}
              </div>
              <div>
                {detail.end}
              </div>
            </div>
          )
        })}
      </div> : null}
      
    </div>
  )
}

export default App
