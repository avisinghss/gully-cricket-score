import React, { useState } from "react";
import "./Coin.css";
import heads from "./imgs/heads.png"
import tails from "./imgs/tails.png"

const CoinFlip = () => {
  const [result, setResult] = useState("");
  const [flip, setFlip] = useState("flip");

  const coinToss = () => {
    setFlip("");
    setResult((prevResult) => {
      const newResult = Math.random() < 0.5 ? "heads" : "tails";
      console.log(newResult);
      return newResult;
    });
  };

  return (
    <div className="coinflip">
      <div id="coin" className={result}>
        <div className="side-a">
          {/* <h2>TAIL</h2> */}
          <img alt="heads" src={tails}/>

        </div>
        <div className="side-b">
          {/* <h2>HEAD</h2> */}
          <img alt="heads" src={heads}/>
        </div>
      </div>
      <h1>Flip a coin</h1>
      <button id="btn" onClick={coinToss}>
        Coin Toss
      </button>
    </div>
  );
};

export default CoinFlip;
