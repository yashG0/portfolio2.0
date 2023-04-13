import Link from 'next/link'
import React from 'react'
import { MdNightsStay, MdWbSunny } from 'react-icons/md'


const Header = ({ darkMode, setDarkMode }) => {
    return (
        <>
            <header className='bg-white dark:bg-gray-900 text-gray-600 dark:text-teal-100 duration-200'>
                <nav className='flex justify-between items-center p-5'>

                    <Link href={'/'}>
                        <h1 className='uppercase text-3xl underline-offset-4 hover:underline hover:cursor-pointer hover:scale-105 duration-150'>YASHTECH</h1>
                    </Link>
                    <div className='' onClick={() => setDarkMode(!darkMode)}>
                        {
                            darkMode ? <MdNightsStay className='text-2xl cursor-pointer' /> : <MdWbSunny className='text-2xl cursor-pointer' />
                        }
                    </div>

                </nav>
            </header>

        </>
    )
}

export default Header