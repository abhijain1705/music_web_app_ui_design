import React from "react";

const Button = ({ label }) => {
  return (
    <div className="bg-[#2A1E1E] min-w-max max-w-[250px] w-full h-12 rounded-[15px] text-white text-center items-center justify-center flex">
      {label}
    </div>
  );
};

export default Button;
