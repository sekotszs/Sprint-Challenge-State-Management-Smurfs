import React from "react";
import Smurfs from "./Smurfs";

export default function Smurf(props) {
  return (
    <div>
      <h3> Name: {props.smurf.name}</h3>
      <h3> Age: {props.smurf.age}</h3>
      <h3> Height: {props.smurf.height}</h3>
    </div>
  );
}
