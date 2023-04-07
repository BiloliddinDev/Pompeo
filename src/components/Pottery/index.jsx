import React from "react";
import { Heading, RedText, Title, Text } from "../Texts";
import { useTranslation } from "react-i18next";
import Pottery1 from "../../assets/Pottery1.png";
import Pottery2 from "../../assets/Pottery2.png";
import Pottery3 from "../../assets/Pottery3.png";
import Farme1 from "../../assets/Frame1.png";
import Farme2 from "../../assets/Frame2.png";
import "./stayle.scss";
import { Detels } from "../Detels/index";

const data = [
  {
    id: 1,
    img: Pottery1,
    title: "Vases",
  },
  {
    id: 2,
    img: Pottery2,
    title: "Mugs",
  },
  {
    id: 3,
    img: Pottery3,
    title: "Plates",
  },
];

export const Pottery = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="pottery">
        <h3 className="pottery__left">Hand Craft Pottery</h3>
        <RedText text={"Product Categories"} />
        <Title title={t("Porcelain")} />
        <div className="pottery__wrapper">
          {data.map((element, index) => (
            <div className="pottery__card" key={index}>
              <img src={element.img} alt="" />
              <p className="pottery__text">{element.title}</p>
            </div>
          ))}
        </div>
        <div className="pottery__folder">
          <div className="pottery__cartt">
            <Heading title={"Hand Grafted Pottery since 1990"} />
            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere." />
          </div>
          <div className="pottery__cartt">
            <Heading title={"We Provide Premium Pottery Produts"} />
            <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere." />
          </div>
        </div>
        <Detels
          img={Farme1}
          title={"Gold & Black Pottery"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore dolore aua. Ut enim ad minim veniam, quis nostrud exercitationulco laboris nisi ut aliquip ex ea commodo consequatuisaute."
          }
        />
        <h2 className="pottery__right">Featured Products</h2>
        <Detels
          revers
          img={Farme2}
          title={"Orange Ceramic"}
          text={
            "Pri cu dico labores officiis, odio principes complectitur ad sea. Sea id doctus forensibus, nec lorem vocent aliquam eu. Aliquid definitiones id cum, ad meliore perpetua referrentur sed. Quas suscipit ad mea verear vivendo tincidunt."
          }
        />
      </div>
    </div>
  );
};
