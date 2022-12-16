import React, { Component } from "react";
import Button from "./Button";

export class Card extends Component {
  render() {
    const { imgSrc, title, description, url } = this.props;
    console.log(this.props);
    return (
      <div className="news__card">
        <div style={{ padding: "10px" }}>
          <img src={imgSrc} alt="" width="100%" />
          <h4>{title}</h4>
          <p>{description}</p>
          <Button
            buttonText="Read More"
            onClick={() => {
              window.open(url);
            }}
          />
        </div>
      </div>
    );
  }
}

export default Card;
