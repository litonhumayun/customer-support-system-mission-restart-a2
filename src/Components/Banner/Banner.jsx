import React from "react";

const Banner = ({ progressCount, resolvedCount }) => {
  return (
    <div className="flex justify-center gap-2">
      <div className="border-2 bg-linear-to-bl from-blue-400 via-purple-500 to-pink-500 w-187 h-62 flex items-center justify-center flex-col">
        <h2>In-Progress</h2>
        <p>{progressCount}</p>
      </div>
      <div className="border-2 bg-blue-200 w-187 h-62 flex items-center justify-center flex-col">
        <h2>Resolved</h2>
        <p>{resolvedCount}</p>
      </div>
    </div>
  );
};

export default Banner;
