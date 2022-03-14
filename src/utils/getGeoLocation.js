import { useState } from "react";

export const GetGeoLocation = () => {
  const [GeoLocation, setGeoLocation] = useState({});

  if (navigator.geolocation) {
    navigator.permissions
      .query({ name: "geolocation" })
      .then(function (result) {
        if (result.state === "granted") {
          navigator.geolocation.getCurrentPosition(function (position) {
            setGeoLocation(position);
          });
          //If granted then you can directly call your function here
        } else if (result.state === "prompt") {
          console.log(result.state);
        } else if (result.state === "denied") {
          //If denied then you have to show instructions to enable location
        }
        result.onchange = function () {
          return result.state;
        };
      });
  } else {
    return "Sorry Not available!";
  }

  return GeoLocation;
};
