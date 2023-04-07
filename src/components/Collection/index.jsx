import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import { RedText, Title, Text, Button } from "../Texts";
import "./stayle.scss";

const data = [
  {
    id: 1,
    image: image1,
    title: "Decor Plate",
    price: "65.00",
  },
  {
    id: 2,
    image: image2,
    title: "Mint Pottery",
    price: "75.00",
  },
  {
    id: 3,
    image: image3,
    title: "Set Of Potterys",
    price: "125.00",
  },
  {
    id: 4,
    image: image4,
    title: "Orange Ceramic",
    price: "55.00",
  },
  {
    id: 5,
    image: image5,
    title: "Dark Bowl",
    price: "115.00",
  },
  {
    id: 6,
    image: image6,
    title: "Square Pottery",
    price: "75.00",
  },
];

export const Collection = () => {
  return (
    <div className="container">
      <div className="collection">
        <RedText text={"Our online store"} />
        <Title title={"Pottery Collection"} />
        <div
          className="collection__wrapper
        "
        >
          {data.map((element, index) => (
            <div className="collection__card" key={element.id}>
              <img src={element.image} alt="" />
              <div>
                <Text text={element.title} />
                <p>{` $ ${element.price} USD`}</p>
              </div>
            </div>
          ))}
          <h2 className="collection__left">Product Collections</h2>
        </div>
        <Button body={"View All Products"} />
      </div>
    </div>
  );
};
