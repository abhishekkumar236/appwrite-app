import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const isAuthenticated = false;
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
      {links.map((link, index) =>
        !link.status ? (
          <div key={index} className="px-4">
            <Link to={link.to}>{link.text}</Link>
          </div>
        ) : null
      )}
    </div>
  );
}

export default Header;
