import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className='min-h-[calc(100vh-72px)] px-6 md:px-16 bg-pri flex flex-col items-start gap-6 md:gap-10 justify-center'>
        <h1 className='text-[40px] md:text-[70px] font-bold text-white leading-tight'>
            Find Your Dream Job!
        </h1>
        <p className='text-[20px] md:text-[30px] text-white'>
            Looking for a new job? We’re here to help! <br className='hidden md:inline' /> 
            Explore top companies, apply in minutes, and <br className='hidden md:inline' />
            find the right role that matches your skills <br className='hidden md:inline' />
            and passion.
        </p> 
        <button onClick={() => navigate("/About")} className='btn-p'>More details</button>
      </header>
    </>
  )
}

export default Home