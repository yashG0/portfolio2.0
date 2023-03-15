import React from 'react';



import commerce from '../assets/commerce.png'
import research from '../assets/research.png';
import web from '../assets/web.png';
import mobile from '../assets/mobile.png';
import Image from 'next/image';
import PageSection from './common/PageSection';




const Services = () => {

    const myServices = [

        {
            id: 1,
            image: commerce,
            title: 'ECommerce Website',
        },
        {
            id: 2,
            image: web,
            title: 'Web Development',
        },
        {
            id: 3,
            image: mobile,
            title: 'Mobile Development',
        },
        {
            id: 4,
            image: research,
            title: 'Research & Development',
        },
    ];

   

    return (
        <>
            <PageSection title={'Services🛠️'} subTitle={'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore tempore rerum cum, accusantium illum hic, enim quae, magni excepturi '}>

                <div className='grid gap-10 lg:grid-cols-2'>

                
                    {
                        myServices.map(({id,image,title})=>(
                            <div key={id} className='flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110 cursor-pointer hover:shadow-2xl hover:shadow-gray-300'>
                                <Image src={image} width={100} height={100} className='w-36 h-36 md:w-44 md:h-44 object-contain hover:scale-110 duration-200 overflow-hidden'/>
                                <h3 className='mt-5 text-base'>{title}</h3>
                            </div>
                        ))  
                    }
                    </div>

            </PageSection>
        </>
    )
}

export default Services;