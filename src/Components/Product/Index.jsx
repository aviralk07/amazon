import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import StarRatings from "react-star-ratings";

const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product_info">
        <p className="product-p">{title}</p>
        <p className="product_price">
          <small> ₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          <StarRatings
         
            rating={rating}
            starRatedColor="#f39c12" // Color when rated
            starEmptyColor="#ecf0f1" // Color for empty stars
            starHoverColor="#09A428" // Color on hover
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
          />
        </div>
      </div>
      <img
        src={image}
        alt=""
        style={{
          background: "transparent!important",
        }}
      />
      <Button variant="warning">Add to basket</Button>{" "}
    </div>
  );
};

export default Product;
