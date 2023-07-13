import { createBrowserRouter } from "react-router-dom";
import NotFound from "../page/NotFound";
import Home from "../page/home";
import Login from "../page/login";
import Register from "../page/register";
const routes = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "*", element: <NotFound /> },
]);
export default routes;
