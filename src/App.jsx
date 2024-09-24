import React from 'react'

const App = () => {
  const info = (info) => {
    return info;
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <button className='border border-zinc-500 rounded-md p-2 px-4 py-2' onClick={() => info('Yash')}>Click me</button>
      <h1>{()=>info('Yash')}</h1>
    </div>
  )
}

export default App
