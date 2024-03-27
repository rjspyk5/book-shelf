import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { getIteam } from "../../assets/utilites/LocalStorage";
const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};
const TriangleBar = ({ fill, x, y, width, height }) => {
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

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

  return (
    <>
      {readBooksData.length > 0 ? (
        <ResponsiveContainer className="min-h-96  m-2 rounded-lg p-5 bg-[#13131308]">
          <BarChart
            data={readBooksData}
            margin={{
              top: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Tooltip />

            <Bar
              dataKey="totalPages"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : (
        "No books read yet"
      )}
    </>
  );
};
