import React from "react";
import "./style.css";
import Subtotal from "../Subtotal";
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-tit">
        <div className="left_chekout">
          <img
            className="checkout_ad"
            src="https://etimg.etb2bimg.com/photo/74458837.cms"
            alt=""
          />
        </div>

        <div className="right_checkout">
          <Subtotal />
        </div>
      </div>
      <div>
        <h2 className="checkout_title">Your shopping basket</h2>
        {/* Basket item  */}
        {/* Basket item  */}
        {/* Basket item  */}
        {/* Basket item  */}
        {/* Basket item  */}
        {/* Basket item  */}
      </div>
    </div>
  );
};

export default Checkout;
