import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

export const Loader = ({ loading, message }) => {
  return (
    <div
      className=" h-screen absolute top-0 z-10 w-full flex flex-col gap-2 items-center justify-center"
      style={{
        backgroundColor: "#55555550",
      }}
    >
      <span className="text-white font-medium text-center text-xl">
        {message}
      </span>
      <BounceLoader color={"white"} loading={loading} size={80} />
    </div>
  );
};
