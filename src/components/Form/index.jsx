import React from "react";
import { Button, RedText, Title } from "../Texts";
import icon from "../../assets/form__img.png";
import "./stayle.scss";

const Form = () => {
  return (
    <div className="container">
      <div className="form">
        <img width={80} src={icon} alt="" />
        <RedText text={"Latest news"} />
        <Title title={"Latest news New updates"} />
        <form className="form__wrapper">
          <div>
            <input
              className="form__input"
              placeholder="Enter your email"
              type="email"
            />
            <Button bg body={"SUBSCRIBE"} />
          </div>
          <label>
            <input className="form__chex" type="checkbox" />
            Sign up for our newsletter
          </label>
        </form>
      </div>
    </div>
  );
};

export default Form;
