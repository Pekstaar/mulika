import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Submit } from "../../components/general/Buttons";
import { Input } from "../../components/general/Inputs";

export const Register = () => {
  const [registrationState, setRegistrationState] = useState({
    name: "",
    id: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegistrationState({
      ...registrationState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // register code
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-slate">
      {/* header */}
      <div className="flex flex-col gap-4 items-center mb-4">
        <span className="text-3xl font-bold">Register</span>
        <span className="text-gray-500 font-medium">Welcome</span>
      </div>

      {/* body */}
      <form className="w-11/12 grid gap-5" onSubmit={handleSubmit}>
        <Input
          label="Name"
          type="text"
          className=" my-8"
          name="name"
          value={registrationState.name}
          onChange={handleChange}
        />

        <Input
          label="Identification Number"
          type="text"
          name="id"
          value={registrationState.id}
          onChange={handleChange}
        />

        <Input
          label="Identification Number"
          type="text"
          name="password"
          value={registrationState.id}
          onChange={handleChange}
        />

        <Submit text="Register" />

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
