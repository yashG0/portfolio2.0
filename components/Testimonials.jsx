import React from 'react';
import PageSection from './common/PageSection';

import avatar from '../assets/avatar.png'
import Image from 'next/image';


const Testimonials = () => {

  const TESTIMONIAL = [
    {
      id: 1,
      image: avatar,
      name: 'John Doe',
      commentL: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At obcaecati quia atque laboriosam distinctio aut vero, quo quaerat dignissimos odio accusamus!'
    },
    {
      id: 2,
      image: avatar,
      name: 'Rahul',
      commentL: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At obcaecati quia atque laboriosam distinctio aut vero, quo quaerat dignissimos odio accusamus!'
    },
    {
      id: 3,
      image: avatar,
      name: 'Robert',
      commentL: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At obcaecati quia atque laboriosam distinctio aut vero, quo quaerat dignissimos odio accusamus!'
    }
  ];


  return (
    <>

      <PageSection title={'Testimonial💬'} subTitle={' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, recusandae ducimus, neque illum exercitationem qui nam provident quibusdam sit vitae consequatur.'}>

        <div className='max-w-xl flex flex-col gap-8'>
          {
            TESTIMONIAL.map(({ id, image, name, commentL }) => (
              <div className='flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300'>
                <div className='w-1/3'>
                  <Image src={image} alt='avatar' className='w-20 h-20 object-cover object-top pt-2'/>
                </div>
                <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                  <h3 className='text-xl font-semibold'>{name}</h3>
                  <p className='text-sm font-extralight'>{commentL}</p>
                </div>
              </div>
            ))
          }
        </div>
      </PageSection>
    </>
  )
}

export default Testimonials;