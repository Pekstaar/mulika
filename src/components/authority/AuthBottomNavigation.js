import React, { useContext } from "react";
import { Context } from "../../utils/MainContext";
import { AiOutlineAlert, AiOutlineUser } from "react-icons/ai";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdDirectionsBike } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const AuthBottomNavigation = () => {
  return (
    <div className="h-full w-full flex items-center justify-around">
      <NavTab
        text="Alerts"
        icon={<AiOutlineAlert className="text-2xl text-inherit" />}
        path="/auth"
      />

      <NavTab
        text="Recording"
        icon={<MdOutlineOndemandVideo className="text-2xl text-inherit" />}
        path="/auth/recording"
      />

      <NavTab
        text="Rogue Riders"
        icon={<MdDirectionsBike className="text-2xl text-inherit" />}
        path="/auth/riders"
      />

      <NavTab
        text="Profile"
        icon={<AiOutlineUser className="text-2xl text-inherit" />}
        path="/auth/profile"
      />
    </div>
  );
};

const NavTab = ({ text, icon, path }) => {
  const { currentTab, setCurrentTab } = useContext(Context);
  const navigate = useNavigate();
  return (
    <button
      className={` w-24  flex flex-col items-center ${
        currentTab === text.toLowerCase() ? "text-black" : "text-gray-400"
      }`}
      onClick={() => {
        setCurrentTab(text.toLowerCase());

        navigate(path);
      }}
    >
      {/* icon */}
      {icon}
      {/* text */}
      <span className="text-xs">{text}</span>
    </button>
  );
};
