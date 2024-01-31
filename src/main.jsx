import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { store } from "./store/store.js";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import AllPosts from "./pages/AllPosts.jsx";
import AddPost from "./pages/AddPost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Error from "./components/Error.jsx";
import { Provider } from "react-redux";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<Error />}>
      <Route index element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts" element={<AllPosts />} />
      <Route path="/add-post" element={<AddPost />} />
      <Route path="/edit-post" element={<EditPost />} />
      {/* <Route path="/" element={<Error />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
