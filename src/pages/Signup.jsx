import React, { useState } from "react";
import authService from "../appwrite/authService";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button } from "../components/index";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { logIn } from "../store/authSlice";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const submit = async (data) => {
    setError("");
    try {
      const userData = await authService.signUp(data);
      if (userData) {
        navigate("/login");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-white">
      <div className="bg-gray-800 rounded-2xl p-8 shadow-lg sm:w-96">
        <h2 className="font-semibold text-center text-2xl text-white mb-5">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(submit)}>
          <div className="flex flex-col w-full">
            <Input
              type="text"
              placeholder="Username"
              className="px-4 w-full py-3 mb-3 border-2 rounded-xl border-gray-600 bg-gray-700 focus:outline-none focus:border-blue-500"
              {...register("username", { required: true })}
            />
            <Input
              type="email"
              placeholder="Email"
              className="px-4 w-full py-3 mb-3 border-2 rounded-xl border-gray-600 bg-gray-700 focus:outline-none focus:border-blue-500"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              type="password"
              placeholder="Password"
              className="px-4 w-full py-3 mb-3 border-2 rounded-xl border-gray-600 bg-gray-700 focus:outline-none focus:border-blue-500"
              {...register("password", { required: true })}
            />
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
