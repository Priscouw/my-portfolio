import { PropTypes } from "prop-types";

export const SectionTitle = (props) => {
  return (
    <h2 className="text-purple text-center text-2xl mb-16 sm:text-3xl lg:text-left">
      {props.title}
    </h2>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
