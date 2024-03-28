import PropTypes from "prop-types";

export const CardComing = ({ book }) => {
  const { image, bookName, category, rating, author } = book;

  return (
    <div>
      <div className="p-6 bg-[#f7f7f7] flex flex-col duration-1000 rounded-2xl border border-[#13131326]">
        <div className="flex w-full py-10 rounded-lg justify-center bg-[#F3F3F3] items-center">
          <img
            src={image}
            className="max-w-[120px] max-h-[166px] rounded-md"
            alt="Image not availbale"
          />
        </div>
        <div className="space-y-4 py-5 border-b flex-grow border-[#13131326] border-dashed">
          <h1 className="font-bold text-2xl">{bookName}</h1>
          <p className="font-work-sans font-medium">By : {author}</p>
        </div>
        <div className="pt-4 flex font-work-sans justify-between font-medium items-center">
          <p>{category}</p>
          <p className="flex gap-1 items-center">{rating}</p>
        </div>
      </div>
    </div>
  );
};
CardComing.propTypes = {
  book: PropTypes.object,
};
