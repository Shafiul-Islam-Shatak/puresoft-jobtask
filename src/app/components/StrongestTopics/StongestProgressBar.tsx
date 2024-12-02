import React from "react";

const StongestProgressBar = ({ value }: { value: number }) => {
  return (
    <div className="relative lg:w-[310px] md:w-80 w-52 h-3 bg-pink-100 rounded-lg overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full"
        style={{
          width: `${value}%`,
          background: "linear-gradient(270.00deg, rgb(47, 234, 155) 15.5%,rgb(127, 221, 83) 85.5%)",
        }}
      ></div>
    </div>
  );
};

export default StongestProgressBar;
