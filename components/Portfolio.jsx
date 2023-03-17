import React from 'react'
import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa'
import Section from './common/PageSection'

import p1 from '../assets/p1.jpg'
import p2 from '../assets/p2.jpg'
import p3 from '../assets/p3.jpg'
import p4 from '../assets/p4.jpg'
import p5 from '../assets/p5.jpg'
import p6 from '../assets/p6.jpg'
import Image from 'next/image'
import Link from 'next/link'


const Portfolio = () => {

    const projects = [
        {
            id: 1,
            image: p1,
            title: 'Best App',
            github: "https://github.com/",
            demo: "https://nodeJs.org/en/",
        },
        {
            id: 2,
            image: p2,
            title: 'Best App',
            github: "https://github.com/",
            demo: "https://nodeJs.org/en/",
        },
        {
            id: 3,
            image: p3,
            title: 'Age Of Empires',
            github: "https://github.com/",
            demo: "https://nodeJs.org/en/",
        },
        {
            id: 4,
            image: p4,
            title: 'Best App',
            github: "https://github.com/",
            demo: "https://nodeJs.org/en/",
        },
        {
            id: 5,
            image: p5,
            title: 'Best App',
            github: "https://github.com/",
            demo: "https://nodeJs.org/en/",
        },
        {
            id: 6,
            image: p6,
            title: 'Best App',
            github: "https://github.com/",
            demo: "https://nodeJs.org/en/",
        }
    ];


    return (
        <>
            <Section title={'Portfolio⚒️'} subTitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde doloribus molestiae ipsum at deserunt id, veritatis eligendi ab quibusdam nisi distinctio commodi recusandae! Fuga cupiditate quae ad tempora ratione dignissimos alias modi!'>

                <div className='grid gap-8 lg:gap-14 lg:grid-cols-2 '>
                    {
                        projects.map(({ id, image, title, github, demo }) => (
                            <div key={id} className='max-w-lg flex shadow-xl dark:shadow-gray-600 rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-gray-500 duration-200 cursor-pointer'>
                                <Image src={image} alt={title} className='w-2/3 duration-200 hover:scale-125 hover:bg-contain overflow-hidden' />
                                <div className='w-1/3 flex flex-col items-center justify-evenly p-1'>
                                    <h2 className=''>{title}</h2>
                                    <Link href={github} target='_blank' rel='noopener noreferrer' className='text-lg cursor-pointer duration-150 hover:scale-110 md:text-xl lg:text-2xl'>
                                        <FaGithub size={30} />
                                    </Link>
                                    <Link href={demo} target='_blank' rel='noopener noreferrer' className='text-lg cursor-pointer duration-150 hover:scale-110 md:text-xl lg:text-2xl'>
                                        <FaExternalLinkSquareAlt size={30} />
                                        
                                    </Link>

                                    
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Section>
        </>
    )
}

export default Portfolio