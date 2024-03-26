import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getIteam } from "../../assets/utilites/LocalStorage";

export const TabWishlistBooks = () => {
  const [booksData, setbooksData] = useState([]);
  const { data } = useLoaderData();
  useEffect(() => {
    if (data.length > 0) {
      const prevData = getIteam("wishlist");
      const matchingData = data.filter((el) => prevData.includes(el.bookId));
      setbooksData(matchingData);
    }
  }, [data]);
  console.log(booksData);
  return <div>TabReadBooks</div>;
};
