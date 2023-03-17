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
        <div className='bg-mobile-destination md:bg-tablet-destination xl:bg-desktop-destination min-h-screen w-screen bg-no-repeat bg-cover flex flex-col pb-14'>
            <Nav />
            <div>
                <div className="mt-6 flex flex-col items-center gap-y-8">
                    <div className="flex justify-center gap-x-4">
                        <p className="text-gray-500 font-barlow-condensed uppercase tracking-[0.16875rem] font-bold">01</p>
                        <p className="text-primary font-barlow-condensed uppercase tracking-[0.16875rem]">Pick your destination</p>
                    </div>
                    <img 
                        className="w-1/2 mb-6"
                        src={destination.images.png}
                        alt="picture of the moon" 
                    />
                </div>

                <div className="flex flex-col items-center border-b border-gray-500 mx-4 pb-8 mb-8">
                    <div className="flex gap-x-6 text-secondary font-barlow-condensed text-sm mb-6">
                        <button
                            onClick={() => handleDestination(0)}
                            className="tracking-[0.1475rem] border-transparent pb-2 border-b-2 cursor-pointer hover:border-gray-500">
                            MOON
                        </button>
                        <button
                            onClick={() => handleDestination(1)} 
                            className="tracking-[0.1475rem] border-transparent pb-2 border-b-2 cursor-pointer hover:border-gray-500">
                            MARS
                        </button>
                        <button
                            onClick={() => handleDestination(2)} 
                            className="tracking-[0.1475rem] border-transparent pb-2 border-b-2 cursor-pointer hover:border-gray-500">
                            EUROPA
                        </button>
                        <button
                            onClick={() => handleDestination(3)} 
                            className="tracking-[0.1475rem] border-transparent pb-2 border-b-2 cursor-pointer hover:border-gray-500">
                            TITAN
                        </button>
                    </div>
                    <h1 className="text-primary font-bellefair text-6xl mb-2">
                        {destination.name}
                    </h1>
                    <p className="text-secondary text-center max-w-[21rem] leading-[1.5625rem] font-barlow">
                        {destination.description}
                    </p>
                </div>

                <div className="flex flex-col items-center gap-y-8">
                    <div>
                        <h2 className="text-secondary font-barlow-condensed text-sm tracking-[0.1475rem] uppercase text-center mb-3">
                            AVG. Distance
                        </h2>
                        <p className="text-primary font-bellefair text-3xl">
                            {destination.distance}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-secondary font-barlow-condensed text-sm tracking-[0.1475rem] uppercase text-center mb-3">
                            Est. Travel Time
                        </h2>
                        <p className="text-primary font-bellefair text-3xl text-center">
                            {destination.travel}
                        </p>
                    </div>
                </div>
            </div>
      </div>
    )
}