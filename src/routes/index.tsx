import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import Books from "../page/books";
import Home from "../page/home";
import Login from "../page/login";
import NotFound from "../page/notFound";
import Register from "../page/register";
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
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
]);
export default routes;
