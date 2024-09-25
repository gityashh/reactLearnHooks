import React, { useState } from 'react'


const App = () => {
  const [time, setTime] = useState(new Date());

  const updateTime = () => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }

  updateTime();

  return (
    <div className='flex justify-center items-center h-screen'>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  )
}

export default App
