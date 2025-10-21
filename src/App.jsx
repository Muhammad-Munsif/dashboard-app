import React, { useState, useEffect } from 'react'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile screen
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  return (
    <div className='flex'>
      <Sidebar 
        sidebarToggle={sidebarToggle}
        isMobile={isMobile}
        setSidebarToggle={setSidebarToggle}
      />
      <Dashboard  
        sidebarToggle={sidebarToggle} 
        setSidebarToggle={setSidebarToggle}
        isMobile={isMobile}
      />      
    </div>
  )
}

export default App