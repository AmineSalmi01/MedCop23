import React from 'react'
import imageBackground from '../images/Intersection 14.png';

const ContactUs = () => {
  return (
    <div>
        <div className='container mx-auto py-6'>
            <div className='flex w-8/12 mx-auto shadow-lg'>
                <div className='w-1/2 py-16 px-12 bg-[#2575BA]'>
                  <h1 className='text-white text-3xl mb-4 w-full'>Claim your Seat</h1>
                  <form action="#" className='mt-16' >
                    <div className='grid grid-cols-1 gap-5'>
                      <input type="text" placeholder='Full Name' className='border border-white py-1 px-2 bg-[#2575BA] placeholder-white'/>
                      <input type="text" placeholder='Email' className='border border-white py-1 px-2 bg-[#2575BA] placeholder-white'/>
                      <input type="text" placeholder='Phone Number' className='border border-white py-1 px-2 bg-[#2575BA] placeholder-white'/>
                    </div>
                    <div className='mt-5'>
                      <button className='w-full bg-white py-3 text-center'>CLAIM</button>
                    </div>
                  </form>
                </div>
                <div className='w-1/2'> 
                  <img src={imageBackground} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs