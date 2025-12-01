import Logo from "./Logo";
import Nav from "./Nav";
import Langs from "./Langs";
import Profile from "./Profile";
import Cart from "./Cart";
import MobileMenu from "./MobileMenu";


function NavBar() {

  return (
    <div className="relative text-gray-700 px-10 py-2.5 flex justify-between items-center gap-10">
      
      <Logo />
      <Nav />
      <div className="hidden md:flex items-center gap-10 text-xl">
        <Langs />
        <Profile />
        <Cart />
      </div>
      <MobileMenu />
      
    </div>

  )
}

export default NavBar;