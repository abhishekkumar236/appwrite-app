import React from "react";

function Button({ children, type = "submit", className, ...props }) {
  return (
    <button
      type={type}
      className={`text-xl bg-blue-600 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-300 text-white font-semibold  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
