import { PropTypes } from "prop-types";

export const Catagory = ({ tagname }) => {
  return (
    <div className="font-work-sans font-medium bg-[#23be0a0D] text-pri px-4 py-2 rounded-full">
      {tagname}
    </div>
  );
};
Catagory.propTypes = {
  tagname: PropTypes.string,
};
