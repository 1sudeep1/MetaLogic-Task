'use client'
import Image from 'next/image'
import React from 'react'
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
    return (
        <header className="body-font bg-[#002663] text-white">
            <div className="container mx-auto flex flex-wrap p-5 flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src='/metalogo.png' alt='metalogic company logo' width={50} height={50} />
                    <span className="ml-3 text-3xl text-white">MetaLogic</span>
                </a>
                <nav className="hidden ml-auto md:mr-auto lg:flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5">Home</a>
                    <a className="mr-5">Services</a>
                    <a className="mr-5">Career</a>
                    <a className="mr-5">Blogs</a>
                    <a className="mr-5">About Us</a>
                </nav>
                <button className="hidden lg:inline-flex items-center bg-[#E53B3A] border-0 py-1 px-3 focus:outline-nonerounded text-base mt-4 md:mt-0">
                    Get In Touch
                </button>

                <button className='text-3xl ms-auto lg:hidden' type="button" data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example">
                    <IoMenu className='text-[#E53B3A]' />
                </button>

                <div id="drawer-example" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto duration-700 transition-transform -translate-x-full bg-white w-full dark:bg-gray-800" tabIndex={-1} aria-labelledby="drawer-label">
                    <div className=' flex flex-col items-center gap-3'>
                    <nav className=" flex flex-col text-center gap-3 text-[#002663]">
                        <a className="mr-5">Home</a>
                        <a className="mr-5">Services</a>
                        <a className="mr-5">Career</a>
                        <a className="mr-5">Blogs</a>
                        <a className="mr-5">About Us</a>
                    </nav>
                        <button className="bg-[#002663] border-0 py-1 px-3 focus:outline-nonerounded text-base mt-4 md:mt-0">
                            Get In Touch
                        </button>
                    </div>

                    <button type="button" data-drawer-hide="drawer-example" aria-controls="drawer-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close menu</span>
                    </button>

                </div>
            </div>
        </header>
    )
}

export default Navbar