import Logo from "./Logo";
import Nav from "./Nav";
import Langs from "./Langs";
import Profile from "./Profile";
import Cart from "./Cart";


function NavBar() {

  return (
    <div className="container bg-cyan-100 text-gray-700 px-10 py-2.5 flex justify-between items-center gap-10">
      
      <Logo />
      <Nav />
      <div className="flex items-center gap-10 text-xl">
        <Langs />
        <Profile />
        <Cart />
      </div>
      
    </div>

  )
}

export default NavBar;