import React, { useState } from "react";
import cart from "../assets/cart1.png";
import "./Card.css";

const Card = (props) => {
  const discountedPrice = (props.price * (100 - props.discount)) / 100;

  return (
    <>
      <div className="card">
        <div className="card-image-wrapper">
          <img
            className="card-img"
            src={props.image}
            alt={props.title}
            loading="lazy"
          />
          <span className="box">{props.discount}% OFF</span>
        </div>
        <h3>{props.title}</h3>
        <div className="row flex">
          <div className="price-section">
            <span style={{ textDecoration: "line-through" }}>
              ₹{props.price}
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
