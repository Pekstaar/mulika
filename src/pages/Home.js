import React from "react";
import { Layout } from "../components/layouts/Layout";
import hand from "../assets/hand_click.svg";
import { RecordButton } from "../components/general/Buttons";
import alarmLight from "../assets/alarm-light.svg";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Layout current="Home">
      <div className="h-full flex flex-col items-center justify-center gap-5">
        <div className="flex">
          <img src={alarmLight} alt="" />

          <span className=" text-xl font-bold">Tap to Record</span>
        </div>

        <Link to="/record">
          <RecordButton hand={hand} />
        </Link>
      </div>
    </Layout>
  );
};
