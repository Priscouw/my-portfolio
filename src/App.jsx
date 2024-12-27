import Header from "./layout/Header";
import HeroHeader from "./layout/HeroHeader";
import QuiSuisJe from "./layout/QuiSuisJe";
import { Projets } from "./layout/Projets";
import Competences from "./layout/Competences";
import Parcours from "./layout/Parcours";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroHeader />
        <QuiSuisJe />
        <Projets />
        <Competences />
        <Parcours />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
