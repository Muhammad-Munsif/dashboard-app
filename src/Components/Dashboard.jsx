import React from 'react'
import Navbar from './Navbar'

const Dashboard = ({sidebarToggle, setSidebarToggle,isMobile}) => {
  return (
    <div className='w-full'>
      <Navbar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} isMobile={isMobile}/>
    </div>
  )
}

export default Dashboard
