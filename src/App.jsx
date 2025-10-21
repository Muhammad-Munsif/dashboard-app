import React, { useState } from 'react'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <div className='flex'>
      <Sidebar sidebarToggle={sidebarToggle}/>
      <Dashboard  sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle}/>      
    </div>
  )
}

export default App
