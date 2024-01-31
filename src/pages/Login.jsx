import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button } from "../components/index";
import authService from "../appwrite/authService";
import { logIn } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const submit = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        console.log(userData);
        if (userData) dispatch(logIn(userData));
        navigate("/posts");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-white">
      <div className="bg-gray-800 rounded-2xl p-8 shadow-lg sm:w-96">
        <h2 className="font-semibold text-center text-2xl text-white mb-5">
          Log In
        </h2>
        <form onSubmit={handleSubmit(submit)}>
          <div className="flex flex-col w-full">
            <Input
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
              placeholder="Password"
              className="px-4 w-full py-3 mb-3 border-2 rounded-xl border-gray-600 bg-gray-700 focus:outline-none focus:border-blue-500"
              {...register("password", {
                required: true,
              })}
            />
            <Button className="w-full" type="submit">
              Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
