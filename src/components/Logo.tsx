import { Link } from "react-router"

function Logo() {
  return (
    <Link
        to="/"
        id="logo"
        className="uppercase font-logo font-medium text-sm tracking-[0.25em]"
        >
        veloretti
    </Link>
  )
}

export default Logo;