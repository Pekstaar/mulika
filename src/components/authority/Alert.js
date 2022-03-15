import React from "react";

export const Alert = ({ location, description, isViewed }) => {
  return (
    <div className="bg-white rounded-2xl p-2 flex justify-between px-4">
      {/* notification red */}
      <div className="flex items-center">
        {isViewed && (
          <div className="rounded-full text-white font-medium  bg-red-500 text-xs flex items-center justify-center h-2 w-2" />
        )}
      </div>
      {/* details */}

      <div className="flex flex-col gap-1  " style={{ flexGrow: "0.7" }}>
        <span className="text-sm font-bold">{location}</span>

        <p className={` text-gray-700 px-1 text-xs `}>{description}</p>
      </div>

      {/* time */}
      <div className="flex items-end"></div>
    </div>
  );
};
