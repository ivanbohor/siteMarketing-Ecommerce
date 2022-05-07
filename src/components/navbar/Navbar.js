import React, { useState } from "react";
import "./Navbar.css";
import { FaCreativeCommonsRemix } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import Button from "../UI/button/Button";
import "../UI/button/Button.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="container navbar">
      <div className="logo">
        <p className="logo-text">
          <span>H</span>yperion
          <FaCreativeCommonsRemix
            className="nav-ic"
            color="#7EBC8D"
            size={38}
          />
        </p>
      </div>
      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <a href="#header"> Home</a>
          </li>
          <li>
            <a href="#features"> Servicios</a>
          </li>
          <li>
            <a href="#abouts"> Sobre Nosotros</a>
          </li>
          <li>
            <a href="#faq"> Faqs</a>
          </li>
          <li className="nav-btn">
            <Button text={"Contacto"} btnClass={"btn-dark"} href={"#contact"} />
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={35} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
