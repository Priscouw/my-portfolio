import { PropTypes } from "prop-types";

export const SectionTitle = ({ title, className }) => {
  return (
    <h3
      className={`text-purple text-center text-2xl mb-16 sm:text-3xl lg:text-left ${className}`}
    >
      {title}
    </h3>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};
