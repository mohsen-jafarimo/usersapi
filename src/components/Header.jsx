import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <header className="shadow-md p-4 flex justify-between items-center relative">
      <h3 className="text-lg font-bold">
        <Link to="/">Users</Link>
      </h3>

      <div className="flex items-center justify-between">
        {userInfo ? (
          <div className="flex space-x-3">
            <h3 className="underline text-blue-300">{userInfo.email}</h3>
            <button
              className="bg-indigo-500  p-1 rounded-lg font-bold text-white flex transition-all hover:bg-indigo-400"
              onClick={() => {
                dispatch(logout());
                window.location = "/";
              }}
            >
              logout
            </button>
          </div>
        ) : (
          <>
            <div className="bg-indigo-500  p-1 rounded-lg font-bold text-white flex transition-all hover:bg-indigo-400">
              <Link to="/register">register</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </div>
            <div className="bg-indigo-500 mx-2 p-1  rounded-lg font-bold text-white flex transition-all hover:bg-indigo-400">
              <Link to="/login">login</Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
