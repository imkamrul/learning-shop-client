import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home";
import Login from "../page/login";
import NotFound from "../page/notFound";
import Register from "../page/register";
const routes = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
]);
export default routes;
