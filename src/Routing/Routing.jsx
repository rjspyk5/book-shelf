import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Root/Root";
import { ListedBooks } from "../Pages/ListedBooks/ListedBooks";
import { PageToRead } from "../Pages/PageToRead/PageToRead";
import { Home } from "../Pages/Home/Home";
import axios from "axios";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <ListedBooks />,
        loader: () => axios.get("/books.json"),
      },
      { path: "/read", element: <PageToRead /> },
    ],
  },
]);
