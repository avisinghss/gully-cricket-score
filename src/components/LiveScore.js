import React, { useEffect, useState } from "react";
import MyCard from "./MyCard/Card.js";
import { getMatches } from "./api/cricapi.js";

const LiveScore = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.data);
        console.log(data);
      })
      .catch((error) => alert("Loading mei samasya"));
  }, []);
  return (
    <div className="score-page">
      <h1>LiveScore Page</h1>

      {matches.map((match) => (
        <MyCard key={match.unique_id} match={match} />
      ))}
    </div>
  );
};

export default LiveScore;
