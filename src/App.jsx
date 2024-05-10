import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import './App.css';


function App() {
  const [subjects, setSubjects] = useState([]);
  const [hours, setHours] = useState('');
  const [subject, setSubject] = useState(''); 

  const AddSubject = () => {
    if (subject && hours !== '') {
      const newSubject = { subject: subject, hours: parseInt(hours) };
      setSubjects([...subjects, newSubject]);
      setSubject('');
      setHours(''); 
    }
  }


  const increaseBtn = (index)=>{
    const update = [...subjects];
    update[index].hours += 1;
    setSubjects(update);
  }

  const decreaseBtn = (index)=>{
    const update = [...subjects];
    update[index].hours -= 1;
    setSubjects(update);
  }


  const remove = (index) => {
    console.log("Removing subject at index:", index);
    const updatedSubjects = [...subjects];
    updatedSubjects.splice(index, 1);
    setSubjects(updatedSubjects);
  };
  


  return (
    <>
      <div>
        <div className='flex flex-col gap-10'>
          <h1>Geekster Education Planner</h1>
          <div className='flex gap-3 justify-center'>
            <input
              className='pl-4'
              placeholder='Subject'
              type="text"
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
            />

            <input
              placeholder='Hours'
              className=' w-24 pl-4'
              type="number"
              value={hours} 
              onChange={(e) => setHours(e.target.value)} 
            />

            <button onClick={AddSubject}>ADD</button>
          </div>

          {subjects.map((subject, index) => (
            <div key={index} className="flex justify-center items-center gap-5">
              <div>{subject.subject} - {subject.hours} hours</div>
              <div className='flex gap-6 items-center'>
              <button onClick={()=>increaseBtn(index)}><FontAwesomeIcon icon ={faPlus} /> </button>
              <button onClick={()=>decreaseBtn(index)}><FontAwesomeIcon icon = {faMinus} /></button> 
              
              
              <button onClick={()=>remove(index)}><FontAwesomeIcon icon={faTrashCan} size="xl" className=' cursor-pointer'/></button>
              </div>  
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
