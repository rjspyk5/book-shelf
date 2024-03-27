import { PropTypes } from "prop-types";

export const Catagory = (props) => {
  return (
    <div
      className={`${
        props.class ? props.class : "bg-[#23be0a0D] text-pri font-medium"
      } font-work-sans text-xs md:text-base px-2 md:px-4 py-2 rounded-full`}
    >
      {props.tagname}
    </div>
  );
};
Catagory.propTypes = {
  tagname: PropTypes.string,
  class: PropTypes.string,
};
