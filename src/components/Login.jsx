import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../redux/userSlice";
const url = "https://dummyjson.com/auth/login";

function Login() {
  const navigate = useNavigate();
  const userDispatch = useDispatch();
  const isLogin = useSelector((state) => state.users.isLogin);

  const [username, setUsername] = useState("");
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const postData = {
    username: username,
    password: password,
  };

  const data = JSON.stringify(postData);

  useEffect(() => {
    axios
      .post(url, data)
      .then((res) => {
        if (res.token === true) {
          userDispatch(loginSuccess(true));
          navigate("/index");
        } else {
          userDispatch(loginSuccess(false));
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  }, [data]);

  const login = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 flex justify-center items-center">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
            <p className="mt-2 text-gray-500">
              Sign in below to access your account
            </p>
          </div>
          <div className="mt-5">
            <form id="loginForm" onSubmit={login}>
              <div className="relative mt-6">
                <input
                  type="text"
                  name="email"
                  id="username"
                  placeholder="Username"
                  className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  autoComplete="NA"
                  value={username}
                  onChange={handleUsername}
                />
              </div>
              <div className="relative mt-6">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                  value={password}
                  onChange={handlePassword}
                />
              </div>
              <div className="my-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              <p className="text-center text-sm text-gray-500">
                Don't have an account yet?
                <a
                  href="#!"
                  className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                >
                  Sign up
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
