import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { createContext } from "react";
export const sortingContext = createContext();
export const ListedBooks = () => {
  const [tabToogle, settabToogle] = useState(true);
  const [sortType, setsortType] = useState("default");
  const handleSrotingClick = (value) => {
    setsortType(value);
  };
  return (
    <div>
      <h1 className="py-6 font-work-sans rounded-md text-center font-bold text-2xl bg-[#1313130D]">
        Books
      </h1>
      <div className="flex justify-center mt-8 mb-11">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-pri text-[white]"
          >
            Sort By <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2  shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleSrotingClick("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSrotingClick("page")}>
              <a>Number of pages</a>
            </li>
            <li onClick={() => handleSrotingClick("publisher")}>
              <a>Publisher</a>
            </li>
          </ul>
        </div>
      </div>
      <div role="tablist" className="tabs-lifted font-work-sans">
        <NavLink
          onClick={() => settabToogle(true)}
          to=""
          role="tab"
          className={`${tabToogle ? " tab-active text-[#13131380]" : " "} tab`}
        >
          Read Books
        </NavLink>
        <NavLink
          onClick={() => settabToogle(false)}
          to="wishlist"
          role="tab"
          className={`${tabToogle ? " " : "tab-active text-[#13131380]"} tab`}
        >
          Wishlist Books
        </NavLink>
      </div>
      <sortingContext.Provider value={sortType}>
        <Outlet></Outlet>
      </sortingContext.Provider>
    </div>
  );
};
