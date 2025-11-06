import React from 'react'

export default function Pricing(){
  return (
    <div className='max-w-4xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Pricing</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='border p-4 rounded'>
          <h3 className='font-semibold'>Free</h3>
          <p>Starter plan</p>
        </div>
        <div className='border p-4 rounded'>
          <h3 className='font-semibold'>Pro</h3>
          <p>Paid plan</p>
        </div>
      </div>
    </div>
  )
}
