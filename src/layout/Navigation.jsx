const Navigation = () => {
  const navElements = [
    { title: "Qui suis je ?", id: "about" },
    { title: "Projets", id: "projects" },
    { title: "Compétences", id: "skills" },
    { title: "Parcours", id: "timeline" },
    { title: "Contact", id: "contact" },
  ];

  return (
    <nav className="flex sm:px-7">
      <ul className="flex-col-row gap-4 pb-5 text-white sm:text-start sm:gap-6 sm:pb-0 md:gap-8 lg:gap-10">
        {navElements.map((navElement) => (
          <li
            className="hover:text-purple sm:text-base md:text-lg lg:text-xl "
            key={navElement.id}
          >
            <a href={`#${navElement.id}`}>{navElement.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
