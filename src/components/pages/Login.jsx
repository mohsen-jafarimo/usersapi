import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../../features/authApi/authApiSlice";
import { setCreditional } from "../../features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      console.log(res);
      dispatch(setCreditional({ email, password }));
      navigate("/");
    } catch (err) {
      console.log(err?.error?.message || err.error);
    }
  };
  if (isLoading) {
    return <div className="flex justify-center pt-20">Loading...</div>;
  }
  return (
    <div className="w-full h-ful p-20  flex-col flex  items-center">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-form border-2 border-blue-900 p-2 rounded-md w-52"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-form border-2 my-3 border-blue-900 p-2 rounded-md w-52"
        />

        <button className="p-2 self-start justify-self-start rounded-lg bg-blue-600  text-white font-bold hover:bg-slate-600">
          Sign In
        </button>
      </form>
      <h3 className="mt-3">
        are you new?{" "}
        <Link to="/register" className="underline text-blue-300">
          register
        </Link>
      </h3>
      <div>
        {" "}
        this server use the reqres and the register logic same Login you can
        write register section
      </div>
      <div className="flex justify-evenly mt-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-instagram"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#fd0061"
          fill="none"
          strokeLinecap="round"
          strokelinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M16.5 7.5l0 .01" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-telegram mx-4"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#00abfb"
          fill="none"
          strokelinecap="round"
          strokelinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-brand-github"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#000000"
          fill="none"
          strokelinecap="round"
          strokelinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>
      </div>
    </div>
  );
};

export default Login;
