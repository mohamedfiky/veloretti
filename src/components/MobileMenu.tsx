import { useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoClose, IoPersonOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router";

function MobileMenu() {

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [isStoreMenuOpened, setIsStoreMenuOpened] = useState(false);
  const [isLangsMenuOpened, setIsLangsMenuOpened] = useState(false);

  const closeMenu = ()=>{
    setIsMenuOpened(false);
  }

  const location = useLocation();
    const isStoreActive = location.pathname.startsWith("/store");

  return (
    <div className="block md:hidden">

        <div onClick={()=>{setIsMenuOpened(!isMenuOpened)}}>
            {isMenuOpened ? (
                <IoClose className="text-3xl cursor-pointer" />
            ) : (

                <FiMenu className="text-3xl cursor-pointer" />
            )}
        </div>

        {isMenuOpened && (
            <ul className="absolute bg-gray-700 text-white px-10 py-4 inset-x-0 top-12 flex flex-col gap-4 capitalize">
                <li>
                    <NavLink className={({ isActive }) => `${isActive ? "font-bold" : ""}`} to="/" onClick={()=>{closeMenu()}}>home</NavLink>
                </li>
                <li className="cursor-pointer" onClick={()=>{setIsStoreMenuOpened(!isStoreMenuOpened)}} >
                    <a className= {`${isStoreActive ? "font-bold" : ""} flex items-center gap-1`}>
                    store
                    {
                        isStoreMenuOpened ? (
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

                    {isStoreMenuOpened &&  (
                        <ul className="px-4 pt-2 space-y-2">
                            <li>
                                <NavLink className={({ isActive }) => `${isActive ? "font-bold" : ""}`} to="/store/bikes" onClick={()=>{closeMenu()}}>bikes</NavLink>
                            </li>
                            <li>
                                <a className=" opacity-70 line-through cursor-not-allowed">accessories</a>
                            </li>
                        </ul>
                        )
                    }
                </li>
                <li>
                    <NavLink className={({ isActive }) => `${isActive ? "font-bold" : ""}`} to="/join-the-race" onClick={()=>{closeMenu()}}>join the race</NavLink>
                </li>

                <hr className=" text-gray-600 w-full sm:w-2/3"/>

                <div onClick={()=>{setIsLangsMenuOpened(!isLangsMenuOpened)}}>
                    <span className="flex items-center gap-0.5">
                        <CiGlobe className="cursor-pointer text-xl"/>
                        {
                            isLangsMenuOpened ? (
                                <span>
                                    <IoIosArrowUp className=" mt-1.5 cursor-pointer" />
                                </span>
                            ) : (
                                <span>
                                    <IoIosArrowDown className=" mt-1.5 cursor-pointer" />
                                </span>
                        )}
                    </span>

                    {isLangsMenuOpened && (
                        <ul className="px-4 pt-2 space-y-2 text-sm">
                            <li className="">
                                <a href="#English">English</a>
                            </li>
                            <li className="">
                                <a href="#Arabic">العربية</a>
                            </li>
                        </ul>
                    )}
                </div>

                <hr className=" text-gray-600 w-full sm:w-2/3"/>

                <div>
                    <IoPersonOutline className="cursor-pointer text-xl"/>
                </div>

                <hr className=" text-gray-600 w-full sm:w-2/3"/>

                <div>
                    <HiOutlineShoppingCart className="cursor-pointer text-xl"/>
                </div>

            </ul>
        )}
        
    </div>
  )
}

export default MobileMenu;