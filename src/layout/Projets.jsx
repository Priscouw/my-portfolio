import { SectionTitle } from "../components/SectionTitle";
import projects from "./../data/projects.json";

export const Projets = () => {
  return (
    <section className="container-section" id="projects">
      <SectionTitle title="Mes projets" />

      <div className="flex flex-wrap gap-10 justify-center lg:justify-around xl:justify-between">
        {projects.map((projet) => (
          <button
            key={projet.id}
            className="max-w-xs transition hover:scale-110 hover:transition hover:ease-linear relative"
            aria-label={`Voir le projet ${projet.name}`}
          >
            <img
              src={projet.picture}
              alt={projet.altPicture}
              className="object-cover w-full rounded-lg"
            />
            <span className=" transition-opacity absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-xl text-white opacity-0 hover:opacity-100 hover:transition-opacity">
              En savoir plus
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};
