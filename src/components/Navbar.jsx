import { useState, Image } from 'react';
import logo from '../assets/plum.png'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-white">
                    <img src={logo} alt="" className='h-6'/>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {/* Hamburger Icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Menu Items */}
                <div className={`flex-col md:flex-row md:flex md:space-x-4 items-center absolute md:static left-0 top-16 md:top-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'}`}>
                    <a href="#" className="text-[#FFEBDB] hover:text-[#FF4052]">Product</a>
                    {/* <a href="#" className="text-[#FFEBDB] hover:text-[#FF4052]">Experience</a> */}
                    <a href="#" className="text-[#FFEBDB] hover:text-[#FF4052]">Explore</a>
                    {/* <a href="#" className="text-[#FFEBDB] hover:text-[#FF4052]">Careers</a> */}

                    <button className="bg-transparent text-[#FFEBDB] border border-[#FF4052] py-2 px-4 rounded hover:bg-[#FF4052]">Login</button>
                    {/* <button className="bg-[#FF4052] text-white py-2 px-4 rounded hover:bg-transparent hover:border hover:border-[#FF4052]">Get a quote</button> */}
                </div>
            </div>
        </nav>
    )
}
