import React, { useEffect } from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { GiConversation } from "react-icons/gi";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <section id="contact" data-aos="fade-up">
      <div className="u-title">
        <GiConversation size={35} color="#346A73" />
        <h2>Contacto</h2>
        <p className="u-text-small u-text-dark">
          Contanos tu idea/proyecto! Nos pondremos en contacto contigo lo antes
          posible.
        </p>
      </div>
      <div className="container contact">
        <div className="contact-options">
          <div className="icons-redes">
            <article className="contact-option">
              <MdEmail className="icon-con" size={25} />
              <h4>Email</h4>
              <h5>Example@gmail.com.ar</h5>
              <a href="mailto:" target="_blank">
                Enviar Mensaje
              </a>
            </article>
            <article className="contact-option">
              <FaFacebookMessenger
                className="icon-con"
                color="#34B7F1"
                size={25}
              />
              <h4>Messenger</h4>
              <h5>Example@gmail.com.ar</h5>
              <a href="htpps://m.me/user.user" target="_blank">
                Enviar Mensaje
              </a>
            </article>
            <article className="contact-option">
              <IoLogoWhatsapp className="icon-con" color="#25D366" size={25} />
              <h4>Whatsapp</h4>
              <h5>+541111222</h5>
              <a href="htpps://api.whatsapp.com/send?phone=" target="_blank">
                Enviar Mensaje
              </a>
            </article>
          </div>
          <form action="">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              required
            ></input>
            <input
              type="text"
              name="email"
              placeholder="Email"
              required
            ></input>
            <textarea
              name="mesagge"
              rows="7"
              placeholder="Tu mensaje"
              required
            ></textarea>
            <button type="submit" className="btn contact">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
