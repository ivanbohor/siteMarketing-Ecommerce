import React, { useEffect } from "react";
import Button from "../UI/button/Button";
import "./Header.css";
import "../UI/button/Button.css";
import phoneHeader from "../../assets/headerFoc.png";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>
              Asesoria en <br />
              Ecommerce y Marketing Ecologico
            </span>
            <span>Lorem tempore eum!</span>
            <span>Lorem ipsum dolor sit </span>
          </h1>
          <p className="u-text-small u-text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            deleniti mollitia facere praesentium sint error molestiae aspernatur
            rem sed?
          </p>
          <div className="header-cta">
            <Button text={"About Me"} btnClass={"btn-dark"} href={"#"} />
            <Button
              text={"Servicios"}
              btnClass={"btn-orange"}
              href={"#features"}
            />
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
