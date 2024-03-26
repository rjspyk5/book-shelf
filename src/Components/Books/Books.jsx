import React, { useEffect, useState } from "react";
import { Book } from "./Book";
import axios from "axios";

export const Books = () => {
  const [booksData, setbooksData] = useState([]);
  useEffect(() => {
    axios.get("books.json").then((res) => setbooksData(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl mt-16 md:mt-24 font-bold text-center ">Books</h1>
      <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {booksData.map((el) => (
          <Book key={el.bookId} book={el} />
        ))}
      </div>
    </div>
  );
};
