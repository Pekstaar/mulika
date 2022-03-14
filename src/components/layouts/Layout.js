import React, { useContext, useEffect } from "react";
import { Context } from "../../utils/MainContext";
import { BottomNavigation } from "../general/BottomNavigation";

export const Layout = ({ children, current }) => {
  const { setCurrentTab } = useContext(Context);

  useEffect(() => {
    setCurrentTab(current.toLowerCase());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <div
      className="h-screen"
      style={{
        display: "grid",
        gridTemplateRows: "1fr 4rem",
        maximumHeight: "100%",
        maxiumumWidth: "100%",
      }}
    >
      {/* main body */}
      <div>{children}</div>
      {/* bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-white">
        <BottomNavigation />
      </div>
    </div>
  );
};
