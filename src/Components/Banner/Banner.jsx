import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/images/pngwing 1.png";

export const Banner = () => {
  return (
    <div className="md:px-28 px-10 md:py-20 py-12  bg-[#1313130D] rounded-3xl grid md:grid-cols-5 grid-cols-1 gap-20">
      <div className="md:col-span-3 order-2 md:order-1 text-center md:text-left">
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
      <div className="order-1 md:order-2 flex justify-center items-center">
        <img
          className=" min-w-[200px] md:min-w-[300px] max-h-[320px] "
          src={bannerImg}
          alt=""
        />
      </div>
    </div>
  );
};
