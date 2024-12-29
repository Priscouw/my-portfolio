import { SectionTitle } from "../components/SectionTitle";

const ParcoursInfos = [
  {
    intitule: "Formation Intégrateur Web",
    lieu: "OpenClassroom",
    dateDebut: "04/2024",
    dateFin: "01/2025",
    description:
      "Durant cette formation, j'ai appris en pratiquant à travers différents projets plusieurs langages (Sass,Javascript,React ...). Chaque projet à été présenté et validé lors de soutenances devant des professionnels. J'y ai également découvert des notions essentielles comme l'optimisation du référencement, des performances et l'accessibilité etc.",
  },
  {
    intitule: "Programme Vacances Travail",
    lieu: "Corée du sud",
    dateDebut: "06/2022",
    dateFin: "06/2023",
    description:
      "Lors de cette expérience, j'y ai découvert une nouvelle culture et de nouveaux horizons. Cette expérience m'a permis de mieux me connaître, de sortir de ma zone de confort et de  renforcer mes compétences linguistiques, notamment en anglais et en coréen.",
  },
  {
    intitule: "Auxiliaire de Puériculture",
    lieu: "Crèche municipale",
    dateDebut: "09/2016",
    dateFin: "08/2021",
  },
];

const Parcours = () => {
  return (
    <section className="container-section" id="timeline">
      <SectionTitle title="Mon parcours" />
      <div className="flex flex-col gap-10 ">
        {ParcoursInfos.map((parcours) => (
          <div
            key={parcours.intitule}
            className="p-5 rounded-lg shadow-violetBlur bg-zinc-900"
          >
            <h3 className="text-white text-xl sm:text-2xl pb-2">
              {parcours.intitule}
            </h3>
            <p className="text-purple  text-lg sm:text-xl ">{parcours.lieu}</p>
            <p className="text-white pt-5">{parcours.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Parcours;
