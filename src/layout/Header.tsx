import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BurgerMenu, CloseIcon, DownArrow, UserIcon } from "../components/SVG";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [flyer, setFlyer] = useState(false);

  return (
    <>
      <div className="relative bg-[#FFF6F4]">
        <div className="container px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </a>
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
              <div className="relative">
                <button
                  type="button"
                  className="
                   group rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900  pb-8'
                  "
                  onClick={() => setFlyer(!flyer)}
                >
                  <span>My Account</span>
                  <DownArrow flyer={flyer} />
                </button>

                <div
                  onMouseLeave={() => setFlyer(false)}
                  className={
                    flyer
                      ? " opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      : " opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                  }
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                      <NavLink
                        to="/user"
                        className="-m-3 p-3 flex gap-x-4 items-start rounded-lg hover:bg-gray-50"
                      >
                        <UserIcon />

                        <p className="text-base font-medium text-gray-900 ">
                          Profile
                        </p>
                      </NavLink>
                      <NavLink
                        to="/profile"
                        className="-m-3 p-3 flex gap-x-4 items-start rounded-lg hover:bg-gray-50"
                      >
                        <UserIcon />

                        <p className="text-base font-medium text-gray-900 ">
                          Profile
                        </p>
                      </NavLink>
                      <NavLink
                        to="/profile"
                        className="-m-3 p-3 flex gap-x-4 items-start rounded-lg hover:bg-gray-50"
                      >
                        <UserIcon />

                        <p className="text-base font-medium text-gray-900 ">
                          Profile
                        </p>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <NavLink
                to="/login"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </NavLink>
              <NavLink
                to="/register"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Sign up
              </NavLink>
            </div>
          </div>
        </div>

        <div
          className={
            open
              ? "opacity-100 scale-100  ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Docs
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Enterprise
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Blog
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Guides
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Security
                </a>
                <a
                  href="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Events
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
