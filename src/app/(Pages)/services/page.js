import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

const Services = () => {
    return (
        <section>
            <div className='md:flex justify-around items-center bg-[#ECECEE]'>
                <div className='md:order-2'>
                    <Image className='h-[36rem] rounded mx-auto' src='/services.jpg' alt='metalogic company service banner' width={400} height={300} />
                </div>
                <div className='md:max-w-[40%] md:text-left text-center my-10'>
                    <h1 className='text-5xl font-semibold mb-5 text-[#002663]'>Better <span className='text-[#CD3534]'>Services</span> <br />
                        for our users
                    </h1>
                    <p>
                        We provide a range of IT services & support. Our tailored solutions help businesses streamline operations and achieve their goals with reliable expertise.</p>
                    <div as={Link} href='#' className='justify-center md:justify-start mt-5 pb-10 flex items-center gap-2 cursor-pointer hover:font-bold' >
                        <FaPlayCircle className='text-3xl text-[#CD3433] animate-spin' />
                        <p className='text-[#002663] text-sm'>Watch Video</p>
                    </div>
                </div>
            </div>
            <h1 className='text-center pt-20 text-4xl font-semibold text-[#002663]'>Our <span className='text-[#CD3534]'>Services</span></h1>
            <div className='p-20 flex flex-wrap justify-around'>
                <div className='flex cursor-pointer flex-col justify-center items-center gap-2 hover:bg-[#002663] p-3 hover:text-white rounded-2xl'>
                    <div className='bg-gray-300 rounded-xl'>
                        <Image className='p-2' src='/computer.svg' alt='software development icon' width={50} height={50} />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Custom Software Development</h2>
                        <p>Tailored software solutions for your needs.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 hover:bg-[#002663] p-3 hover:text-white rounded-2xl'>
                    <div className='bg-gray-300 rounded-xl'>
                        <Image className='p-2' src='/computer.svg' alt='software development icon' width={50} height={50} />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Custom Software Development</h2>
                        <p>Tailored software solutions for your needs.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 hover:bg-[#002663] p-3 hover:text-white rounded-2xl'>
                    <div className='bg-gray-300 rounded-xl'>
                        <Image className='p-2' src='/computer.svg' alt='software development icon' width={50} height={50} />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Custom Software Development</h2>
                        <p>Tailored software solutions for your needs.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 hover:bg-[#002663] p-3 hover:text-white rounded-2xl'>
                    <div className='bg-gray-300 rounded-xl'>
                        <Image className='p-2' src='/computer.svg' alt='software development icon' width={50} height={50} />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Custom Software Development</h2>
                        <p>Tailored software solutions for your needs.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 hover:bg-[#002663] p-3 hover:text-white rounded-2xl'>
                    <div className='bg-gray-300 rounded-xl'>
                        <Image className='p-2' src='/computer.svg' alt='software development icon' width={50} height={50} />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Custom Software Development</h2>
                        <p>Tailored software solutions for your needs.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 hover:bg-[#002663] p-3 hover:text-white rounded-2xl'>
                    <div className='bg-gray-300 rounded-xl'>
                        <Image className='p-2' src='/computer.svg' alt='software development icon' width={50} height={50} />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Custom Software Development</h2>
                        <p>Tailored software solutions for your needs.</p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center gap-2 hover:bg-[#002663] p-3 hover:text-white rounded-2xl'>
                    <div className='bg-gray-300 rounded-xl'>
                        <Image className='p-2' src='/computer.svg' alt='software development icon' width={50} height={50} />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Custom Software Development</h2>
                        <p>Tailored software solutions for your needs.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 hover:bg-[#002663] p-3 hover:text-white rounded-2xl'>
                    <div className='bg-gray-300 rounded-xl'>
                        <Image className='p-2' src='/computer.svg' alt='software development icon' width={50} height={50} />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Custom Software Development</h2>
                        <p>Tailored software solutions for your needs.</p>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 hover:bg-[#002663] p-3 hover:text-white rounded-2xl'>
                    <div className='bg-gray-300 rounded-xl'>
                        <Image className='p-2' src='/computer.svg' alt='software development icon' width={50} height={50} />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Custom Software Development</h2>
                        <p>Tailored software solutions for your needs.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
