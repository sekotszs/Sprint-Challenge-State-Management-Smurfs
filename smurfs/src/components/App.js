import React, { useState, useEffect } from "react";
import axios from "axios";
import Smurfs from "./Smurfs";
import AddNewSmurf from "./AddNewSmurf";
import SmurfContext from "../components/Context/SmurfContext";
import "./App.css";

export default function App() {
  const [smurf, setSmurf] = useState([]);
  console.log(smurf);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((res) => {
        console.log(res.data);
        setSmurf(res.data);
      })
      .catch((err) => {
        console.error("THERE IS AN ERROR", err);
      });
  }, []);

  const addSmurf = (smurf) => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
        console.log("post res", res);
        setSmurf(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <SmurfContext.Provider value={smurf}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <h2>WELCOME TO THE VILLAGE</h2>
        <Smurfs />
        <AddNewSmurf addSmurf={addSmurf} />
      </SmurfContext.Provider>
    </div>
  );
}
