import React, { useState } from "react";
import { AuthLayout } from "../../components/layouts/AuthLayout";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Alert } from "../../components/authority/Alert";

const initialState = [
  {
    location: "Thika Road, Survey",
    description: "Rogue Rider along pavement",
    isViewed: true,
  },
  {
    location: "Nairobi Cbd, Afya Center",
    description: "Wreckless driving",
    isViewed: false,
  },
  {
    location: "Nairobi Cbd, Rondald Ngala",
    description: "Rogue Rider along pavement",
    isViewed: true,
  },
  {
    location: "Embakasi East, Fedha Estate",
    description: "Wreckless driving",
    isViewed: true,
  },
];
export const Alerts = () => {
  const navigate = useNavigate();
  const [alerts] = useState(initialState);

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <AuthLayout current="Alerts">
      <div className="px-5">
        {/* Header */}
        <div className="flex justify-around items-center h-14 ">
          <button onClick={navigateBack} className="text-2xl">
            <IoArrowBackSharp />
          </button>

          <span className="text-2xl font-bold">Alerts</span>

          <div className="" />
        </div>

        <div className="mt-3">
          <div className="text-base font-bold">New Alerts</div>

          {/* notification items list */}
          <div className="mt-2 flex flex-col gap-2">
            {alerts &&
              alerts.map(
                (item, i) =>
                  item.isViewed && (
                    <Alert
                      key={i}
                      location={item.location}
                      description={item.description}
                      isViewed={item.isViewed}
                    />
                  )
              )}
          </div>
        </div>

        <div className="mt-3">
          <div className="text-base font-bold">Seen Alerts</div>

          {/* notification items list */}
          <div className="mt-2 flex flex-col gap-2">
            {alerts &&
              alerts.map(
                (item, i) =>
                  !item.isViewed && (
                    <Alert
                      key={i}
                      location={item.location}
                      description={item.description}
                      isViewed={item.isViewed}
                    />
                  )
              )}
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};
