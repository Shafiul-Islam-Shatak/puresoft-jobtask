import React from "react";

const GradientProgressBar = ({ value }: { value: number }) => {
  return (
    <div className="relative w-52 lg:w-[310px] md:w-80 h-4 bg-pink-100 rounded-lg overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full"
        style={{
          width: `${value}%`,
          background: "linear-gradient(143.13deg, rgb(255, 191, 26) 12.473%, rgb(255, 64, 128) 87.527%)",
        }}
      ></div>
    </div>
  );
};

export default GradientProgressBar;
