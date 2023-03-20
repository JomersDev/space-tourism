import React, { useState } from "react";
import Nav from "../Components/Nav";
import {data} from '/data.js'


export default function Crew() {

    // 0 == Douglas, 1 == Mark, 2 == Victor, 3 == Anousheh
    const [crew, setCrew] = useState(data.crew[0])

    function handleCrew(index) {
        setCrew(data.crew[index])
    }

    console.log(crew)
    return (
        <div className='bg-fixed bg-mobile-crew md:bg-tablet-crew xl:bg-desktop-crew min-h-screen w-screen bg-no-repeat bg-cover flex flex-col pb-8'>
            <Nav />
            <div className="mx-6 mt-4 xl:mt-16">

                <div className="border-b border-gray-700 mb-8 flex flex-col items-center gap-y-8 md:border-none md:mb-14 xl:ml-20 xl:mb-0">
                    <div className="flex gap-x-4 md:self-start md:ml-10 md:text-[1.25rem] xl:text-[1.75rem]">
                        <p className="text-gray-500 font-barlow-condensed uppercase tracking-[0.16875rem] font-bold xl:tracking-[0.295rem]">02</p>
                        <p className="text-primary font-barlow-condensed uppercase tracking-[0.16875rem] xl:tracking-[0.295rem]">Meet your crew</p>
                    </div>
                    <img 
                        className="max-h-[13.875rem] md:hidden"
                        src={crew.images.png}
                        alt="crew member photo" />
                </div>

                <div className="xl:flex">
                    <div className="flex flex-col items-center md:flex-col-reverse xl:justify-center xl:items-start xl:ml-32">
                        <div className="flex gap-x-4 mb-8">
                            <button
                                onClick={() => handleCrew(0)} 
                                className="bg-gray-600 h-3 w-3 rounded-full hover:bg-gray-400 xl:h-4 xl:w-4"></button>
                            <button
                                onClick={() => handleCrew(1)}  
                                className="bg-gray-600 h-3 w-3 rounded-full hover:bg-gray-400 xl:h-4 xl:w-4"></button>
                            <button
                                onClick={() => handleCrew(2)}  
                                className="bg-gray-600 h-3 w-3 rounded-full hover:bg-gray-400 xl:h-4 xl:w-4"></button>
                            <button
                                onClick={() => handleCrew(3)}  
                                className="bg-gray-600 h-3 w-3 rounded-full hover:bg-gray-400 xl:h-4 xl:w-4"></button>
                        </div>
                        <div>
                            <p className="uppercase text-center font-bellefair text-primary/50 mb-2 md:text-2xl xl:text-4xl xl:text-left xl:mb-4">
                                {crew.role}
                            </p>
                            <h1 className="uppercase text-center font-bellefair text-primary text-2xl mb-4 md:text-[2.5rem] xl:text-6xl xl:mb-6">
                                {crew.name}
                            </h1>
                            <p className="font-barlow text-secondary leading-6 text-center md:max-w-[30.25rem] md:mb-10 min-h-[6rem] xl:text-lg xl:max-w-md xl:text-left xl:leading-8 xl:mb-32 xl:min-h-[10rem]">
                                {crew.bio}
                            </p>
                        </div>
                    </div>
                    <img 
                        className="hidden md:block max-h-[35.75rem] mx-auto border-b xl:border-none xl:max-h-[44.5rem] xl:max-w-[31.25rem]"
                        src={crew.images.png}
                        alt="crew member photo" />
                </div>
            </div>
        </div>
    )
}