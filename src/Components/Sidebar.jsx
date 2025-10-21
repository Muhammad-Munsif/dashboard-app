import React from 'react'
import { FaCog, FaHome, FaPoll, FaRegEnvelope, FaRegFileAlt } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className='w-64 bg-indigo-500 fixed h-full px-4 py-2'>
        <div className='mx-4 my-2'>
            <h1 className='text-3xl font-semibold text-white'>Dashboard</h1>
        </div>
        <hr />
        <ul className='mt-3 text-white font-bold'>
            <li className='mb-2 rounded hover:shadow hover:bg-white hover:text-black py-2'>
                <a href="" className='px-3'>
                    <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
                    Home
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-white hover:text-black py-2'>
                <a href="" className='px-3'>
                    <FaRegFileAlt className='inline-block w-6 h-6 mr-2 -mt-2'/>
                    Blogs
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-white hover:text-black py-2'>
                <a href="" className='px-3'>
                    <FaPoll className='inline-block w-6 h-6 mr-2 -mt-2'/>
                    Reports
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-white hover:text-black py-2'>
                <a href="" className='px-3'>
                    <FaRegEnvelope className='inline-block w-6 h-6 mr-2 -mt-2'/>
                    Inbox
                </a>
            </li>
            <li className='mb-2 rounded hover:shadow hover:bg-white hover:text-black py-2'>
                <a href="" className='px-3'>
                    <FaCog className='inline-block w-6 h-6 mr-2 -mt-2'/>
                    Settings
                </a>
            </li>
        </ul>
      
    </div>
  )
}

export default Sidebar
