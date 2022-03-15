import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../components/layouts/Layout";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import search from "../assets/icon_search.svg";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../utils/MainContext";

export const Riders = () => {
  const { incidents } = useContext(Context);
  const [cases, setCases] = useState([]);

  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (incidents) {
      const arr = Object.entries(incidents);

      let cArr = [];
      arr.forEach((item) => {
        const caseDetails = {
          plate: item[0],
          numberOfCases: item[1].length,
        };
        cArr.push(caseDetails);
      });
      setCases(cArr);
    }
  }, [incidents]);

  return (
    <Layout current="Rogue Riders">
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
    </Layout>
  );
};

export const ListItem = ({ plate, number }) => (
  <Link to="/riders/id">
    <div className="flex items-center p-3 bg-gray-40 cursor-pointer gap-3">
      {/* icon */}
      <div>
        <FaRegAddressCard className="text-3xl" />
      </div>

      <div className="grow">
        <span className="text-lg font-medium">{plate}</span>
      </div>

      <div className="">
        <span className="gradient-text text-xl font-bold">{number}</span>
      </div>
    </div>
  </Link>
);
