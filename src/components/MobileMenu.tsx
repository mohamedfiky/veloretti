import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function MobileMenu() {

  const [isMenuOpened, setIsMenuOpened] = useState(false);

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

        <div className="absolute bg-fuchsia-800 inset-x-0 top-12 ">
            <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, rem fuga explicabo magni iste delectus provident nostrum sapiente atque voluptatum quasi architecto hic doloribus? Placeat numquam saepe veniam corporis impedit</p>
        </div>
        )}
    </div>
  )
}

export default MobileMenu;