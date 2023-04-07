import Nav from "./components/Nav";
import { useTranslation } from "react-i18next";
import { Button, Heading, RedText, Text, Title } from "./components/Texts";
import Hero from "./components/Hero";
import { Pottery } from "./components/Pottery";
import { Collection } from "./components/Collection";
import Showcase from "./components/Showcase";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { Bottom } from "./components/Bottom";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App ">
      <Nav />
      <Hero />
      <Pottery />
      <Collection />
      <Showcase />
      <Form />
      <Footer />
      <Bottom />
    </div>
  );
}

export default App;
