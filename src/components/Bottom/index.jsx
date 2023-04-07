import React from "react";
import { Text } from "../Texts";
import "./stayle.scss";

export const Bottom = () => {
  return (
    <div className="bottom">
      <Text text={"Template design by"} />
      Dorian Hoxha Image License Info
      <Text text={"Powered by"} />
      Webflow
    </div>
  );
};
