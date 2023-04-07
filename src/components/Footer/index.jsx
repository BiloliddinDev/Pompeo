import React from "react";
import { Text } from "../Texts";
import footerIcon1 from "../../assets/footer1.svg";
import footerIcon2 from "../../assets/footer2.svg";
import footerIcon3 from "../../assets/footer3.svg";
import "./stayle.scss";

const data = [
  {
    id: 1,
    img: footerIcon1,
    title: "EMAIL",
    text: "pompeopotery@gmail.com",
  },
  {
    id: 2,
    img: footerIcon2,
    title: "FIND",
    text: "Central Park, Manhattan New York, 1101 ",
  },
  {
    id: 3,
    img: footerIcon3,
    title: "CALL",
    text: "+1 292 345 678",
  },
];

const Footer = () => {
  return (
    <div className="container">
      <div className="footer">
        <a className="nav__logo footer__logo" href="">
          Pompeo
        </a>
        <div className="footer__text-box">
          <Text
            text={
              "I have always striven to fix beauty in wood, stone, glass or pottery, that has been my creed."
            }
          />
        </div>
        <div className="footer__wrapper">
          {data.map((element, index) => (
            <div key={index}>
              <img src={element.img} alt={element.title} />
              <h3 className="footer__title">
                {element.title} <br />
              </h3>
              <a className="footer__link" href={element.text}>
                {element.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
