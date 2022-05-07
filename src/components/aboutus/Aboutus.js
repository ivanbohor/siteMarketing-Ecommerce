import React, { useEffect } from "react";
import { MdHomeWork } from "react-icons/md";
import "./Aboutus.css";
import AOS from "aos";
import "aos/dist/aos.css";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";

const Aboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <section id="abouts" data-aos="fade-up">
      <div className="u-title">
        <MdHomeWork size={35} color="#346A73" />
        <h2>Sobre Nosotros</h2>
        <p className="u-text-small u-text-dark">
          Estamos orientados a resultados. Nuestro objetivo es hacer crecer tu
          negocio digitalmente, implementando estrategias de Marketing digital
          simples y cuantificables 100% desde el momento cero
        </p>
      </div>
      <div className="cont-ab">
        <div className="bloque1">
          <div className="profile" data-aos="fade-right">
            <img src={about1} alt="empresa" />
          </div>
          <div className="profile-text" data-aos="fade-left">
            <p className="u-text-small u-text-dark" style={{ paddingTop: 10 }}>
              Somos un equipo de profesionales expertos en marketing,
              creatividad y diseño. <br /> Contamos con una estructura
              multidisciplinaria que nos permite la especialización en distintas
              áreas.
            </p>
          </div>
        </div>
        <div className="bloque2">
          <div className="profile" data-aos="fade-left">
            <img src={about2} alt="empresa" />
          </div>
          <div className="profile-text" data-aos="fade-right">
            <p className="u-text-small u-text-dark" style={{ paddingTop: 13 }}>
              Promovemos un intercambio ideológico constante que aporta valor
              agregado a nuestro proceso creativo, desarrollando conceptos y
              estrategias impactantes y efectivas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
