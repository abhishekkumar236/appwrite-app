import React from "react";
import { Input, Button } from "../components/index";

function Login() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-white">
      <div className="bg-gray-800 rounded-2xl p-8 shadow-lg sm:w-96">
        <h2 className="font-semibold text-center text-2xl text-white mb-5">
          Log In
        </h2>
        <form>
          <div className="flex flex-col w-full">
            <Input
              placeholder="Email"
              className="px-4 w-full py-3 mb-3 border-2 rounded-xl border-gray-600 bg-gray-700 focus:outline-none focus:border-blue-500"
            />
            <Input
              placeholder="Password"
              className="px-4 w-full py-3 mb-3 border-2 rounded-xl border-gray-600 bg-gray-700 focus:outline-none focus:border-blue-500"
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
