import "./style.css";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
function Header() {
  return (
    <div className="header">
      {/* amazon logo */}
      <img
        className="header-logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />
      <div className="header_search">
        {/* search  logo*/}
        <input className="header_searchInput" type="text" />
        <SearchIcon
          className="header_searchIcon"
          style={{ fontSize: "24px !important" }}
        />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne"> Hello guest</span>
          <span className="header_optionLineTwo"> Sign In </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne"> Returns</span>
          <span className="header_optionLineTwo"> & Orders </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne"> Your</span>
          <span className="header_optionLineTwo"> Prime </span>
        </div>
        <div className="header_optionBasket">
          <ShoppingBasketIcon className="ShoppingBasketIcon" style={{ color: "white" }} />
          <span className="header_optionLineTwo header_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
