import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getIteam } from "../../assets/utilites/LocalStorage";
import { TabCard } from "./TabCard";

export const TabReadBooks = () => {
  const [booksData, setbooksData] = useState([]);
  const { data } = useLoaderData();
  useEffect(() => {
    if (data.length > 0) {
      const prevData = getIteam("read");
      const matchingData = data.filter((el) => prevData.includes(el.bookId));
      setbooksData(matchingData);
    }
  }, [data]);
  console.log(booksData);
  return (
    <div className="space-y-6 ">
      {booksData.map((el) => (
        <TabCard key={el.bookId} book={el} />
      ))}
    </div>
  );
};
