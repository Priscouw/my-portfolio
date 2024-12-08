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
      <ul className=" flex flex-col items-center gap-4 text-white sm:text-start sm:flex-row sm:gap-6  ">
        {navElements.map((navElement) => (
          <li key={navElement.id}>
            <a href={`#${navElement.id}`}>{navElement.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
