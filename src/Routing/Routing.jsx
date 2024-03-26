import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Root/Root";
import { ListedBooks } from "../Pages/ListedBooks/ListedBooks";
import { PageToRead } from "../Pages/PageToRead/PageToRead";
import { Home } from "../Pages/Home/Home";
import axios from "axios";
import { TabReadBooks } from "../Pages/ListedBooks/TabReadBooks";
import { TabWishlistBooks } from "../Pages/ListedBooks/TabWishlistBooks";
import { BookDetails } from "../Components/BookDetails/BookDetails";
import { getIteam } from "../assets/utilites/LocalStorage";

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
        children: [
          {
            index: true,
            element: <TabReadBooks />,
            loader: () => axios.get("/books.json"),
          },
          {
            path: "wishlist",
            element: <TabWishlistBooks />,
            loader: () => axios.get("/books.json"),
          },
        ],
      },
      {
        path: "/read",
        element: <PageToRead />,
        loader: () => axios.get("/books.json"),
      },
      {
        path: "/:bookId",
        element: <BookDetails />,
        loader: () => axios.get("/books.json"),
      },
    ],
  },
]);
