import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Submit } from "../../components/general/Buttons";
import { Input } from "../../components/general/Inputs";

export const Login = () => {
  const [loginState, setLoginState] = useState({
    id: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //   submission code comes here
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-slate">
      {/* header */}
      <div className="flex flex-col gap-4 items-center mb-4">
        <span className="text-3xl font-bold">Login</span>
        <span className="text-gray-500 font-medium">Welcome back!</span>
      </div>

      {/* body */}
      <form className="w-10/12 grid gap-5" onSubmit={handleSubmit}>
        <Input
          label="Identifcation Number"
          type="text"
          className=" my-8"
          name="id"
          value={loginState.id}
          onChange={handleChange}
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={loginState.password}
          onChange={handleChange}
        />

        <Submit text="Login" />

        <span className="font-bold text-center text-sm ">
          Do not have an account?{" "}
          <Link to="/auth/register" as="span" className="text-indigo-600">
            Register
          </Link>
        </span>
      </form>
    </div>
  );
};
