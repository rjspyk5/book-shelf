import React from "react";
import { Link } from "react-router-dom";

export const Banner = () => {
  return (
    <div className="md:px-28 px-10 md:py-20 py-12 bg-[#1313130D] rounded-3xl grid grid-cols-5 gap-20">
      <div className="col-span-3">
        <h1 className="md:text-5xl text-2xl font-bold md:leading-[84px]">
          Books to freshen up your bookshelf
        </h1>
        <Link
          to="/books"
          className="btn-sm mt-8 btn md:btn-md bg-pri text-[white]"
        >
          View The List
        </Link>
      </div>
    </div>
  );
};
