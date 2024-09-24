import React, { useState } from 'react'


const App = () => {
  const [info, setInfo] = useState('Yash');
  const changeInfo = () => {
    setInfo('Yash rajput');
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <h1>{info}</h1>
      <button className='border border-zinc-500 rounded-md p-2 px-4 py-2' onClick={changeInfo}>Click me</button>
    </div>
  )
}

export default App
