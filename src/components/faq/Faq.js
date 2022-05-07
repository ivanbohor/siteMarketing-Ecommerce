import React, { useEffect } from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import Question from "./Question";
import { questions } from "./data";

import AOS from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <section id="faq">
      <div className="container faq">
        <div className="u-title" data-aos="fade-up">
          <MdOutlineLibraryBooks color="#346A73" size={30} />
          <h2>FAQS</h2>
          <p className="u-text-small u-text-dark">
            Te ofreceremos las mejores herramientas y las ideas más novedosas
            siempre adaptadas a las nuevas tendencias en términos de
            digitalización y sostenibilidad
          </p>
        </div>
        <div className="questions" data-aos="fade-bottom">
          {questions.map((question) => (
            <Question title={question.title} answer={question.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
