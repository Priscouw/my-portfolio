import propTypes from "prop-types";

// composant qui affiche le langage ou framework utilisé

const TechIcon = ({ className = "", src = "", alt = "", title = "" }) => {
  return (
    <div className={`rounded-full overflow-hidden bg-white ${className}`}>
      <img
        src={src}
        alt={alt}
        className="object-contain w-full h-full"
        title={title}
      />
    </div>
  );
};

export default TechIcon;

TechIcon.propTypes = {
  className: propTypes.string,
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  title: propTypes.string,
};
