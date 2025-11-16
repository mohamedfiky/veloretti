import {NavLink, useLocation } from "react-router";
import {useState, useRef, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";



function Nav() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuContainer = useRef<HTMLLIElement | null>(null);


    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {
            if (!menuContainer.current?.contains(e.target as Node)){
              setIsMenuOpen(false);  
            } 
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);

        // see if it works also on "touch" on mobiles
        
    }, []);

    const location = useLocation();
    const isStoreActive = location.pathname.startsWith("/store");

  return (
    <nav className="grow">
        <ul className="flex items-center gap-5 capitalize">
        <li>
            <NavLink className={({ isActive }) => `${isActive ? "font-semibold" : ""}`} to="/">home</NavLink>
        </li>
        <li ref={menuContainer} className="relative cursor-pointer" onClick={()=>{setIsMenuOpen(!isMenuOpen)}} >
            <a className= {`${isStoreActive ? "font-semibold" : ""} flex items-center gap-1`}>
            store
            {
                isMenuOpen ? (
                    <span>
                        <IoIosArrowUp className=" mt-1.5 text-lg cursor-pointer" />
                    </span>
                ): (
                    <span>
                        <IoIosArrowDown className=" mt-1.5 text-lg cursor-pointer" />
                    </span>
                )
            }
            </a>

            {isMenuOpen &&  (
                <ul className="absolute top-9 -left-1/3 border border-gray-700 rounded-lg overflow-hidden shadow-xl">
                    <li className="px-2 pt-2 pb-1 hover:bg-gray-200">
                        <NavLink className={({ isActive }) => `${isActive ? "font-semibold" : ""}`} to="/store/bikes">bikes</NavLink>
                    </li>
                    <li className="px-2 pb-2 pt-1 hover:bg-gray-200">
                        <a className=" opacity-70 line-through cursor-not-allowed">accessories</a>
                    </li>
                </ul>
                )
            }

        </li>
        <li>
            <NavLink className={({ isActive }) => `${isActive ? "font-semibold" : ""}`} to="/race">join the race</NavLink>
        </li>
        </ul>
    </nav>    
  )
}

export default Nav;