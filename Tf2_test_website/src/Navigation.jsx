import styles from "./Nav.module.css"
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
export const Navbar = () => {
  const NavigationLinks = [
    {name: "Home", path: "/Text"},
    {name: "Database", path: "/Database"}
  ]
  return (
    <>
    <h1>TF2 Admin interface</h1>
    <div>
      <Link to="/Text">
        Home
      </Link>
    </div>
    <div>
      <Link to="/Database">
        Database
      </Link>
    </div>
    <div>
      <Link to="/">
        Log out
      </Link>
    </div>
    <img src="src/assets/TF2_Icon.svg"/>
    </>
  )
}