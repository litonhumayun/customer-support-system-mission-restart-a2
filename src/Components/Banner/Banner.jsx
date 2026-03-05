import React from "react";

const Banner = ({ progressCount, resolvedCount }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-8xl mx-auto my-10 px-4">
      <div className="flex-1 bg-linear-to-bl from-blue-400 via-purple-500 to-pink-500 p-8 flex flex-col items-center justify-center rounded-xl shadow-lg text-white transition-transform hover:scale-105">
        <h2 className="text-xl font-bold uppercase tracking-wider opacity-90">
          In-Progress
        </h2>
        <p className="text-5xl font-black mt-2">{progressCount}</p>
      </div>

      <div className="flex-1 bg-blue-100 border-2 border-blue-200 p-8 flex flex-col items-center justify-center rounded-xl shadow-md text-blue-900 transition-transform hover:scale-105">
        <h2 className="text-xl font-bold uppercase tracking-wider opacity-80">
          Resolved
        </h2>
        <p className="text-5xl font-black mt-2">{resolvedCount}</p>
      </div>
    </div>
  );
};

export default Banner;
