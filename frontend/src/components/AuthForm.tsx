import React, { useState } from 'react'

export default function AuthForm({ onSubmit }: { onSubmit: (data:any)=>void }){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit({email, password})}} className='max-w-md'>
      <label className='block'>Email<input value={email} onChange={e=>setEmail(e.target.value)} className='border p-2 w-full' /></label>
      <label className='block mt-2'>Password<input type='password' value={password} onChange={e=>setPassword(e.target.value)} className='border p-2 w-full' /></label>
      <button className='mt-4 px-4 py-2 bg-blue-600 text-white'>Submit</button>
    </form>
  )
}
