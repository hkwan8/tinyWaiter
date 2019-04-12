import React, { Component } from "react";
import "./App.css";
import Footer from "./components/layout/Footer.js";
import Header from "./components/layout/Header.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OtherPage from "./components/pages/OtherPage";
import Recipes from "./components/pages/Recipes";
import Journal from "./components/pages/Journal";
import Add from "./components/pages/Add";
import Explore from "./components/pages/Explore";
import Profile from "./components/pages/Profile";

function callback1() {
  // doStuff;
}

class App extends Component {
  render() {
    return (
      <Router>
        <Header
          noBack
          rightSide="sliders"
          callBack={callback1}
          title="Recipes"
        />
        <div className="content">
          <Route path="/other" component={OtherPage} />
          <Route path="/recipes" component={Recipes} />
          <Route path="/journal" component={Journal} />
          <Route path="/add" component={Add} />
          <Route path="/explore" component={Explore} />
          <Route path="/profile" component={Profile} />
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
