import { SectionTitle } from "../components/SectionTitle";
import projects from "./../data/projects.json";

export const Projets = () => {
  return (
    <section className="w-[90%] max-w-6xl m-auto mt-16 mb-16" id="projects">
      <SectionTitle title="Mes projets" />

      <div className="flex flex-wrap gap-10 justify-center lg:justify-around xl:justify-between">
        {projects.map((projet) => (
          <button key={projet.id} className="max-w-xs">
            <img src={projet.picture} alt={projet.altPicture} />
          </button>
        ))}
      </div>
    </section>
  );
};
