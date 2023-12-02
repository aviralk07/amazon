import React from "react";
import "./style.css";
import StarRatings from "react-star-ratings";
import RemoveShoppingCartTwoToneIcon from "@mui/icons-material/RemoveShoppingCartTwoTone";
import Button from "@mui/material/Button";

function CheckoutProduct({ id, image, title, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProuduct_info">
        <p className="checkoutProuduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          <StarRatings
            rating={rating}
            starRatedColor="#f39c12" // Color when rated
            starEmptyColor="#C6D2D5" // Color for empty stars
            starHoverColor="#003494" // Color on hover
            numberOfStars={5}
            starDimension="20px"
            starSpacing="2px"
          />
        </div>
        <Button className="btn-1-sc" variant="contained">
          <span className="icon">
            <RemoveShoppingCartTwoToneIcon />
          </span>
          <span className="text">Remove From basket</span>
        </Button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
