import React from "react";
// import styled from "styled-components";
import product1 from "../Images/products/11.jpg";
import product2 from "../Images/products/12.jpg";
import product3 from "../Images/products/13.jpg";
import product4 from "../Images/products/14.jpg";
import product5 from "../Images/products/15.jpg";
import product6 from "../Images/products/16.jpg";
import product7 from "../Images/products/17.jpg";
// import { imageZoomEffect, TitleStyles } from "./ReusableStyles";
import './Products.css'
export default function Products() {
  const data = [
    {
      image: product1,
      name: "Tonkotsu Shoyu",
      price: "$10.0",
    },
    {
      image: product2,
      name: "Tonkotsu Shio",
      price: "$10.0",
    },
    {
      image: product3,
      name: "Tonkotsu Miso",
      price: "$10.0",
    },
    {
      image: product4,
      name: "Tantan Men",
      price: "$10.0",
    },
    {
      image: product5,
      name: "Tantan Men",
      price: "$10.0",
    },
    {
      image: product6,
      name: "Tantan Men",
      price: "$10.0",
    },
    {
      image: product7,
      name: "Tantan Men",
      price: "$10.0",
    },
  ];
  return (
    <>
      <div className="title">
        <h1>
          <span>Favourite</span> All the time!
        </h1>
      </div>
      <div className="products">
        {data.map((product) => {
          return (
            <div className="product">
              <div className="image">
                <img src={product.image} alt="" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>He Printing and Typesetting the industry. Lorem Ipsum has</p>
              {/* <button>Buy Now</button> */}
            </div>
          );
        })}
      </div>
    </>
  );
}

