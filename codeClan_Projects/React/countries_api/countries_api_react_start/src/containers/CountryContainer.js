import React from 'react';
import CountrySelector from '../components/CountrySelector';
import CountryDetail from '../components/CountryDetail';

class CountryContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      countries: [],
      currentCountry: null
    };
  }
//to fetch data from API links
  componentDidMount(){
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
      .then(res => res.json())
      .then(countriesData => this.setState({countries: countriesData}))
      .catch(error => console.log("Error:", error))
  }

  render(){
    return (
      <div>
        <h2>Country Container</h2>
        <CountrySelector countries={this.state.countries}/>
        <CountryDetail />
      </div>
    );
  }
}

export default CountryContainer;
