import React, {useState, useEffect} from "react";


export default function Nav() {

    const [nav, setNav] = useState(false)

    //opens and closes the mobile nav menu
    function handleNav() {
        setNav(!nav)
    }

    //This closes the mobile nav if it is still open once the screen width is larger than 768px
    useEffect(() => {
        const x = window.matchMedia("(max-width: 768px)")
        function myFunction(e) {
          setNav(false);
        };
        x.addListener(myFunction)
        return () => x.removeListener(myFunction);
      }, []);



    return (
        <nav className="mx-6 pt-6 flex items-center justify-between md:pt-0 md:mx-0">
            <div className="md:ml-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
            </div>

            {/* desktop nav menu */}
            <ul className="hidden md:flex md:gap-x-8 bg-nav text-primary py-10 px-12 font-barlow-condensed tracking-[0.14rem]">
                <li className="group cursor-pointer">
                   <a>HOME</a>
                   <div className="h-1 w-10 mt-8 absolute hidden bg-primary group-hover:block focus:block"></div> 
                </li>
                <li className="">
                   <a>DESTINATION</a>
                </li>
                <li className="">
                   <a>CREW</a>
                </li>
                <li className="">
                   <a>Technology</a> 
                </li>
            </ul>


            {/* render open or close menu based on the state of nav  */}
            <div onClick={handleNav} className="block md:hidden">
                {nav ? 
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>  
                        :
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
                }
            </div>

            {/* Mobile nav menu */}
            <ul className={nav ? 'fixed left-0 top-0 w-72 bg-neutral-900 h-full ease-in-out duration-1000 border-r border-r-neutral-700 z-40' : 'bg-neutral-900 ease-in-out duration-1000 fixed left-[-100%] top-0 h-full w-72 z-40'}>
                <li>
                   <a>00  HOME</a> 
                </li>
                <li>
                   <a>01  DESTINATION</a>
                </li>
                <li>
                   <a>02  CREW</a>
                </li>
                <li >
                   <a>03  TECHNOLOGY</a> 
                </li>
            </ul>
        </nav>
    )
}