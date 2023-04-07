import React from "react";
import { Button, RedText, Text, Title } from "../Texts";
import { useTranslation } from "react-i18next";
import "./stayle.scss";

const text = "consectetur adipiscing";

const Showcase = () => {
  const { t } = useTranslation();
  return (
    <div className="heros">
      <div className="container row hero__folder">
        <div className="hero__wrapper">
          <span>Pompeo POttery</span>
          <Title title={t("Ready to start shopping?")} />
          <h3 className="heros__text">
            Lorem ipsum dolor sit amet,{" "}
            <span>consectetur adipiscing elit .</span> <br /> Suspendisse varius
            enim in eros elementum.
          </h3>
          <Button body={"New Collection"} />
        </div>
      </div>
    </div>
  );
};

export default Showcase;
