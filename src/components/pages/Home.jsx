import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  return (
    <div className="w-full h-ful p-20  flex-col flex  items-center">
      <div className="flex w-full h-full flex-col justify-center items-center mt-14">
        <h3 className="text-2xl mb-4 ">
          {" "}
          {userInfo ? " Welcome Back" : "Authentication"}
        </h3>
        <div className="flex justify-between">
          {userInfo ? (
            <>
              <h3 className="mx-4">{userInfo.email}</h3>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/register")}
                className="bg-blue-400 p-3 rounded-md text-white font-serif font-bold mx-1"
              >
                Register
              </button>
              <button
                onClick={() => navigate("/login")}
                className="bg-blue-400 p-3  rounded-md text-white font-serif font-bold"
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
