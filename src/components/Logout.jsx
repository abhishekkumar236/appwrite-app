import React from "react";
import authService from "../appwrite/authService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../store/authSlice";

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <button
      type="submit"
      className="hover:text-black hover:bg-blue-500 hover:border-blue-500 rounded-3xl px-3 py-1 transition duration-300 ease-in-out"
      onClick={() => {
        authService.logout().then(() => {
          dispatch(logOut());
          navigate("/login");
        });
      }}
    >
      Log Out
    </button>
  );
}

export default Logout;
