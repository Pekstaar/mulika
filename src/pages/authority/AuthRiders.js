import React, { useState } from "react";
import { AuthLayout } from "../../components/layouts/AuthLayout";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import search from "../../assets/icon_search.svg";
import { ListItem } from "../Riders";

export const AuthRiders = () => {
  const navigate = useNavigate();
  const [cases] = useState([
    {
      plate: "KFC 112D",
      numberOfCases: 5,
    },
    {
      plate: "KNDC 2012D",
      numberOfCases: 3,
    },
  ]);

  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <AuthLayout current="Rogue Riders">
      {/* search */}
      <div className="flex justify-around items-center h-20">
        <button onClick={navigateBack} className="text-2xl">
          <IoArrowBackSharp />
        </button>

        <div className="flex gap-1 bg-slate-100 h-3/4 items-center justify-center rounded-xl w-4/5">
          <div className="px-2">
            <img src={search} alt="" />
          </div>

          <input
            type="text"
            className="h-full grow rounded-r-xl bg-inherit px-2 "
            placeholder="search number plate"
          />
        </div>
      </div>

      {/* list */}
      <div className="flex flex-col gap-2 px-2 py-3">
        {cases &&
          cases.map((c, key) => (
            <ListItem key={key} plate={c.plate} number={c.numberOfCases} />
          ))}
      </div>
    </AuthLayout>
  );
};
