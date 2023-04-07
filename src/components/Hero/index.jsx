import React from "react";
import { Button, RedText, Text, Title } from "../Texts";
import { useTranslation } from "react-i18next";
import "./stayle.scss";
import image from "../../assets/hero-img.png";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="container row hero__folder">
        <div className="hero__wrapper">
          <RedText text={"Pompeo POttery"} />
          <Title title={t("HeroTit")} />
          <Text
            num={"50px"}
            text={
              "Unique & modern pottery made by our master in porcelain & stones"
            }
          />
          <Button body={t("HeroBtn")} />
        </div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
