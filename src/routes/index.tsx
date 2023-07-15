import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import Books from "../page/books";
import Cart from "../page/cart";
import Home from "../page/home";
import Login from "../page/login";
import NotFound from "../page/notFound";
import Register from "../page/register";
import SingleBook from "../page/singleBook";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/books", element: <Books /> },
      { path: "/books/:id", element: <SingleBook /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
]);
export default routes;
