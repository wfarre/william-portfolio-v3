import { ReactComponent as Cross } from "../../assets/images/xmark-solid.svg";
import { ReactComponent as Avatar } from "../../assets/images/avataaars.svg";

import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div>
      <div
        className={
          menuIsOpen ? "nav__menu-container" : "nav__menu-container hidden"
        }
      >
        <div className="logo-wrapper" onClick={handleClick}>
          <Cross className="logo" />
        </div>
        <div className={"nav__menu"}>
          <Link to="/" className="nav__menu__item" onClick={handleClick}>
            HOME
          </Link>
          <Link to="/about" className="nav__menu__item" onClick={handleClick}>
            ABOUT ME
          </Link>
          <Link
            to="/portfolio"
            className="nav__menu__item"
            onClick={handleClick}
          >
            PORTFOLIO
          </Link>
          <Link to="/contact" className="nav__menu__item" onClick={handleClick}>
            CONTACT
          </Link>
        </div>
      </div>

      <nav className="nav">
        <div className="logo-wrapper">
          <Avatar className="logo" />
        </div>
        <button className="menu-wrapper">
          <p className="menu-wrapper__text" onClick={handleClick}>
            Menu
          </p>
        </button>

        {/* <div className="language-menu-wrapper">
  
        </div> */}
      </nav>
    </div>
  );
};

export default Nav;
