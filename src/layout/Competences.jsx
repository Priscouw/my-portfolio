import mesCompetences from "../data/competences";
import { SectionTitle } from "../components/SectionTitle";
import TechIcon from "../components/TechIcon";

const Competences = () => {
  return (
    <section className="container-section" id="skills">
      <SectionTitle title="Mes compétences" />
      <div className="flex flex-wrap justify-center gap-10 lg:justify-start">
        {mesCompetences.map((competence) => (
          <TechIcon
            key={competence.title}
            className={"w-[75px] h-[75px]"}
            src={competence.picture}
            alt={competence.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default Competences;
