import React from "react";
import { Layout } from "../components/layouts/Layout";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import record from "../assets/record_2.jpg";
import { useNavigate } from "react-router-dom";

export const ViewRider = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <Layout current="Rogue Riders">
      <div className="pb-20">
        {/* header */}
        <div className="flex items-center h-14 px-3">
          <button onClick={navigateBack} className="text-2xl">
            <IoArrowBackSharp />
          </button>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div>
            <FaRegAddressCard className="text-6xl" />
          </div>

          <div className="">
            <span className="text-4xl font-bold">KXT 4322</span>
          </div>

          <div className="flex gap-1 items-center font-medium text-xl">
            <div className="gradient w-16 h-16 flex items-center justify-center rounded">
              <span className="text-4xl font-bold text-white">5</span>
            </div>
            incidents
          </div>

          <div className="grid grid-cols-3 px-2 gap-1">
            <img
              src={record}
              alt="recordings"
              className="h-32 w-32 object-cover"
            />
            <img
              src={record}
              alt="recordings"
              className="h-32 w-32 object-cover"
            />
            <img
              src={record}
              alt="recordings"
              className="h-32 w-32 object-cover"
            />
            <img
              src={record}
              alt="recordings"
              className="h-32 w-32 object-cover"
            />
            <img
              src={record}
              alt="recordings"
              className="h-32 w-32 object-cover"
            />
            <img
              src={record}
              alt="recordings"
              className="h-32 w-32 object-cover"
            />
            <img
              src={record}
              alt="recordings"
              className="h-32 w-32 object-cover"
            />
            <img
              src={record}
              alt="recordings"
              className="h-32 w-32 object-cover"
            />
            <img
              src={record}
              alt="recordings"
              className="h-32 w-32 object-cover"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
