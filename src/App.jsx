import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/index";
import authService from "./appwrite/authService";
import { logIn, logOut } from "./store/authSlice";
import { useDispatch } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(logIn({ userData }));
        } else {
          dispatch(logOut());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div>
      <Header />
      <Outlet />
    </div>
  ) : null;
}

export default App;
