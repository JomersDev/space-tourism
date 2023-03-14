import React from "react";
import Nav from '../Components/Nav'

export default function Home() {
    return (
        <div className='bg-mobile-home h-screen bg-no-repeat bg-cover w-screen flex flex-col'>
            <Nav />
            <div className="mt-12">
                <h5 className='text-secondary font-barlow-condensed uppercase text-center tracking-[0.169rem] mb-4'>
                    So, You want to Travel to
                </h5>
                <h1 className='text-primary font-bellefair text-[5rem] text-center mb-4'>
                    SPACE
                </h1>
                <p className="text-secondary font-barlow text-center text-[0.95rem] max-w-[327px] mx-auto leading-6">
                    Let's face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we'll give you a truly out of this world experience!
                </p>
            </div>
            <div className="flex justify-center mt-12">
                <button className="bg-primary text-dark w-36 h-36 rounded-full font-bellefair tracking-[0.0781rem] absolute mt-6 hover:h-48 hover:w-48 hover:mt-1 hover:border-[20px] hover:border-gray transition-all duration-500">
                    EXPLORE
                </button>
            </div>
      </div>
    )
}