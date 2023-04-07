import React from "react";
import { Heading, Text } from "../Texts";
import "./stayle.scss";

export const Detels = ({ title, img, revers, text }) => {
  return (
    <>
      <div className={`${revers ? "rewers" : "rows"}`}>
        <img className="images" src={img} alt="" />
        <div className="detel">
          <Heading title={title} />
          <Text text={text} />
          <a className="detel__link" href="">
            View Details
          </a>
        </div>
      </div>
    </>
  );
};
