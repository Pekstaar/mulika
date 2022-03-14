import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "./Firebase";

export const Context = createContext();

export const MainContext = ({ children }) => {
  const [currentTab, setCurrentTab] = useState("home");
  const [vBlob, setVBlob] = useState();
  const [incidents, setIncidents] = useState([]);
  const navigate = useNavigate();

  function getBlob(blob) {
    setVBlob(blob);
  }

  function redirect(to) {
    navigate(to);
  }

  const fetchIncidents = () => {
    onSnapshot(collection(db, "reported_incidents"), (docs) => {
      const rArr = [];
      docs.forEach((doc) => rArr.push({ ...doc.data(), id: doc.id }));

      const groupedByPlateArr = rArr.reduce(function (r, a) {
        r[a.plate] = r[a.plate] || [];
        r[a.plate].push(a);
        return r;
      }, Object.create(null));

      groupedByPlateArr && setIncidents(groupedByPlateArr);
    });
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  return (
    <Context.Provider
      value={{
        currentTab,
        setCurrentTab,
        vBlob,
        setVBlob,
        getBlob,
        redirect,
        incidents,
      }}
    >
      {children}
    </Context.Provider>
  );
};
