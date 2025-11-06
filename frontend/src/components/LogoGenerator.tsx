import React from 'react'

export default function LogoGenerator(){
  // Placeholder UI only. In a real app this would call the backend /api/brand/logo
  const handleGenerate = async () => {
    alert('This is a mock generator. Replace with API call to backend.')
  }
  return (
    <div className='border p-4 rounded'>
      <h3 className='font-semibold mb-2'>Generate Logo</h3>
      <input placeholder='Brand name' className='border p-2 w-full mb-2' />
      <select className='border p-2 w-full mb-2'>
        <option>Modern Minimal</option>
        <option>Elegant</option>
        <option>Playful</option>
      </select>
      <button onClick={handleGenerate} className='px-4 py-2 bg-indigo-600 text-white'>Generate (Mock)</button>
    </div>
  )
}
