import React, { Component } from "react";
import About from "./About";
import Home from "./Home";
import Pricing from "./Pricing";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      pricing: [
        {level: "Hobby", cost: 0},
        {level: "Startup", cost: 10},
        {level: "Enterprise", cost: 100}
      ]
    }
    // this.state = { page: null };
    //
    // this.gotoHome = this.gotoHome.bind(this);
    // this.gotoAbout = this.gotoAbout.bind(this);
    // this.gotoPricing = this.gotoPricing.bind(this);
  }

  render() {
    // const child = this.pageComponent();
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/pricing" render={() => <Pricing prices={this.state.pricing}/>}/>
        </React.Fragment>
      </Router>

    );
  }

  // pageComponent() {
  //   switch (this.state.page) {
  //     case "/about":
  //       return <About />;
  //     case "/pricing":
  //       return <Pricing />;
  //     default:
  //       return <Home />;
  //   }
  // }

  // gotoHome(event) {
  //   event.preventDefault();
  //   this.setState({ page: "/home" });
  // }
  //
  // gotoAbout(event) {
  //   event.preventDefault();
  //   this.setState({ page: "/about" });
  // }
  //
  // gotoPricing(event) {
  //   event.preventDefault();
  //   this.setState({ page: "/pricing" });
  // }
}

export default Main;
