import { useState } from 'react'
import './App.css'

function App() {
  let time = 1500;
  let countdownInterval;


  function countDown() {
    countdownInterval = setInterval(() => {
      if (time > 0) {
        time--;
        updateTime();
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000); 
  }

  function updateTime() {
    document.getElementById("display").innerHTML = time;
  }

  function resetTime() {
    time = 1500;
    updateTime();
  }

  function stopTime() {
    
  }
    

  return (
    <>
    <div className='flex justify-center my-20'>
     <h1 class="text-5xl font-extrabold dark:text-white">  
        Pomodoro Timer
      </h1>
    </div>

    <div className='flex justify-center bg-teal-300 '>
    <h1 id="display" className="text-4xl font-bold dark:text-white my-10">{time}</h1>
    </div>

    <div className='flex justify-center my-5'>
    <button onClick={countDown} className="bg-indigo-600 text-white p-5 rounded-md mx-5">Start Timer</button>
    <button className="bg-red-500 text-white p-5 rounded-md mx-5 ">Stop Timer</button>
    <button onClick={resetTime} className='bg-purple-500 mx-5 text-white p-5 rounded-md'>Reset</button>
    </div>
    </>
  )
}

export default App
