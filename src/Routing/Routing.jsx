import { createBrowserRouter } from "react-router-dom";
import { Root } from "../Root/Root";
import { ListedBooks } from "../Pages/ListedBooks/ListedBooks";
import { PageToRead } from "../Pages/PageToRead/PageToRead";
import { Home } from "../Pages/Home/Home";

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
      },
      { path: "/read", element: <PageToRead /> },
    ],
  },
]);
