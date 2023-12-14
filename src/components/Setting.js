import React, { useState } from "react";
import "./Setting.css";

const Settings = () => {
  const [playerA, setPlayerA] = useState(0);
  const [playerB, setPlayerB] = useState(0);
  const [over, setOver] = useState(0);

  const handleSaveClick = (e) => {
    e.preventDefault();

    // Get selected values from the form
    const teamAValue = document.getElementById("teamA").value;
    const teamBValue = document.getElementById("teamB").value;
    const overValue = document.getElementById("over").value;

    // Update state with the selected values
    setPlayerA(teamAValue);
    setPlayerB(teamBValue);
    setOver(overValue);
  };

  return (
    <div className="form-setting">
      <form id="form-data">
        <label htmlFor="teamA">Team A:</label>
        <select id="teamA" name="teamA" required>
          {Array.from({ length: 11 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <br />
        <hr />
        <label htmlFor="teamB">Team B:</label>
        <select id="teamB" name="teamB" required>
          {Array.from({ length: 11 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <br />
        <hr />
        <label htmlFor="over">Over:</label>
        <input id="over" placeholder="Enter number" type="number" />
        <br />
        <hr />
        <button id="btn" onClick={handleSaveClick}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Settings;
