import Header from "./layout/Header";
import HeroHeader from "./layout/HeroHeader";
import { Projets } from "./layout/Projets";
import QuiSuisJe from "./layout/QuiSuisJe";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroHeader />
        <QuiSuisJe />
        <Projets />
      </main>
    </>
  );
}

export default App;
