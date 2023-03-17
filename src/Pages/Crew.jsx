import React, { useState } from "react";
import Nav from "../Components/Nav";
import {data} from '/data.js'


export default function Crew() {

    // 0 == moon, 1 == mars, 2 == europa, 3 == Titan
    const [destination, setDestination] = useState(data.destinations[0])

    function handleDestination(index) {
        setDestination(data.destinations[index])
    }

    return (
        <div className='bg-fixed bg-mobile-crew md:bg-tablet-crew xl:bg-desktop-crew min-h-screen w-screen bg-no-repeat bg-cover flex flex-col pb-8'>
            <Nav />
            <div className="mx-6 mt-4">

                <div className="border-b border-gray-700 mb-8 flex flex-col items-center gap-y-8">
                    <div className="flex gap-x-4 md:self-start md:ml-10 md:text-[1.25rem] xl:-ml-10 xl:text-[1.75rem]">
                        <p className="text-gray-500 font-barlow-condensed uppercase tracking-[0.16875rem] font-bold xl:tracking-[0.295rem]">02</p>
                        <p className="text-primary font-barlow-condensed uppercase tracking-[0.16875rem] xl:tracking-[0.295rem]">Meet your crew</p>
                    </div>
                    <img 
                        className="max-w-[11.0625rem]"
                        src="/crew/image-douglas-hurley.png" 
                        alt="crew member photo" />
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex gap-x-4 mb-8">
                        <button className="bg-gray-600 h-3 w-3 rounded-full hover:bg-gray-400"></button>
                        <button className="bg-gray-600 h-3 w-3 rounded-full hover:bg-gray-400"></button>
                        <button className="bg-gray-600 h-3 w-3 rounded-full hover:bg-gray-400"></button>
                        <button className="bg-gray-600 h-3 w-3 rounded-full hover:bg-gray-400"></button>
                    </div>
                    <div>
                        <p className="uppercase text-center font-bellefair text-primary/50 mb-2">
                            Commander
                        </p>
                        <h1 className="uppercase text-center font-bellefair text-primary text-2xl mb-4">
                            Douglas Hurley
                        </h1>
                        <p className="font-barlow text-secondary leading-6 text-center">
                            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. 
                            He launched into space for the third time as commander of Crew Dragon Demo-2.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}