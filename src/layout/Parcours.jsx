import { SectionTitle } from "../components/SectionTitle";

const ParcoursInfos = [
  {
    intitule: "Formation Intégrateur Web",
    lieu: "OpenClassroom",
    dateDebut: "04/2024",
    dateFin: "01/2025",
  },
  {
    intitule: "Programme Vacances Travail",
    lieu: "Corée du sud",
    dateDebut: "06/2022",
    dateFin: "06/2023",
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
            <p className="text-purple">{parcours.lieu}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Parcours;
