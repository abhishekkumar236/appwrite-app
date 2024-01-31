import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "./index";
import { useSelector, useDispatch } from "react-redux";
import authService from "../appwrite/authService";
import { logOut } from "../store/authSlice";

function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const links = [
    {
      to: "/",
      text: "Sign Up",
      status: isAuthenticated,
    },
    {
      to: "/home",
      text: "Home",
      status: !isAuthenticated,
    },
    {
      to: "/posts",
      text: "Posts",
      status: !isAuthenticated,
    },
    {
      to: "/add-post",
      text: "Add Post",
      status: !isAuthenticated,
    },
    {
      to: "/edit-post",
      text: "Edit Post",
      status: !isAuthenticated,
    },
  ];

  return (
    <div className="bg-slate-950 text-white text-lg fixed top-0 left-0 right-0 flex flex-row items-center w-full h-14">
      <div className="flex flex-row items-center">
        {links.map((link, index) =>
          !link.status ? (
            <div
              key={index}
              className="px-4 mx-3 hover:text-black hover:bg-blue-500 hover:border-blue-500 rounded-3xl py-1 transition duration-300 ease-in-out"
            >
              <Link to={link.to}>{link.text}</Link>
            </div>
          ) : null
        )}
      </div>

      <div className="ml-auto mr-3">
        {isAuthenticated ? (
          <>
            <Logout />
          </>
        ) : (
          <Link
            to="/login"
            className="hover:text-black hover:bg-blue-500 hover:border-blue-500 rounded-3xl px-3 py-1 transition duration-300 ease-in-out"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
