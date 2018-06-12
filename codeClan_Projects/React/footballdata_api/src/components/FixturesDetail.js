import React from 'react';

const FixturesDetail = (props) => {
  if(!props.fixture) return null
  return (
    <div>
      <h3>Match Day: {props.fixture.matchday}</h3>
      <p>Home Team: {props.fixture.homeTeamName}</p>
      <p>Away Team: {props.fixture.awayTeamName}</p>
      <p>Result: {props.fixture.result.value}</p>
      <p>Links : {props.fixture._links.value}</p>

    </div>
  )
}

export default FixturesDetail;
