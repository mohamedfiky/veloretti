import { useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import {CiGlobe } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";



function NavBar() {

  const storeMenu = useRef< HTMLUListElement | null>(null);
  const langMenu = useRef< HTMLUListElement | null>(null);

  const toggleMenu = (ref: React.RefObject<HTMLElement | null>) =>{
  ref.current?.classList.toggle("hidden");
  }

  return (
    <>
        <div className="container bg-cyan-100 text-gray-700 px-10 py-2.5 flex justify-between items-center gap-10">
            <a href="/" id="logo" className="uppercase font-logo font-medium text-sm tracking-[0.25em]">
              veloretti
            </a>
            <nav className="grow">
              <ul className="flex items-center gap-5 capitalize">
                <li>
                  <a href="#">home</a>
                </li>
                <li className="relative cursor-pointer" onClick={()=>{toggleMenu(storeMenu)}}>
                  <a className=" flex items-center gap-1 ">
                    store
                    <IoIosArrowDown className=" mt-1.5 text-lg cursor-pointer" />
                    <IoIosArrowUp className=" mt-1.5 text-lg cursor-pointer hidden" />
                  </a>
                  <ul ref={storeMenu} className="hidden absolute">
                    <li>
                      <a href="#bikes">bikes</a>
                    </li>
                    <li> {/* خليها باهتة اللى هو خلصت مثلا  */}
                      <a className=" opacity-70 line-through cursor-not-allowed">accessories</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">join the race</a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-10 text-xl">
                <span className="relative" onClick={()=>{toggleMenu(langMenu)}}>
                  <CiGlobe className="cursor-pointer"/>
                  <ul ref={langMenu} className="absolute hidden">
                    <li>EN</li>
                    <li>AR</li>
                  </ul>
                </span>
                <span>
                  <IoPersonOutline className="cursor-pointer"/>
                </span>
                <span>
                  <HiOutlineShoppingCart className="cursor-pointer"/>
                </span>
            </div>
        </div>
    </>
  )
}

export default NavBar