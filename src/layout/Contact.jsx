import { SectionTitle } from "../components/SectionTitle";

import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="container-section" id="contact">
      <SectionTitle title="Contact" />
      <div className="text-white flex justify-center gap-7 text-3xl sm:text-4xl sm:gap-10 lg:justify-start ">
        <a
          href="https://github.com/Priscouw"
          aria-label="Lien vers mon profil Github"
          title="github"
        >
          <FiGithub />
        </a>
        <a
          href="https://linkedin.com/in/g-priscilla"
          aria-label="Lien vers mon profil Linkedin"
          title="linkedin"
        >
          <CiLinkedin />
        </a>

        <a
          href="mailto:gu.priscilla7@gmail.com"
          aria-label="Envoyez un mail à Priscilla"
          title="email"
        >
          <CiMail />
        </a>
      </div>
    </section>
  );
};

export default Contact;
