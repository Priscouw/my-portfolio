import Header from "./layout/Header";
import HeroHeader from "./layout/HeroHeader";
import QuiSuisJe from "./layout/QuiSuisJe";
import { Projets } from "./layout/Projets";
import Competences from "./layout/Competences";
import Parcours from "./layout/Parcours";
import Contact from "./layout/Contact";

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
      </main>
    </>
  );
}

export default App;
