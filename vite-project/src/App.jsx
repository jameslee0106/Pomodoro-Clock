import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-center my-20'>
     <h1 class="text-5xl font-extrabold dark:text-white">  
        Pomodoro Timer
      </h1>
    </div>

    <div className='flex justify-center bg-teal-300 '>
    <h1 className="text-4xl font-bold dark:text-white my-10">25:00</h1>
    </div>

    <div className='flex justify-center my-5'>
    <button className="bg-indigo-600 text-white p-5 rounded-md ">Start Timer</button>
    </div>
    </>
  )
}

export default App
