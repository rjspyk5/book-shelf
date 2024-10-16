import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";
import { Catagory } from "./Catagory";
import { useNavigate } from "react-router-dom";
export const Book = ({ book }) => {
  const { image, bookName, category, tags, rating, author, bookId } = book;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/book/${bookId}`)}
      className="p-6 flex flex-col rounded-2xl border border-[#13131326]"
    >
      <div className="flex w-full py-10 rounded-lg justify-center bg-[#F3F3F3] items-center">
        <img
          src={image}
          className="max-w-[120px] max-h-[166px] rounded-md"
          alt=""
        />
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
