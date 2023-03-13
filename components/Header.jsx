import React from 'react'
import { MdNightsStay, MdWbSunny } from 'react-icons/md'


const Header = ({ darkMode, setDarkMode }) => {
    return (
        <>
            <header className='bg-white dark:bg-gray-900 text-gray-900 dark:text-teal-200'>
                <nav className='flex justify-between items-center p-5'>

                    <h1 className='uppercase text-lg'>YASHTECH</h1>
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