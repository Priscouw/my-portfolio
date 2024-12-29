import { RxCross1 } from "react-icons/rx";
import { IoIosLink } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import TechIcon from "./TechIcon";

import { useEffect } from "react";

import propTypes from "prop-types";

// remove tab focus when modal open
import FocusLock from "react-focus-lock";

export const Modal = ({ array, className, close }) => {
  useEffect(() => {
    // Can close modal with escape key

    function handleEscape(event) {
      if (event.key === "Escape") {
        close();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  });

  return (
    <FocusLock>
      <div
        className={`fixed justify-center items-center top-[77px] inset-0 ${className} bg-black bg-opacity-70`}
        onClick={close}
      >
        <div
          className="bg-black max-h-[750px- 86px] w-[90%] m-auto shadow-violetBlur flex flex-col z-40 rounded-xl xl:max-w-6xl"
          role="dialog"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end">
            <button onClick={close} aria-label="close modal">
              <RxCross1 className="text-white m-3 text-3xl hover:text-purple" />
            </button>
          </div>
          <div className="w-[90%]  mx-auto">
            <img
              src={array.modalPicture}
              className="w-[90%] h-[250px] m-auto object-left-top object-cover rounded-xl sm:h-[400px]"
              alt={`Aperçu du site ${array.name}`}
            />
            <div>
              <p
                className="text-white py-6 text-md text-center"
                dangerouslySetInnerHTML={{ __html: array.description }}
              ></p>
            </div>

            <div
              className={`flex justify-between items-end mb-5 ${
                array.languages.length > 3 ? "flex-col items-center gap-5" : ""
              }`}
            >
              <div className="flex gap-3">
                {array.languages.map((project) => (
                  <TechIcon
                    key={project.name}
                    src={project.logo}
                    alt={project.name}
                    title={project.name}
                    className="w-10"
                  />
                ))}
              </div>

              <div className="flex gap-3 justify-end">
                {array.githubPage && (
                  <a
                    href={array.githubPageLink}
                    aria-label={`Aller sur le site ${array.name}`}
                    target="_blank"
                  >
                    <IoIosLink className="text-white text-4xl hover:text-purple" />
                  </a>
                )}
                <a
                  href={array.githubLink}
                  aria-label={`Aller sur le github de ${array.name}`}
                  target="_blank"
                >
                  <FiGithub className="text-white text-4xl  hover:text-purple" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FocusLock>
  );
};

Modal.propTypes = {
  array: propTypes.object,
  close: propTypes.func,
  className: propTypes.string,
};
