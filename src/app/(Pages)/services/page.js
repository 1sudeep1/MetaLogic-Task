'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaPlayCircle } from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { serviceData } from './data';

const Services = () => {
    const [iconBg, setIconBg] = useState('bg-gray-300')
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
            <h1 className=' flex justify-center items-center gap-2 text-center pt-20 text-4xl font-semibold text-[#002663] relative'>Our <span className='text-[#CD3534]'>Services</span>
                <div className='absolute h-1 w-52 -bottom-1 bg-[#002663]'>
                    <div className='w-2 h-2 bg-[#CD3433] absolute bottom-0 rounded animate-dot'></div>
                </div>
            </h1>
            <div className='p-20 flex flex-wrap justify-around'>
                {serviceData.map((item) => {
                    return (
                        <>
                            <div className='flex cursor-pointer flex-col justify-center items-center gap-2 hover:bg-[#002663] p-3 hover:text-white rounded-2xl hover:scale-110 transition-all duration-500' onMouseEnter={() => setIconBg('bg-white')} key={item}>
                                <div className={`${iconBg} rounded-xl`}>
                                    <Image className='p-2' src={item.iconImg} alt={item.altTitle} width={50} height={50} />
                                </div>
                                <div className='text-center'>
                                    <h2 className='text-xl font-semibold'>{item.serviceTitle}</h2>
                                    <p>{item.serviceDescription}</p>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>


            <div className='md:flex justify-center items-center bg-[#ECECEE] p-10'>
                <div className='md:w-1/2 mx-auto mb-5 p-5 md:p-0'>
                    <h2 className='text-3xl font-bold text-[#002663]'>What is the reason behind the changes?</h2>
                    <p className='italic inline'><RiDoubleQuotesL className='text-[#002663] text-3xl' />The main reason for the changes to the service page is that it currently appears as a pop-up modal when the Service menu item in the navbar is clicked, while other menu items lead to full pages. This caused confusion for me during my first visit because I was not sure if it was a standalone page or just a modal. Additionally, even though there is a separate service page available, accessing it was not straightforward, making it less intuitive for users to find detailed service information. Another issue is that when the service modal is open, you can still see the page below it, which adds to the confusion about whether the content belongs to the service section or something else. So I decided to recreate service page and your sub-service page is quite good so, I just created a parent service page, On the other hand your website has a captivating design with interesting animations. Therefore, these are the reasons behind the suggested changes.
                        I hope you understand my points.<RiDoubleQuotesR className='text-[#002663] inline-block text-3xl' /></p>
                    <p className='italic'>Thank you!!</p>
                </div>
                <Image className='rounded mx-auto' src='/reason.jpg' alt='metalogic company service banner' width={300} height={100} />
            </div>


        </section>
    )
}

export default Services
