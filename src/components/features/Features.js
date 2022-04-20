import React from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/lampmin.png";
import Feature from "./Feature";
import { featureList } from "./data.js";
const Features = () => {
  return (
    <section id="features">
      <div className="container features">
        <div className="u-title">
          <BsFillBookmarkStarFill color="#346A73" size={30} />
          <h2>Servicios</h2>
          <p className="u-text-small u-text-dark">
            Expertos en trabajar en proyectos sociales y ambientales. Hacemos
            mucho más que marketing y comunicación, ¡conócenos!
          </p>
        </div>
        <div className="features-content">
          <div className="features-left">
            <img src={phoneFeatures} alt="phone" />
          </div>
          <div className="features-right">
            {featureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                text={feature.text}
                heading={feature.heading}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
