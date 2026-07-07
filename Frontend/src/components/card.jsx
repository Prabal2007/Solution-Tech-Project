import React, { useState } from "react";
import cart from "../assets/cart1.png";
import "./card.css";

const Card = (props) => {
  const discountedPrice = (props.cost * (100 - props.percent)) / 100;

  return (
    <>
      <div className="card">
        <span className="box">{props.percent}% OFF</span>
        <img
          className="card-img"
          src={props.link}
          alt={props.title}
          loading="lazy"
        />
        <h3>{props.title}</h3>
        <div className="row flex">
          <div className="price-section">
            <span style={{ textDecoration: "line-through" }}>
              ₹{props.cost}
            </span>
            <span>₹{discountedPrice}</span>
          </div>
          <button className="btn">
            <img src={cart} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
