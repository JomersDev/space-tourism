import React from "react";
import Nav from "../Components/Nav";

export default function Destination() {
    return (
        <div className='bg-mobile-destination md:bg-tablet-destination xl:bg-desktop-destination min-h-screen bg-no-repeat bg-cover w-screen flex flex-col pb-14'>
            <Nav />
            <div>
                <div className="mt-6 flex flex-col items-center gap-y-8">
                    <div className="flex justify-center gap-x-4">
                        <p className="text-gray-500 font-barlow-condensed uppercase tracking-[0.16875rem] font-bold">01</p>
                        <p className="text-primary font-barlow-condensed uppercase tracking-[0.16875rem]">Pick your destination</p>
                    </div>
                    <img 
                        className="w-1/2 mb-6"
                        src="/destination/image-moon.png" 
                        alt="picture of the moon" 
                    />
                </div>

                <div className="flex flex-col items-center border-b border-gray-500 mx-4 pb-8 mb-8">
                    <div className="flex gap-x-6 text-secondary font-barlow-condensed text-sm mb-6">
                        <button className="tracking-[0.1475rem] border-transparent pb-2 border-b-2 cursor-pointer hover:border-gray-500">
                            MOON
                        </button>
                        <button className="tracking-[0.1475rem] border-transparent pb-2 border-b-2 cursor-pointer hover:border-gray-500">
                            MARS
                        </button>
                        <button className="tracking-[0.1475rem] border-transparent pb-2 border-b-2 cursor-pointer hover:border-gray-500">
                            EUROPA
                        </button>
                        <button className="tracking-[0.1475rem] border-transparent pb-2 border-b-2 cursor-pointer hover:border-gray-500">
                            TITAN
                        </button>
                    </div>
                    <h1 className="text-primary font-bellefair text-6xl mb-2">
                        MOON
                    </h1>
                    <p className="text-secondary text-center max-w-[21rem] leading-[1.5625rem] font-barlow">
                        See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back
                        refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo landing sites.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-y-8">
                    <div>
                        <h2 className="text-secondary font-barlow-condensed text-sm tracking-[0.1475rem] uppercase text-center mb-3">
                            AVG. Distance
                        </h2>
                        <p className="text-primary font-bellefair text-3xl">
                            384,400 KM
                        </p>
                    </div>
                    <div>
                        <h2 className="text-secondary font-barlow-condensed text-sm tracking-[0.1475rem] uppercase text-center mb-3">
                            Est. Travel Time
                        </h2>
                        <p className="text-primary font-bellefair text-3xl text-center">
                            3 DAYS
                        </p>
                    </div>
                </div>
            </div>
      </div>
    )
}