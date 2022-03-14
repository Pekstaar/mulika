import React, { useContext, useEffect } from "react";
import { Context } from "../../utils/MainContext";
import { AuthBottomNavigation } from "../authority/AuthBottomNavigation";

export const AuthLayout = ({ children, current }) => {
  const { setCurrentTab } = useContext(Context);

  useEffect(() => {
    setCurrentTab(current.toLowerCase());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <div
      className="h-screen"
      style={{ display: "grid", gridTemplateRows: "1fr 4rem" }}
    >
      {/* main body */}
      <div>{children}</div>
      {/* bottom Navigation */}
      <div className="h-16 ">
        <AuthBottomNavigation />
      </div>
    </div>
  );
};
