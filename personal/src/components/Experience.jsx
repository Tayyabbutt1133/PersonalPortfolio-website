import React from 'react'
import {EXPERIENCES } from '../constants/index';
// import Tech from './Tech';

export default function Experience() {
  return (
      <>
          <div className=' border-b border-neutral-900 pb-4'>
              <h2 className=' my-20 text-center text-4xl'>Work Experiences</h2>
              <div>
                  {
                      EXPERIENCES.map((exper, index) => (
                          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                              <div className=' w-full lg:w-1/4'>
                                  <p className=' mb-2 text-sm text-neutral-400'>{exper.year}</p>
                              </div>
                              <div className=' w-full max-w-xl lg:w-3/4'>
                                  <h6 className=' mb-2 font-semibold'>
                                      {exper.role} - <span className=' text-sm text-purple-100'>
                                          {exper.company}
                                      </span>
                                  </h6>
                                  <p className=' mb-4 text-neutral-400'>{exper.description}</p>
                                  {
                                      exper.technologies.map((tech,index) => (
                                          <span className=' mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800' key={index}>{tech}</span>
                                     ))
                                  }
                              </div> 
                        </div>
                    ))
                  }
              </div>
      </div>
      </>
  )
}
