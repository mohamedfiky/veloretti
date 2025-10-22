
function NavBar() {
  return (
    <>
        <div className="container bg-cyan-400 px-10 py-2.5 flex justify-between items-center gap-10">
            <div id="logo" className="uppercase font-logo text-sm tracking-[0.25em]">veloretti</div>
            <nav className="grow">
              <ul className="flex gap-5">
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">store</a>
                  <ul>
                    <li>
                      <a href="#">bikes</a>
                    </li>
                    <li>
                      <a href="#">accessories</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">join the race</a>
                </li>
              </ul>
            </nav>
            <div>
                <span>lang</span>
                <span>profile</span>
                <span>cart</span>
            </div>
        </div>
    </>
  )
}

export default NavBar