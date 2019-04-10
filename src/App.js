import React, { Component } from "react";
import "./App.css";
import Footer from "./components/layout/Footer.js";
import Header from "./components/layout/Header.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import OtherPage from "./components/pages/OtherPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="content">
          <Route path="/other" component={OtherPage} />
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
