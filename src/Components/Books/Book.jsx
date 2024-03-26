import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Catagory } from "./Catagory";
export const Book = ({ book }) => {
  const { image, bookName, category, tags, rating, author } = book;
  return (
    <div className="p-6 flex flex-col rounded-2xl border border-[#13131326]">
      <div className="flex min-w-[326px] min-h-[230px] justify-center bg-[#F3F3F3] items-center">
        <img src={image} alt="" className="rounded-md" />
      </div>
      <div className="space-y-4 py-5 border-b flex-grow border-[#13131326] border-dashed">
        <div className="flex gap-3 items-center">
          {tags.map((el, idx) => (
            <Catagory key={idx} tagname={el} />
          ))}
        </div>
        <h1 className="font-bold text-2xl">{bookName}</h1>
        <p className="font-work-sans font-medium">By : {author}</p>
      </div>
      <div className="pt-4 flex font-work-sans justify-between font-medium items-center">
        <p>{category}</p>
        <p className="flex gap-1 items-center">
          {rating} <CiStar />
        </p>
      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.object,
};
