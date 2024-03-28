import axios from "axios";
import { useEffect, useState } from "react";
import { CardComing } from "./CardComing";

export const Coming = () => {
  const [booksData, setbooksData] = useState([]);
  useEffect(() => {
    axios.get("upcoming.json").then((res) => setbooksData(res.data));
  }, []);
  return (
    <div>
      <h1 className="py-6 font-work-sans rounded-md text-center font-bold text-2xl bg-[#1313130D]">
        Coming Soon
      </h1>
      <div className="mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {booksData.map((el) => (
          <CardComing key={el.bookId} book={el} />
        ))}
      </div>
    </div>
  );
};
