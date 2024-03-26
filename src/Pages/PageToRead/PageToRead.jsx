import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { getIteam } from "../../assets/utilites/LocalStorage";

export const PageToRead = () => {
  const { data } = useLoaderData();
  const [readBooksData, setreadBooksData] = useState([]);
  useEffect(() => {
    if (data.length > 0) {
      const readsId = getIteam("read");
      const readBooks = data.filter((el) => readsId.includes(el.bookId));
      setreadBooksData(readBooks);
    }
  }, [data]);
  console.log(readBooksData);

  return <div></div>;
};
