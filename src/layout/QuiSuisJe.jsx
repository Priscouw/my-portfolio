import { SectionTitle } from "../components/SectionTitle";

const QuiSuisJe = () => {
  return (
    <section className="container-section" id="about">
      <SectionTitle title="Qui suis je?" />
      <div className="flex flex-col gap-20 lg:flex-row lg:h-[550px] lg:gap-48">
        <div className="bg-zinc-900 p-6 shadow-violetBlur text-white text-start rounded-xl flex flex-col justify-center gap-5 min-h-[500px] sm:p-10 sm:h-[400px] sm:min-h-fit sm:text-[1.1rem] lg:w-[50%] lg:h-auto xl:text-[1.2rem]">
          <p>
            Je m&apos;appelle <strong>Priscilla</strong>. Après plusieurs années
            à travailler en tant qu&apos;auxiliaire de puériculture, j&apos;ai
            décidé de m&apos;aventurer hors des sentiers battus en partant vivre
            un an en <strong> Corée du Sud</strong>. Cette expérience m&apos;a
            offert un sentiment de liberté si intense que j&apos;ai ressenti le
            besoin de transformer ma <strong>vie professionnelle</strong>.
          </p>

          <p>
            Depuis toujours passionnée par les jeux vidéos et le numérique, le{" "}
            <strong>développement web</strong> est rapidement devenu une
            évidence pour moi : une parfaite combinaison entre créativité et
            technique. Aujourd&apos;hui, je suis heureuse de vous présenter mon
            <strong> portfolio</strong>, reflet de cette nouvelle aventure.
          </p>
        </div>
        <div className=" flex items-center rounded-xl overflow-hidden max-h-[500px] sm:h-[400px] lg:w-[50%] lg:h-auto lg:max-h-none ">
          <img
            className="h-full object-cover w-full"
            src="./img/priscilla.jpg"
            alt="Priscilla souriante sur un fond bleu"
          />
        </div>
      </div>
    </section>
  );
};

export default QuiSuisJe;
