import React, { Component } from "react";
import { Link } from "react-router-dom";
import bannerImage from "../images/banner.webp";

export class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <section className="banner__text">
          <h2>Welcome to Tazza Khabar</h2>
          <h3>Some text... !!!</h3>
          <Link to="/contact">
            <button>Explore News</button>
          </Link>
        </section>
        <section className="banner__image">
          <img
            src={bannerImage}
            alt="banner--logo"
            srcset=""
            width="100%"
            className="banner_image"
          />
        </section>
      </div>
    );
  }
}

export default Banner;
