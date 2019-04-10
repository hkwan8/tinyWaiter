import React, { Component } from "react";
import "./App.css";
import Footer from "./components/layout/Footer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OtherPage from "./components/pages/OtherPage";

class App extends Component {
  render() {
    return (
      <Router>
        This is constant
        <Route path="/other" component={OtherPage} />
        <Footer />
      </Router>
    );
  }
}

export default App;
