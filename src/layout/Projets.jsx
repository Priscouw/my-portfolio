import { SectionTitle } from "../components/SectionTitle";
import { Modal } from "../components/Modal";
import projects from "./../data/projects.json";
import { useState } from "react";

export const Projets = () => {
  const [open, setIsOpen] = useState(false);
  const [selectedproject, setSelectedProject] = useState(null);

  function openModal(project) {
    setIsOpen(true);
    setSelectedProject(project);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedProject(null);
  }

  // remove scrollbar behind modal

  if (open) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }

  // sort projects by date

  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.date.split(".").reverse().join("-"));
    const dateB = new Date(b.date.split(".").reverse().join("-"));
    return dateB - dateA; // trie du plus récent au plus ancien
  });

  /* split divise les chaines de caractères à partir du "."
reverse inverse les chaines de caractères
join ajoute un séparateur "-" entre les chaines de caractères
*/
  return (
    <section className="container-section" id="projects">
      <SectionTitle title="Mes projets" />

      <div className="flex flex-wrap gap-10 justify-center md:justify-between">
        {sortedProjects.map((projet) => (
          <button
            key={projet.id}
            className="max-w-xs transition hover:scale-110 hover:transition hover:ease-linear relative"
            aria-label={`Voir le projet ${projet.name}`}
            onClick={() => openModal(projet)}
          >
            <img
              width="500"
              height="500"
              src={projet.picture}
              alt={projet.altPicture}
              className="object-cover w-full rounded-lg"
              onContextMenu={(e) => e.preventDefault()} //empêche d'enregistrer l'img via click droit
            />
            <span className=" transition-opacity absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 text-xl text-white opacity-0 hover:opacity-100 hover:transition-opacity">
              En savoir plus
            </span>
          </button>
        ))}
        {projects.length % 3 === 2 && (
          <div className="w-[320px] h-[320px] relative"></div>
        )}
        {open && (
          <Modal array={selectedproject} close={closeModal} className="flex" />
        )}
      </div>
    </section>
  );
};
