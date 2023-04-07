import "./stayle.scss";
import img from "../../assets/&.svg";

export const Title = ({ title }) => {
  return <h1 className="header">{title}</h1>;
};

export const Text = ({ text, num }) => {
  return (
    <p style={{ paddingBottom: `${num}` }} className="text">
      {text}
    </p>
  );
};

export const Button = ({ body, bg }) => {
  return <button className={`btn ${bg ? "bg" : "btn"}`}>{body}</button>;
};

export const RedText = ({ text }) => {
  return <p className="text__red">{text}</p>;
};

export const Heading = ({ title }) => {
  return <h2 className="heading">{title}</h2>;
};
