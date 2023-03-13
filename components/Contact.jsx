import React from 'react'
import PageSection from './common/PageSection';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import contact from '../assets/mobile.png'
import Image from 'next/image';
import Link from 'next/link';


const Contact = () => {
  const SOCIAL = [
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
    }
  ]

  return (
    <>
      <PageSection title={'Contact📞'} subTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore voluptatum laborum dolor distinctio? Deleniti, animi amet quisquam fuga minima enim porro.'}>
        <div className='flex flex-col items-center justify-center gap-8 text-center'>
          <div>
            <Image src={contact} width={100} height={100} className='w-32 h-32' />
          </div>
          <div>
            <p className='max-w-xl md:max-w-lg font-extralight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, porro vitae doloremque debitis, ullam quibusdam exercitationem incidunt id accusamus autem dolor?</p>
          </div>
          <div className='flex w-full items-center justify-evenly text-3xl hover:'>
            {
              SOCIAL.map(({ id, link, icon }) => (
                <Link href={link} target='_blank' rel='noopener noreferrer' className='duration-200 ease-in-out hover:text-rose-600'>
                  {icon}
                </Link>
              ))
            }
          </div>


          {/* BOTTOM FORM */}
          <div className='p-8 text-left w-full flex items-center justify-center'>
            <form action="https://getform.io/f/7056ac53-43d4-4de6-ade6-6da7e4cf2261" method='POST' className='md:w-full'>
              <div className='gap-4 w-full'>
                <div className='flex flex-col'>
                  <label htmlFor="" className='capitalize text-sm py-2 font-extralight'>name</label>
                  <input type="text" name='name' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="" className='capitalize text-sm py-2 font-extralight'>phone</label>
                  <input type="text" name='phone' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="" className='capitalize text-sm py-2 font-extralight'>email</label>
                  <input type="text" name='email' className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white' />
                </div>
                <div className='flex flex-col my-2'>
                  <label htmlFor="" className='capitalize text-sm py-2 font-extralight'>message</label>
                  <textarea name="message" id="" cols="30" rows={'8'} className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none'></textarea>
                </div>
              </div>
              <div className='flex items-center justify-center'>
                <button className='my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-3 uppercase rounded-md tracking-wider cursor-pointer duration-200 hover:scale-105 px-6 hover:from-teal-500 hover:to-rose-600'>Send Message</button>
              </div>
            </form>
          </div>

        </div>
      </PageSection>
    </>
  )
}

export default Contact;