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
            <div className="mx-6 mt-4">

                <div className="border-b border-gray-700 mb-8 flex flex-col items-center gap-y-8 md:border-none md:mb-14">
                    <div className="flex gap-x-4 md:self-start md:ml-10 md:text-[1.25rem] xl:-ml-10 xl:text-[1.75rem]">
                        <p className="text-gray-500 font-barlow-condensed uppercase tracking-[0.16875rem] font-bold xl:tracking-[0.295rem]">02</p>
                        <p className="text-primary font-barlow-condensed uppercase tracking-[0.16875rem] xl:tracking-[0.295rem]">Meet your crew</p>
                    </div>
                    <img 
                        className="max-h-[13.875rem] md:hidden"
                        src={crew.images.png}
                        alt="crew member photo" />
                </div>

                <div className="flex flex-col items-center md:flex-col-reverse">
                    <div className="flex gap-x-4 mb-8">
                        <button
                            onClick={() => handleCrew(0)} 
                            className="bg-gray-600 h-3 w-3 rounded-full hover:bg-gray-400"></button>
                        <button
                            onClick={() => handleCrew(1)}  
                            className="bg-gray-600 h-3 w-3 rounded-full hover:bg-gray-400"></button>
                        <button
                            onClick={() => handleCrew(2)}  
                            className="bg-gray-600 h-3 w-3 rounded-full hover:bg-gray-400"></button>
                        <button
                            onClick={() => handleCrew(3)}  
                            className="bg-gray-600 h-3 w-3 rounded-full hover:bg-gray-400"></button>
                    </div>
                    <div>
                        <p className="uppercase text-center font-bellefair text-primary/50 mb-2 md:text-2xl">
                            {crew.role}
                        </p>
                        <h1 className="uppercase text-center font-bellefair text-primary text-2xl mb-4 md:text-[2.5rem]">
                            {crew.name}
                        </h1>
                        <p className="font-barlow text-secondary leading-6 text-center md:max-w-[30.25rem] md:mb-10 min-h-[6rem]">
                            {crew.bio}
                        </p>
                    </div>
                </div>
                <img 
                    className="hidden md:block max-h-[35.75rem] mx-auto border-b"
                    src={crew.images.png}
                    alt="crew member photo" />
            </div>
        </div>
    )
}