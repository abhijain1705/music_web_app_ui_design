import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div className="px-12 mb-12 py-4 absolute bg-white text-[#2A1E1E] flex flex-col gap-3 justify-evenly items-center min-w-[350px] w-max rounded-[30px] h-max">
      {children}
    </div>
  );
};

export default Wrapper;
