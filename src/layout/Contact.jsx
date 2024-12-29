import { SectionTitle } from "../components/SectionTitle";

import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

const contactElements = [
  {
    title: "github",
    ariaLabel: "Lien vers mon profil Github",
    link: "https://github.com/Priscouw",
    logo: <FiGithub />,
  },
  {
    title: "linkedin",
    ariaLabel: "Lien vers mon profil Linkedin",
    link: "https://linkedin.com/in/g-priscilla",
    logo: <CiLinkedin />,
  },
  {
    title: "email",
    ariaLabel: "Envoyez un mail à Priscilla",
    link: "mailto:gu.priscilla7@gmail.com",
    logo: <CiMail />,
  },
];

const Contact = () => {
  return (
    <section className="container-section" id="contact">
      <SectionTitle title="Contact" />
      <div className="text-white flex justify-center gap-7 text-3xl sm:text-4xl sm:gap-10 lg:justify-start ">
        {contactElements.map((element) => (
          <a
            key={element.title}
            href={element.link}
            title={element.title}
            aria-label={element.ariaLabel}
            className="transition hover:scale-125 hover:transition hover:ease-linear"
          >
            {element.logo}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
