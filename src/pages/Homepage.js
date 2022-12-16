import React, { Component } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Banner from "../component/Banner";

export class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
