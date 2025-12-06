import { useEffect, useRef } from "react";

import { CiGlobe } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type RefEl = React.RefObject<HTMLElement | null>;


const toggleMenu = (menu: RefEl, arrowUp: RefEl, arrowDown: RefEl) =>{

// That isn't the React way ...
// You should use useState hook instead of this ".classList.toggle()" method.
// See the React way on "Nav.tsx" component. 
    
    menu.current?.classList.toggle("hidden");
    arrowUp.current?.classList.toggle("hidden");
    arrowDown.current?.classList.toggle("hidden");
};

function Langs() {

  const langMenu = useRef<HTMLUListElement | null>(null);
  const menuContainer = useRef<HTMLDivElement | null>(null);
  const langUpArrow = useRef<HTMLSpanElement | null>(null);
  const langDownArrow = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
  
          const handleClickOutside = (e: MouseEvent) => {
              if (!menuContainer.current?.contains(e.target as Node)){
                if (!langMenu.current?.classList.contains("hidden")) {
                toggleMenu(langMenu, langDownArrow, langUpArrow);
                }
              } 
          };
  
          document.addEventListener("mousedown", handleClickOutside);
          return () => document.removeEventListener("mousedown", handleClickOutside);
  
          // see if it works also on "touch" on mobiles
          
      }, []);



  return (
    <div ref={menuContainer} className="relative" onClick={()=>{toggleMenu(langMenu, langDownArrow, langUpArrow)}}>
        <span className="flex items-center gap-0.5">
            <CiGlobe className="cursor-pointer"/>
            <span ref={langDownArrow}>
                <IoIosArrowDown className=" mt-1.5 text-sm cursor-pointer" />
            </span>
            <span ref={langUpArrow} className="hidden">
                <IoIosArrowUp className=" mt-1.5 text-sm cursor-pointer" />
            </span>
        </span>
        <ul ref={langMenu} className="hidden absolute top-8.5 -left-1/3 border bg-white border-gray-700 rounded-lg overflow-hidden shadow-menu text-sm">
            <li className="px-2 pt-2 pb-1 hover:bg-light-beige text-center">
                <a href="#English">English</a>
            </li>
            <li className="px-2 pb-2 pt-1 hover:bg-light-beige text-center">
                <a href="#Arabic">العربية</a>
            </li>
        </ul>
    </div>
  )
}

export default Langs;