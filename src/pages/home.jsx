import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Projetos from "../components/Projetos/Projetos";
import { Sobre } from "../components/Sobre/Sobre";

const Home = () => {
  return (
    <>
      <Hero />
      <Sobre />
      <Projetos />
      <Footer />
    </>
  );
};

export default Home;
