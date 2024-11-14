import React from 'react'
import Logo from "../assets/Logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='py-5'>
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-12">
                    <img src={Logo} alt="" />
                    <ul className='flex gap-6'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li>Courses</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="flex gap-8">
                    <button>Sign Up</button>
                    <button className='text-lg px-10 py-3 bg-primary rounded-md text-white'>Login</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
