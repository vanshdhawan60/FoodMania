import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="logo">FoodMania</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            maxime, laudantium repellendus blanditiis hic maiores id eligendi
            possimus accusamus earum ab, ea, sint sequi dolorem
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" href="https://www.linkedin.com/in/vanshdhawan60/"/>
            <img src={assets.twitter_icon} alt="" href="https://www.twitter.com//vanshdhawan60/"/>
            <img src={assets.linkedin_icon} alt="" href="https://www.linkedin.com/in/vanshdhawan60/"/>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+919999999999</li>
            <li>vanshdhawan20@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © FoodMania - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
