import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";

export class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.props.children}
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;
