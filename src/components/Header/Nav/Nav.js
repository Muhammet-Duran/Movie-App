import React , {useState} from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isHome, setIsHome] = useState(true);
  const handleMenu =() =>{
    setIsHome(!isHome);
  }

  return (
    <nav className={styles.nav}>
      {!isHome 
        ? <Link onClick={handleMenu} className={styles.nav__link} to="/">STAY HOME</Link>
        : <Link onClick={handleMenu} className={styles.nav__link} to="/favorite">MY FAVORİTES</Link>
      }
      
      
    </nav>
  );
};

export default Nav;
