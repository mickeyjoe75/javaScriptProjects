import React from 'react';
import MatchdaySelector from '../components/MatchdaySelector';
import FixturesDetail from '../components/FixturesDetail';


class FootballContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtures: [],
      matchdaySelection: null
    }
    this.handleMatchdaySelected = this.handleMatchdaySelected.bind(this);
  }

  //Fetching data from the API link:
  componentDidMount(){
    const url = 'http://api.football-data.org/v1/competitions/467/fixtures';
    fetch(url, {
      headers: {
        "X-Auth-Token": "1d954537605c42709c3a89b44818d906"
      }
    })
    .then(res => res.json())
    .then(fixturesData => this.setState({fixtures: fixturesData.fixtures}))
    .catch(error => console.log("Error:", error))
  }

//old method
  // var url = 'http://api.football-data.org/v1/fixtures';
  // var request = new XMLHttpRequest();
  // request.open("GET", url);
  // request.setRequestHeader("X-Auth-Token", "1d954537605c42709c3a89b44818d906");
  // request.onload =  () => {
  //   console.log(this)
  //   console.log(request)
  // }
  // request.send(null);


  handleMatchdaySelected(index) {
    const selectedMatchday = this.state.fixtures[index];
    this.setState({currentMatchday: selectedMatchday});
  }

  render(){
    return (
      <div>
        <h2>FIFA Worldcup Russia 2018 Fixtures</h2>
        <MatchdaySelector fixtures={this.state.fixtures} onMatchDaySelected={this.handleMatchdaySelected} />
        <FixturesDetail fixture={this.state.currentMatchday} />

      </div>
    )
  }
}


export default FootballContainer;
