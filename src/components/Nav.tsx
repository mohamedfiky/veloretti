import {NavLink, useLocation } from "react-router";
import { useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

// type RefEl = React.RefObject<HTMLElement | null>;

function Nav() {

  const storeMenu = useRef<HTMLUListElement | null>(null);
  const storeUpArrow = useRef<HTMLSpanElement | null>(null);
  const storeDownArrow = useRef<HTMLSpanElement | null>(null);

  const location = useLocation();
  const isStoreActive = location.pathname.startsWith("/store");

  return (
    <nav className="grow">
        <ul className="flex items-center gap-5 capitalize">
        <li>
            <NavLink className={({ isActive }) => `${isActive ? "font-semibold" : ""}`} to="/">home</NavLink>
        </li>
        <li className="relative cursor-pointer" /* onClick={()=>{toggleMenu(storeMenu, storeDownArrow, storeUpArrow)}} */>
            <a className= {`${isStoreActive ? "font-semibold" : ""} flex items-center gap-1`}>
            store
            <span ref={storeDownArrow}>
                <IoIosArrowDown className=" mt-1.5 text-lg cursor-pointer" />
            </span>
            <span ref={storeUpArrow} className="hidden">
                <IoIosArrowUp className=" mt-1.5 text-lg cursor-pointer" />
            </span>
            </a>


            <ul ref={storeMenu} className="hidden absolute top-9 -left-1/3 border border-gray-700 rounded-lg overflow-hidden shadow-xl">
            <li className="px-2 pt-2 pb-1 hover:bg-gray-200">
                <NavLink className={({ isActive }) => `${isActive ? "font-semibold" : ""}`} to="/store/bikes">bikes</NavLink>
            </li>
            <li className="px-2 pb-2 pt-1 hover:bg-gray-200">
                <a className=" opacity-70 line-through cursor-not-allowed">accessories</a>
            </li>
            </ul>


        </li>
        <li>
            <NavLink className={({ isActive }) => `${isActive ? "font-semibold" : ""}`} to="/race">join the race</NavLink>
        </li>
        </ul>
    </nav>    
  )
}

export default Nav;