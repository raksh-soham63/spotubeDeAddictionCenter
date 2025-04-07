import React from 'react'
import logo from './assets/Spot.png';

const App = () => {
  return (
    <div className=' h-dvh w-full bg-slate-200 flex justify-center items-center' style={{ background: "linear-gradient(to bottom, rgba(37, 38, 25, 0.8), rgba(115, 120, 56, 1.1))" }}>
      <div className='absolute h-150 w-120  rounded-2xl' style={{ background: "rgba(69, 68, 17,0.25)" }}>

        <img src={logo} alt="Spotube Logo" className='h-55 mx-auto -my-7' />

        <div className=" dash relative left-38 bottom-14 w-45 border-1 border-white">
        
        </div>

        <p className='relative left-37 bottom-13 text-amber-300 font-semibold'>
          Sign Up to start Listening</p>

        <div className="email">
          <p className='relative left-24 bottom-4 text-white font-bold text-sm'>Email:</p>
          <input
            type="text"
            className="relative left-23 bottom-2 border border-white/30 w-72 h-12 bg-transparent text-white px-4 rounded"
          />
          <a className=' relative right-48 top-7 text-xs text-amber-200/90 underline' href="#">Use phone number instead</a>
          <p className='relative left-24 top-10 text-white font-bold text-sm'>Password:</p>
          <input
            type="text"
            className="relative left-23 top-11 border border-white/30 w-72 h-12 bg-transparent text-white px-4 rounded"
          />
          <p className='relative left-24 top-16 text-white font-bold text-sm'>Confirm Password:</p>
          <input
            type="text"
            className="relative left-23 top-17 border border-white/30 w-72 h-12 bg-transparent text-white px-4 rounded"
          />

          <button className='relative right-25 top-35 border-1 border-white/10 h-10 w-25 rounded-xl font-semibold text-white bg-opacity-50 hover:text-black' style={{ backgroundColor: "rgba(233, 237, 0, 0.5)" }}>Next</button>

          <a className="absolute right-38 bottom-10 underline text-xs text-amber-200/90" href="">Already have an account ? Sign in</a>

        </div>
      </div>
    </div>
  )
}

export default App
