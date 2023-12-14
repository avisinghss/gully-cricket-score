import React from "react";
import "./Card.css";
export default function MyCard({match}) {
  return (
    <div className="card-container">
      <div className="left-img"></div>
      <div className="right-img">
        <h1>TeamB</h1>
      </div>
      <h1 className="mtc-title">{match['name']}</h1>
      <div className="btn-card">
        <button>Show Details</button>
        <button>{new Date().toString()}</button>
      </div>
    </div>
  );
}
