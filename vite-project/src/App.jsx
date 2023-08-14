import { useState } from 'react'
import './App.css'

function App() {
  
  const [workTime, setWorkTime] = useState(1500);
  const [restTime, setRestTime] = useState(500);
  const [working, setWorking] = useState(true);
  const [rest, setRest] = useState(false);
  const [start, setStart] = useState(false);
  let countdownInterval;


  let countDown = () => {
    if (working) {
      countdownInterval = setInterval(() => {
      if (workTime > 0) {
        setWorkTime(workTime);
        updateTime();
      } else {
        clearInterval(countdownInterval);
        setRest(true);
        setWorking(false);
      }
    }, 1000); 
    } else if (rest) {
      countdownInterval = setInterval(() => {
      if (restTime > 0) {
        setRestTime(restTime - 1);
        updateTime();
      } else {
        clearInterval(countdownInterval);
        setRest(false);
        setWorking(true);
      }
    }, 1000); 
    }
    
  }

  const updateTime = () => {
    if (working) {
      document.getElementById("display").innerHTML = workTime;
    } else if (rest) {
      document.getElementById("display").innerHTML = restTime;
    }
  }

  const resetTime = () => {
    setWorkTime(1500);
    setRestTime(500);
    updateTime();
  }

  
    

  return (
    <>
    <div className='flex justify-center my-20'>
     <h1 class="text-5xl font-extrabold dark:text-white">  
        Pomodoro Timer
      </h1>
    </div>

    <div className='flex justify-center bg-teal-300 '>
    <h1 id="display" className="text-4xl font-bold dark:text-white my-10">{workTime}</h1>
    </div>

    <div className='flex justify-center my-5'>
    <button onClick= {countDown} className="bg-indigo-600 text-white p-5 rounded-md mx-5">Start Timer</button>
    <button onClick={() => {
      clearInterval(countdownInterval);
      }} className="bg-red-500 text-white p-5 rounded-md mx-5 ">Pause Timer</button>
    <button onClick={resetTime} className='bg-purple-500 mx-5 text-white p-5 rounded-md'>Reset</button>
    </div>
    </>
  )
}

export default App
