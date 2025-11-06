import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className='bg-white shadow p-4'>
      <div className='max-w-4xl mx-auto flex justify-between items-center'>
        <Link to='/' className='font-bold text-lg'>MyBrandName</Link>
        <div className='space-x-4'>
          <Link to='/pricing'>Pricing</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </div>
      </div>
    </nav>
  )
}
