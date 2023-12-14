import React, { useState } from "react";

export default function TeamA() {
  const [score, setScore] = useState(0);
  const [wicket, setWicket] = useState(0);

  const handleScore=()=>{
    
  }
  return (
    <div className="score-keeper">
      <div className="display-score">
        <h1>
          {score}/{wicket}
        </h1>
      </div>
      <div className="over-wise-run"></div>
      <div className="score-btn">
        <button onClick={handleScore}>0</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <br />
        <button>Wicket</button>
      </div>
    </div>
  );
}
