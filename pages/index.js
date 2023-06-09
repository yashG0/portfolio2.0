import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { useState } from 'react';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';





export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <>
      <Head>
        <title>Project: Portfolio_2.0</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" href="/portfolio.png" />
      </Head>


      <div className={darkMode && 'dark'}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        
        <main className='bg-white dark:bg-gray-900 text-gray-900 dark:text-indigo-200 duration-200'>
          <Hero />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  )
}
