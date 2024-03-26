import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Catagory } from "../Books/Catagory";
import {
  getIteam,
  setIteam,
  removeIteam,
} from "../../assets/utilites/LocalStorage";

export const BookDetails = () => {
  // adding on localstorage fucntionality
  const handleClick = (key, value) => {
    if (key === "read") {
      removeIteam("wishlist", value);
      const test = setIteam(key, value);
    } else {
      const preReadedBolg = getIteam("read");
      const checker = preReadedBolg.find((el) => el === value);
      if (!checker) {
        const test = setIteam(key, value);
      }
    }
  };
  // adding on localstorage fucntionality end
  const { data } = useLoaderData();
  const { bookId: id } = useParams();
  const {
    review,
    image,
    bookName,
    category,
    tags,
    rating,
    author,
    bookId,
    totalPages,
    publisher,
    yearOfPublishing,
  } = data.find((el) => el.bookId === parseInt(id));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-work-sans">
      <div className="flex rounded-md min-w-[500px]  justify-center bg-[#F3F3F3] items-center">
        <img src="" alt="" className="rounded-md" />
      </div>
      <div>
        <div className="space-y-4 py-5 border-b flex-grow border-[#13131326]">
          <h1 className="font-bold text-4xl  font-playfair">{bookName}</h1>
          <p className=" font-medium text-[#131313CC]">By : {author}</p>
        </div>

        <p className="border-b py-3 text-[#131313CC] border-[#13131326]  font-medium">
          {category}
        </p>
        <p className="py-5 text-[#131313B3]">
          <span className="font-bold text-[#131313]">Review : </span>
          {review}
        </p>

        <div className="flex gap-3 items-center border-[#13131326] border-b pb-5 ">
          <span className="font-bold">Tag</span>
          {tags.map((el, idx) => (
            <Catagory key={idx} tagname={el} />
          ))}
        </div>
        <table className="table max-w-96">
          <tbody>
            <tr>
              <td>Number of Pages:</td>
              <td className="font-semibold"> {totalPages}</td>
            </tr>
            <tr>
              <td>Publisher:</td>
              <td className="font-semibold">{publisher}</td>
            </tr>
            <tr>
              <td>Year of publishing:</td>
              <td className="font-semibold">{yearOfPublishing}</td>
            </tr>
            <tr>
              <td>Rating:</td>
              <td className="font-semibold">{rating}</td>
            </tr>
          </tbody>
        </table>
        <div className="space-x-4 mt-3">
          <button
            onClick={() => handleClick("read", parseInt(id))}
            className="btn bg-transparent border border-[#1313134D]"
          >
            Read
          </button>
          <button
            onClick={() => handleClick("wishlist", parseInt(id))}
            className="btn bg-[#50B1C9] text-[white]"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
