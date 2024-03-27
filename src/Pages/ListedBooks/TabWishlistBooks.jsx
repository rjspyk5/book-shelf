import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getIteam } from "../../assets/utilites/LocalStorage";
import { TabCard } from "./TabCard";
import { sortingContext } from "./ListedBooks";
import { sortingFuction } from "../../assets/utilites/Sorting";

export const TabWishlistBooks = () => {
  const [booksData, setbooksData] = useState([]);
  const { data } = useLoaderData();
  const contextData = useContext(sortingContext);
  useEffect(() => {
    if (data.length > 0) {
      const prevData = getIteam("wishlist");
      const matchingData = data.filter((el) => prevData.includes(el.bookId));
      if (contextData === "publisher") {
        console.log(matchingData);
      } else if (contextData === "page") {
        console.log(matchingData);
      } else if (contextData === "rating") {
        console.log(matchingData);
      } else {
        setbooksData(matchingData);
      }
    }
  }, [data, contextData]);

  return (
    <div className="space-y-6 ">
      {booksData.map((el) => (
        <TabCard key={el.bookId} book={el} />
      ))}
    </div>
  );
};
