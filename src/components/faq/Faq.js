import React, { useEffect } from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import "aos/dist/aos.css";
import Question from "./Question";
import { questions } from "./data";
import AOS from "aos";

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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste ad ut
            aliquid beatae dolorum, expedita, Delectus.
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
