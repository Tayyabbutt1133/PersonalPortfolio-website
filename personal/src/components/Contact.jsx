import React from 'react'

export default function Contact() {
  return (
      <>
         <div
      id="contact"
      className="w-full  p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className=" font-lexend uppercase my-20 text-center text-4xl">
            Contact Me
          </p>
          <p className=" text-gray-500 font-semibold text-center">SUBMIT FORM TO GET IN TOUCH WITH ME</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/RdGLp0eD"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
      </div>
      </>
  )
}
