import React from 'react'
import logo from "../../assets/Logo/logo.png"
const Navbar = () => {
  return (
    <nav className='top-0 left-0 fixed w-full h-[84px] bg-linear-to-b from-[#004990] to-[#0A86FF] flex flex-row justify-evenly z-10'>
        <div className="absolute left-[44px] top-3">
            <img src={logo} alt="logo" />
        </div>
        <div className='relative -left-[10%]'>
            <ul className="absolute flex flex-row justify-evenly gap-6 top-6">
                <li className='text-white text-xl hover:text-blue-900'>
                    <a href="">Home</a>
                </li>
                <li className='text-white text-xl hover:text-blue-900'>
                    <a href="">Courses</a>
                </li>
                <li className='text-white text-xl hover:text-blue-900'>
                    <a href="">Mentors</a>
                </li>
                <li className='text-white text-xl hover:text-blue-900'>
                    <a href="">About</a>
                </li>
            </ul>
        </div>
        <div className="absolute top-6 right-[44px] flex justify-evenly gap-6">
            <button className='text-white w-[104px] h-[33px] border-2 border-white rounded-[16px] hover:bg-white hover:text-blue-700 cursor-pointer'>Login</button>
            <button className='text-blue-700 w-[104px] h-[33px] border-2 border-white rounded-[16px] bg-white cursor-pointer hover:bg-gray-400 hover:border-gray-400 hover:text-white'>Sign Up</button>
        </div>
    </nav>
  )
}

export default Navbar
