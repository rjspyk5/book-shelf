import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
export const ListedBooks = () => {
  const [toggle, settoggle] = useState(true);
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
            onClick={() => settoggle(!toggle)}
            className="btn m-1 bg-pri text-[white]"
          >
            Sort By {toggle ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab">
          Normal
        </a>
        <a role="tab" className="tab tab-active">
          Normal
        </a>
      </div>
    </div>
  );
};
