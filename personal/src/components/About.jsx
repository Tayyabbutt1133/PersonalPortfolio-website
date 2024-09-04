import React from 'react'
import aboutimg from '../assets/AboutUs.jpg';
import { ABOUT_TEXT} from '../constants/index.js'

export default function About() {
  return (
      <>
          <div id='about' className=' border-b border-neutral-900 pb-4'>
              <h1 className=' font-lexend uppercase my-20 text-center text-4xl'>About <span className=' text-neutral-500'>Me</span></h1>
              <div className=' flex flex-wrap'>
                  <div className=' w-full lg:w-1/2 lg:p-8'>
                      <div className=' flex items-center justify-center'>
                          <img className=' rounded-xl' src={aboutimg} alt="" />
                      </div>
                      </div>
                      <div className=' w-full lg:w-1/2'>
                          <div className=' flex justify-center lg:justify-start'>
                              <p className=' my-24 max-w-xl py-6 text-sm'>{ABOUT_TEXT}</p>
                      </div>
                  </div>
              </div>
      </div>
      </>
  )
}
