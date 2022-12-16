import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            TAZZA KHABAR
          </Link>
        </h1>
        <ul>
          <li>
            <Link className="anchor__cus" to="/general" >
              General
            </Link>
          </li>
          <li>
            <Link className="anchor__cus" to="/entertainment">
              Entertainment
            </Link>
          </li>
          <li>
            <Link className="anchor__cus" to="/science">
              Science
            </Link>
          </li>
          <li>
            <Link className="anchor__cus" to="/health">
              Health
            </Link>
          </li>
          <li>
            <Link className="anchor__cus" to="/sports">
              Sports
            </Link>
          </li>
          <li>
            <Link className="anchor__cus" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
