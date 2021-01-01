import React from "react";
import logoImg from "./img/logistics.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "./StateProvider";


function Header() {

  const [{ basket }] = useStateValue();

  console.log(basket);

  return (
    <nav className="header">
      {/* logo on the left */}
      <Link to="/">
        <img className="header__logo" src={logoImg} alt="logo" />
      </Link>
      {/* searchbox */}
      <div className="header__search">
        <input className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 4 links */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Upload</span>
            <span className="header__optionLineTwo">Prescription</span>
          </div>
        </Link>
        {/* 2st link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Rohan!</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>

        {/* 3st link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& orders</span>
          </div>
        </Link>

        {/* Basket icon with numbers */}
        {/* 4st link */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shopping basket icon */}
            <ShoppingBasketIcon />
            {/* Number of items in basket */}
            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
