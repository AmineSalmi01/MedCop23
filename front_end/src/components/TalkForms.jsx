import React from 'react'

const TalkForms = () => {
  return (
    <div className='container w-auto py-6'>
        <div className='w-6/12 mx-auto'>
            <form action="#">
                <div className='grid grid-cols-2 gap-5'>
                    <input type="text"placeholder='First Name' className='border border-black py-1 px-2 placeholder-black' />
                    <input type="text"placeholder='Last Name' className='border border-black py-1 px-2 placeholder-black' />
                </div>
                <div className='mt-5'>
                    <textarea className='border border-black py-1 px-2 w-full placeholder-black' placeholder='Message' name="message" cols="30" rows="10"> 
                    </textarea>
                </div>
                <div className='mt-5'>
                     <input type="text"placeholder='Email' className='border border-black py-1 px-2 placeholder-black w-full' />
                </div>
                <div className='mt-5'>
                     <input type="text"placeholder='Phone' className='border border-black py-1 px-2 placeholder-black w-full' />
                </div>
                <div className='mt-5'>
                    <button className='w-full bg-[#2575BA] py-3 text-center text-white hover:bg-[#2b86d6]'>Send</button>
                </div>
            </form>
        </div>
    </div>  
  )
}

export default TalkForms