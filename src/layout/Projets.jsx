import { SectionTitle } from "../components/SectionTitle";
import projects from "./../data/projects.json";

export const Projets = () => {
  return (
    <section className="w-[90%] max-w-6xl m-auto mt-16 mb-16" id="projects">
      <SectionTitle title="Mes projets" />

      <div className="flex flex-wrap gap-10 justify-center lg:justify-around xl:justify-between">
        {projects.map((projet) => (
          <button
            key={projet.id}
            className="max-w-xs transition hover:scale-110 hover:transition hover:ease-linear "
            aria-label={`Voir le projet ${projet.name}`}
          >
            <img
              src={projet.picture}
              alt={projet.altPicture}
              className="object-cover w-full rounded-lg"
            />
          </button>
        ))}
      </div>
    </section>
  );
};
