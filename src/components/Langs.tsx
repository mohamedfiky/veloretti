import { useRef } from "react";

import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type RefEl = React.RefObject<HTMLElement | null>;


function Langs({toggleMenu} : {toggleMenu : (menu: RefEl, arrUp: RefEl, arrDown: RefEl )=> void}) {

  const langMenu = useRef<HTMLUListElement | null>(null);
  const langUpArrow = useRef<HTMLSpanElement | null>(null);
  const langDownArrow = useRef<HTMLSpanElement | null>(null);

  return (
    <div className="relative" onClick={()=>{toggleMenu(langMenu, langDownArrow, langUpArrow)}}>
        <span className="flex items-center gap-0.5">
        <CiGlobe className="cursor-pointer"/>
        <span ref={langDownArrow}>
            <IoIosArrowDown className=" mt-1.5 text-sm cursor-pointer" />
        </span>
        <span ref={langUpArrow} className="hidden">
            <IoIosArrowUp className=" mt-1.5 text-sm cursor-pointer" />
        </span>
        </span>
        <ul ref={langMenu} className="hidden absolute top-9 -left-1/3 border border-gray-700 rounded-lg overflow-hidden text-sm">
        <li className="px-2 pt-2 pb-1 hover:bg-gray-200 text-center">
            <a href="#English">English</a>
        </li>
        <li className="px-2 pb-2 pt-1 hover:bg-gray-200 text-center">
            <a href="#Arabic">العربية</a>
        </li>
        </ul>
    </div>
  )
}

export default Langs;