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

            <span>
              Combinamos la vision creativa con la estrategia comercial para
              ayudarte a conectar con tu mercado!{" "}
            </span>
          </h1>
          <p className="u-text-small u-text-light">
            Desarrollamos e implementamos estrategias que ayuden al
            fortalecimiento de la reputación empresarial, construyendo marcas
            que son símbolo del cambio positivo!
          </p>
          <div className="header-cta">
            <Button
              text={"Sobre Nosotros"}
              btnClass={"btn-dark"}
              href={"#abouts"}
            />
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
