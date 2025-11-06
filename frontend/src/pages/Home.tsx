import React from 'react'
import LogoGenerator from '../components/LogoGenerator'

export default function Home(){
  return (
    <div className='max-w-4xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Welcome to MyBrandName</h1>
      <p className='mb-6'>AI-powered branding assistant — scaffolded demo.</p>
      <LogoGenerator />
    </div>
  )
}
