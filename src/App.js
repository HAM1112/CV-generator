import React from 'react'
import "./App.css"
import Personal from './components/Personal'
import { useState } from 'react';
import Work from './components/Work';
import Education from './components/Education';

function App() {
  const [PersonalDetails, setPersonalDetails] = useState("");
  const [WorkDetails, setWorkDetails] = useState('');
  const [EducationalDetails, setEducationalDetails] = useState('');


  return (
    <div className='cv-input-field'>
      <div className='get-details'>
        <Personal passdata={setPersonalDetails}/>
        <Education passdata={setEducationalDetails}/>
        <Work passdata={setWorkDetails}/>
      </div>
      <div className="display-cv">
        {
          //display personal details
        <div className='heading'>
          
          <div>
            <h1>{PersonalDetails.name}</h1>
            <h3>{PersonalDetails.title}</h3>
          </div>


          <div className='heading-sidebar'>
            <div>
              <span className="material-symbols-outlined">call</span>
              <div>{PersonalDetails.phone}</div>
            </div>
            <div>
              <span className="material-symbols-outlined">mail</span>
              <div>{PersonalDetails.email}</div>
            </div>
            <div>
              <span className="material-symbols-outlined">house</span>
              <div>{PersonalDetails.adress}</div>
            </div>
          </div>
        </div>}
        
          {/* Work details */}
            
          {WorkDetails ? <div>
            <h2>Work experience</h2>
            {WorkDetails.map((Work)=>{
            return ( <p>Worked in {Work.company} as {Work.position} from {Work.start} to {Work.end}.</p> )
          })}
          </div>:null}
          
        

        {
          // Education details
          
          <div>
          {EducationalDetails ? <div>
            <h2>Educational Qualifications</h2>
            {EducationalDetails.map((education)=>{
              return ( <p> Completed {education.program} from {education.university} within {education.start} - {education.end} Acadamic Year.</p> )
            })}
          </div>:null }
            
          </div>
        }


      </div>
      
      
    </div>
  )
}

export default App
