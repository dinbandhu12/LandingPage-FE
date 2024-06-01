import Image from 'next/image'
import { relative } from 'path'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto bg-slate-300'>
      <div className="text-center mt-20 p-4 lg:p-20 lg:max-w-3xl lg:mx-auto">
        <h1 className="text-3xl lg:text-5xl font-medium mb-8">Building unique digital brands for your business</h1>
        <p className="mb-8 text-sm lg:text-lg">Elevate your brand with Loading, where creativity knows no bounds. We specialize in crafting experiences that leave a lasting impression. Let's turn your vision into reality.</p>
        <button className="bg-sky-800 text-white py-2 px-4 rounded hover:bg-sky-700">DISCOVER OUR WORKS
        </button>
      </div>

        <div className='pt-10 px-4 lg:pt-10 relative lg:h-[885px] lg:w-[1300px] cover'>
          <Image 
            src="/i0.jpg"
            alt='hero-img'
            width={1300}
            height={800}
          />
        </div>
    </div>
  )
}

export default Hero