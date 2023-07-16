import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BurgerMenu } from "../components/SVG";
import { useTokenStore } from "../hooks/useTokenStore";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUser, setUserToken } from "../redux/slice/userSlice";
import notify from "../utils/notify";

const Header = () => {
  const [open, setOpen] = useState(false);
  const { removeToken } = useTokenStore();
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(setUser(null));
    dispatch(setUserToken(null));
    removeToken();
    notify("success", "Logout successfully");
  };
  const { user } = useAppSelector((state) => state.user);

  return (
    <>
      <div className="relative bg-[#FFF6F4]">
        <div className="container px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://res.cloudinary.com/dnlnzptzc/image/upload/v1689523385/logo.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="rounded-md p-2 inline-flex items-center justify-center text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 bg-[#F47122]"
                onClick={() => setOpen(!open)}
              >
                <BurgerMenu />
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <NavLink
                to="/"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </NavLink>
              <NavLink
                to="/books"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Books
              </NavLink>
            </nav>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 relative">
              {user?.email ? (
                <>
                  {" "}
                  <NavLink
                    to="/user"
                    className=" whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 pl-5"
                  >
                    My Account
                  </NavLink>
                  <button
                    type="button"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
                  "
                    onClick={() => handleLogOut()}
                  >
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 pl-5"
                  >
                    Sign in
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
