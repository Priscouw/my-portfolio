import { RxCross1 } from "react-icons/rx";
import { IoIosLink } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import propTypes from "prop-types";

import TechIcon from "./TechIcon";

export const Modal = ({ array }) => {
  return (
    <div className="fixed flex justify-center items-center inset-0 bg-black">
      <div className="bg-black max-h-[750px] w-[90%] m-auto shadow-violetBlur flex flex-col z-40 rounded-xl xl:max-w-6xl ">
        <div className="flex justify-end">
          <button className="">
            <RxCross1 className="text-white m-3 text-3xl" />
          </button>
        </div>
        <div className="w-[90%]  mx-auto">
          <img
            src={array.modalPicture}
            className="w-[90%] h-[250px] m-auto object-left-top object-cover rounded-xl sm:h-[350px] "
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
                  className="w-10"
                />
              ))}
            </div>

            <div className="flex gap-3 justify-end">
              {array.githubPage && (
                <a href={array.githubPageLink}>
                  <IoIosLink className="text-white text-4xl" />
                </a>
              )}
              <a href={array.githubLink}>
                <FiGithub className="text-white text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  array: propTypes.object,
};