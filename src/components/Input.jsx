import React from "react";

function Input({ type = "text", placeholder = "", className, ...props }, ref) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      {...props}
      ref={ref}
    />
  );
}

export default React.forwardRef(Input);
