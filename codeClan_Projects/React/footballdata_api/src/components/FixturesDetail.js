import React from 'react';

const FixturesDetail = (props) => {
  if(!props.fixture) return null
  return (
    <div>
      <h3>Match Day: {props.fixture.matchday}</h3>
      <p>Home Team: {props.fixture.homeTeamName}</p>
      <p>Away Team: {props.fixture.awayTeamName}</p>
      <p>Result: {props.fixture["result"]['goalsHomeTeam']}</p>
      {/* <p>Result: {props.fixture.result["goalsAwayTeam"]}</p> */}
      <iframe titile="detail">Links : {props.fixture["_links"]["homeTeam"]["href"]}</iframe>

    </div>
  )
}

export default FixturesDetail;
