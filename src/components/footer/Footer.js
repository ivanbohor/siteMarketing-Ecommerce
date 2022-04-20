import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin, BsTelephonePlusFill } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="icon-foo">
        <a href=""></a> <FaFacebookSquare size={28} />
        <a href=""> </a> <BsLinkedin size={28} />
        <a href=""> </a> <RiInstagramFill size={28} />
        <h3>Francisco Cernusco Cornejo</h3>
      </div>
    </footer>
  );
};

export default Footer;
