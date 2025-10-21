import React from 'react'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'

const App = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <Dashboard />      
    </div>
  )
}

export default App
