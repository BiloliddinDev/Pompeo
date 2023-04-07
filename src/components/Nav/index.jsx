import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import "./stayle.scss";

const Nav = () => {
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e);
  };

  const [nav, setNav] = useState(false);

  return (
    <div className="nav">
      <div className="container">
        <div className="row nav__wrapper">
          <a className="nav__logo" href="">
            Pompeo
          </a>
          <div className={`nav__box ${nav ? "hidden" : "nav__nav"}`}>
            <ul className="nav__list">
              <li>
                <a className="nav__link" href="">
                  {t("Home")}
                </a>
              </li>
              <li>
                <a className="nav__link" href="">
                  {t("About")}
                </a>
              </li>
              <li>
                <a className="nav__link" href="">
                  {t("Shop")}
                </a>
              </li>
              <li>
                <a className="nav__link" href="">
                  {t("Contact")}
                </a>
              </li>
            </ul>
            <Select
              defaultValue="En"
              onChange={handleChange}
              options={[
                {
                  value: "en",
                  label: "En",
                },
                {
                  value: "uz",
                  label: "Uzb",
                },
                {
                  value: "ru",
                  label: "Ru",
                },
              ]}
            />
            <div className="flex">
              <i className="fa-solid fa-cart-shopping"></i>
              <p>Cart</p>
            </div>
          </div>
          <div
            onClick={() => {
              setNav(!nav);
            }}
            className="nav__bar"
          >
            {nav ? (
              <i className="fa-solid fa-bars"></i>
            ) : (
              <i className="fa-solid fa-xmark"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
