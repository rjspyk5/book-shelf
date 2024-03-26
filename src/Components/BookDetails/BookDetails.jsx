import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Catagory } from "../Books/Catagory";
import { CiStar } from "react-icons/ci";

export const BookDetails = () => {
  const { data } = useLoaderData();
  const { bookId: id } = useParams();
  const { review, image, bookName, category, tags, rating, author, bookId } =
    data.find((el) => el.bookId === parseInt(id));

  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="flex rounded-md min-w-[500px] min-h-[700px] justify-center bg-[#F3F3F3] items-center">
        <img src="" alt="" className="rounded-md" />
      </div>
      <div>
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
    </div>
  );
};
