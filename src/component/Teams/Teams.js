import React, { useEffect, useState } from "react";
import SingleTeam from "../SingleTeam/SingleTeam";


const Teams = () => {
  const [teams, setTeam] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTeam(data.teams));
  }, []);
  return (
    <div  className="container mt-5">
      <div className="row">
        {teams.map((team) => (
          <SingleTeam team={team}></SingleTeam>
        ))}
      </div>
    </div>
  );
};

export default Teams;
