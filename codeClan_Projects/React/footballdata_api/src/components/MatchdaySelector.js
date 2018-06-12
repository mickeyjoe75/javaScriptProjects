import React from 'react';

const MatchdaySelector = (props) => {

  const options = props.fixtures.map((fixture, index) => {
    return <option value={index} key={index}>{fixture.date}</option>
  })

  function handleChange(event) {
    props.onMatchDaySelected(event.target.value)
  }

  return (
    <select id="matchday-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a matchday to view the fixtures..</option>
      {options}
    </select>
  )
}

export default MatchdaySelector;
