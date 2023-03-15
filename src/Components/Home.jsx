import React from "react";
import Nav from '../Components/Nav'

export default function Home() {
    return (
        <div className='bg-mobile-home h-screen bg-no-repeat bg-cover w-screen flex flex-col md:bg-tablet-home xl:bg-desktop-home'>
            <Nav />
            <div className="xl:mt-40 xl:ml-40 xl:flex xl:gap-x-[32rem] 2xl:ml-64 2xl:mt-24">
                <div className="mt-12 md:mt-28">
                    <h5 className='text-secondary font-barlow-condensed uppercase text-center tracking-[0.169rem] mb-2 md:text-xl xl:text-[28px] xl:text-left xl:tracking-[0.295rem]'>
                        So, You want to Travel to
                    </h5>
                    <h1 className='text-primary font-bellefair text-[5rem] text-center mb-4 md:text-[9.375rem] md:mb-0'>
                        SPACE
                    </h1>
                    <p className="text-secondary font-barlow text-center text-[0.95rem] max-w-[327px] mx-auto leading-6 md:text-base md:max-w-[444px] md:leading-7 xl:text-left xl:text-lg xl:leading-8">
                        Let's face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we'll give you a truly out of this world experience!
                    </p>
                </div>
                <div className="flex justify-center mt-12">
                    <button className="bg-primary text-dark w-36 h-36 rounded-full font-bellefair tracking-[0.0781rem] absolute mt-6 hover:h-48 hover:w-48 hover:mt-1 hover:border-[20px] hover:border-gray transition-all duration-500 md:w-60 md:h-60 md:text-3xl xl:mt-40 xl:w-64 xl:h-64 xl:text-[2rem]">
                        EXPLORE
                    </button>
                </div>
            </div>
      </div>
    )
}