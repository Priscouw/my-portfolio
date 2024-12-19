import mesCompetences from "../data/competences";
import { SectionTitle } from "../components/SectionTitle";

const Competences = () => {
  return (
    <section className="container-section" id="skills">
      <SectionTitle title="Mes compétences" />
      <div className="flex flex-wrap justify-center gap-10 lg:justify-start">
        {mesCompetences.map((competence) => (
          <div
            key={competence.title}
            className=" w-[75px]
          h-[75px] rounded-full overflow-hidden bg-white lg:w-[100px] lg:h-[100px]"
          >
            <img
              src={competence.picture}
              alt={competence.alt}
              className="object-contain w-full h-full "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competences;
