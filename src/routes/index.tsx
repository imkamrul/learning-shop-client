import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import BookDetailsPage from "../page/BookDetailsPage";
import BookPage from "../page/BookPage";
import CartPage from "../page/CartPage";
import HomePage from "../page/HomePage";
import LoginPage from "../page/LoginPage";
import PageNotFount from "../page/PageNotFount";
import RegisterPage from "../page/Registerpage";
import ResetPasswordPage from "../page/ResetPasswordPage";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "/books", element: <BookPage /> },
      { path: "/books/:id", element: <BookDetailsPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/password-reset", element: <ResetPasswordPage /> },
    ],
  },
  { path: "*", element: <PageNotFount /> },
]);
export default routes;
