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
   <h1 className={styles.title}>TF2 Admin interface</h1>
      
      <nav className={styles.navContainer}>
        <div>
          <NavLink 
            to="/Text" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            Home
          </NavLink>
        </div>

        <div>
          <NavLink 
            to="/Database" 
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            Database
          </NavLink>
        </div>

        <div>
          <NavLink 
            to="/" 
            className={styles.navLink}
          >
            Log out
          </NavLink>
        </div>
      </nav>

      <img 
        src="src/assets/TF2_Icon.svg" 
        alt="TF2 Icon" 
        className={styles.logo}
      />
    </>
  );
};
