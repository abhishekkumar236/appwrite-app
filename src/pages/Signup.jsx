import React from "react";
import { Input, Button } from "../components/index";
import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-white">
      <div className="bg-gray-800 rounded-2xl p-8 shadow-lg sm:w-96">
        <h2 className="font-semibold text-center text-2xl text-white mb-5">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              {...register("email", { required: true })}
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
    // <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
    //   <div className="bg-gray-800 p-8 rounded shadow-lg sm:w-96">
    //     <h2 className="text-3xl font-semibold text-center mb-4">Sign Up</h2>
    //     <form
    //       method="post"
    //       // onSubmit={handleSubmit(handleRegister)}
    //     >
    //       <div className="mb-4">
    //         <Input
    //           type="text"
    //           name="username"
    //           placeholder="Username"
    //           // {...register("username", { required: true })}
    //           className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-700 focus:outline-none focus:border-blue-500"
    //         />
    //       </div>

    //       <div className="mb-4">
    //         <Input
    //           type="text"
    //           name="email"
    //           placeholder="Email"
    //           // {...register("email", { required: true })}
    //           className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-700 focus:outline-none focus:border-blue-500"
    //         />
    //       </div>
    //       <div className="mb-6">
    //         <Input
    //           type="password"
    //           name="password"
    //           placeholder="Password"
    //           className="w-full px-4 py-2 rounded border border-gray-600 bg-gray-700 focus:outline-none focus:border-blue-500"
    //           // {...register("password", {
    //           //   required: true,
    //           // })}
    //         />
    //       </div>
    //       <button
    //         type="submit"
    //         className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded focus:outline-none focus:bg-blue-600"
    //       >
    //         Sign Up
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}

export default Signup;
