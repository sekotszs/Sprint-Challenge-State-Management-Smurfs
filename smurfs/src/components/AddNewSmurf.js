import React, { useState } from "react";

export default function AddNewSmurf(props) {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const handleChanges = (e) => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(smurf);
    setSmurf({
      name: "",
      age: "",
      height: "",
    });
  };

  return (
    <>
      <input
        type="text"
        name="name"
        value={smurf.name}
        onChange={handleChanges}
        placeholder=" add name "
      />

      <input
        type="text"
        name="age"
        value={smurf.age}
        onChange={handleChanges}
        placeholder=" add age"
      />

      <input
        type="text"
        name="height"
        value={smurf.height}
        onChange={handleChanges}
        placeholder="add height"
      />

      <button className="smurfButton" onClick={handleSubmit}>
        {" "}
        Add A New Smurf{" "}
      </button>
    </>
  );
}
