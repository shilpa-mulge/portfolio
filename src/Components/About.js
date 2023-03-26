import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full  h-screen bg-gradient-to-b from-gray-800 to-black text-white lg:pl-[100px]'>
    <div  className='w-full flex flex-col justify-center item-center h-full ' >
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-500'>About</p>
            </div>
            <div></div>
        </div>
        <div className='max-w-screen-lg p-4  w-full px-4  grid sm:grid-cols-2 gap-8 left-0' >
            <div className=' sm:text-right text-4xl font-bold'>
                <p>Hi. I'm Shilpa, nice to meet you. Please take a look around
                    </p>
                </div>
            <div>
                <p>
            I'm interested in the Web Development because Web development is a fast-paced, challenging career centered on creative problem-solving and continuous innovation.
            </p>
            </div>
        </div>
      </div>
      </div>
  )
}

export default About