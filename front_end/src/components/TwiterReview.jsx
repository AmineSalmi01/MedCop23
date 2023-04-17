import React from 'react'
import img_twitter from '../images/review.twitter.png'
import {AiFillStar} from 'react-icons/ai'
import IconImg from '../images/logo.png'

const TwiterReview = () => {
  return (
    <div className='w-1/5 px-2 py-5'>
        <div className='bg-[#51BDEB] px-2 py-10'>
            <p className='text-white text-center text-[12px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Vivamus Lorem ipsum dolor 
            </p>
        </div>

        <div className='bg-white shadow-lg px-12 py-5 relative'>
            <div className=''>
              <img className='w-14 absolute bottom-24 left-28' src={img_twitter} alt="" />
              <div className='flex justify-center text-[#FCB901]'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
            </div>
            <h3 className='text-center'>Mike</h3>
            <p className='text-center text-[9px]'>Initiator, Chairman and Pilot, Solar Impulse</p>
            <div className='flex justify-center'>
                <img className='w-5' src={IconImg} alt="" />
                <h3 className='ml-2'>Brands</h3>
            </div>
        </div>
    </div>
  )
}

export default TwiterReview