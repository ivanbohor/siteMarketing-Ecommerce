import React, { useEffect } from "react";
import "./Feature.css";
import { BsHexagon } from "react-icons/bs";
import { FaAccessibleIcon, FaGg } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Feature = ({ icon, text, heading }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="feature" data-aos="fade-left">
      <div className="feature-icon">
        <BsHexagon color="#346A73" size={55} />
        <div className="inner-icon">{icon}</div>
      </div>
      <div className="feature-text">
        <h3>{heading}</h3>
        <p className="u-text-small">{text}</p>
      </div>
    </div>
  );
};

export default Feature;
