import React, { useState } from "react";
import Nav from "../Components/Nav";
import {data} from '/data.js'


export default function Destination() {

    // 0 == moon, 1 == mars, 2 == europa, 3 == Titan
    const [destination, setDestination] = useState(data.destinations[0])

    function handleDestination(index) {
        setDestination(data.destinations[index])
    }

    return (
        <div className='bg-fixed bg-mobile-destination md:bg-tablet-destination xl:bg-desktop-destination min-h-screen w-screen bg-no-repeat bg-cover flex flex-col pb-8'>
            <Nav />
            <div>
                <div className="mt-6 flex flex-col items-center gap-y-8 md:mt-8 md:gap-y-16">
                    <div className="flex gap-x-4 md:self-start md:ml-10 md:text-[1.25rem]">
                        <p className="text-gray-500 font-barlow-condensed uppercase tracking-[0.16875rem] font-bold">01</p>
                        <p className="text-primary font-barlow-condensed uppercase tracking-[0.16875rem]">Pick your destination</p>
                    </div>
                    <img 
                        className="w-1/2 mb-6 md:max-w-xs md:mb-14"
                        src={destination.images.png}
                        alt="picture of the moon" 
                    />
                </div>

                <div className="flex flex-col items-center border-b border-gray-500 mx-4 pb-8 mb-8 md:pb-12 md:mx-24">
                    <div className="flex gap-x-6 text-secondary font-barlow-condensed text-sm mb-6 md:text-base md:mb-8">
                        <button
                            onClick={() => handleDestination(0)}
                            className="tracking-[0.1475rem] border-transparent pb-2 border-b-2 cursor-pointer hover:border-gray-500 md:tracking-[0.16875rem]">
                            MOON
                        </button>
                        <button
                            onClick={() => handleDestination(1)} 
                            className="tracking-[0.1475rem] border-transparent pb-2 border-b-2 cursor-pointer hover:border-gray-500 md:tracking-[0.16875rem]">
                            MARS
                        </button>
                        <button
                            onClick={() => handleDestination(2)} 
                            className="tracking-[0.1475rem] border-transparent pb-2 border-b-2 cursor-pointer hover:border-gray-500 md:tracking-[0.16875rem]">
                            EUROPA
                        </button>
                        <button
                            onClick={() => handleDestination(3)} 
                            className="tracking-[0.1475rem] border-transparent pb-2 border-b-2 cursor-pointer hover:border-gray-500 md:tracking-[0.16875rem]">
                            TITAN
                        </button>
                    </div>
                    <h1 className="text-primary font-bellefair text-6xl mb-2 md:text-[5rem]">
                        {destination.name}
                    </h1>
                    <p className="text-secondary text-center max-w-[21rem] leading-[1.5625rem] font-barlow md:leading-[1.75rem] md:max-w-[35.8125rem]">
                        {destination.description}
                    </p>
                </div>

                <div className="flex flex-col items-center gap-y-8 md:flex-row md:justify-center md:gap-x-24">
                    <div>
                        <h2 className="text-secondary font-barlow-condensed text-sm tracking-[0.1475rem] uppercase text-center mb-3">
                            AVG. Distance
                        </h2>
                        <p className="text-primary font-bellefair text-3xl uppercase">
                            {destination.distance}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-secondary font-barlow-condensed text-sm tracking-[0.1475rem] uppercase text-center mb-3">
                            Est. Travel Time
                        </h2>
                        <p className="text-primary font-bellefair text-3xl text-center uppercase">
                            {destination.travel}
                        </p>
                    </div>
                </div>
            </div>
      </div>
    )
}