import React, { Component } from "react";
import Example from "./navbar";
import Footer from "./footer";
import Menu from "./menucard";
import Frontpage from "./carousel";
import "../styles.css";
class Dashboard extends Component {
  render() {
    return (
      <div>
        <Example />
        <Frontpage />
        <Menu />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
