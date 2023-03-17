import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { icons } from 'react-icons'
import { FaTwitter, FaFacebook, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import avatar from '../assets/avatar.png'



const Hero = () => {


    const social = [
        {
            id: 1,
            link: 'https://twitter.com',
            icon: <FaTwitter />
        },
        {
            id: 2,
            link: 'https://facebook.com',
            icon: <FaFacebook />
        },
        {
            id: 3,
            link: 'https://linkedin.com',
            icon: <FaLinkedin />
        },

    ];

    // window.addEventListener("scroll", function () {
    //     const downArrow = document.querySelector(".down-arrow");
      
    //     if (downArrow !== null) {
    //       if (this.window.scrollY >= 2) {
    //         downArrow.classList.add("hide-down-arrow");
    //       } else {
    //         downArrow.classList.remove("hide-down-arrow");
    //       }
    //     }
    //   });
   
    return (
        <>
            <section className='min-h-screen flex flex-col justify-start items-center text-center'>
                <h2 className='text-5xl text-rose-600  uppercase font-bold'>Yash Gaurkar</h2>
                <h3 className='py-3 text-2xl'>Web Developer</h3>
                <p className='max-w-xl font-light text-gray-500'>Hello <span className='animate-pulse text-4xl'>👋</span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                {/* SOCIAL ICONS */}
                <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
                    {
                        social.map(({ id, link, icon }) => (
                            <Link href={link} key={id} className='cursor-pointer  hover:text-rose-500 hover:scale-125 duration-200' target='/' rel='noopener noreferrer'>
                                {icon}
                            </Link>
                        ))
                    }
                </div>

                {/* AVATAR AND RESUME */}
                <div>
                    <Image src={avatar} alt="avatar" className='w-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl pt-5 overflow-hidden hover:scale-105 duration-200 cursor-pointer' />
                    {/* <img src={avatar} alt="avatar" className='w-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-xl pt-5' /> */}

                    {/* <a href="/myResume.pdf" download={true} className='duration-200 flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg hover:to-rose-600 hover:from-teal-500 '>
                        Resume
                    </a> */}
                    <Link href='/myResume.png' className='duration-200 flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg hover:to-rose-600 hover:from-teal-500' target={'_blank'}>
                        Resume
                    </Link>


                </div>

                {/* ARROW DOWN ANIMATION */}
                <div>
                    <FaArrowDown className='text-gray-400 text-2xl mt-10 animate-bounce'/>
                </div>
            </section>
        </>
    )
}

export default Hero