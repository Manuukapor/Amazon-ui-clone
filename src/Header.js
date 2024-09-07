import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import "./Clothes.css";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      signOut(auth);
    }
  };

  return (
    <div>
      <div
        className="wrapper"
        style={{ position: "relative", overflowX: "hidden" }}
      >
        <header>
          <div className="navbar">
            <div className="top-icon">
              <a href="">
                <i className="fa-solid fa-bars"></i>
              </a>
            </div>
            <div className="nav-logo border">
              <Link to="/">
                <div className="logo"></div>
              </Link>
            </div>

            <div className="nav-address border">
              <p className="add-first">Deliver to</p>
              <div className="add-icon">
                <i className="fa-solid fa-location-dot"></i>
                <p className="add-second">India</p>
              </div>
            </div>

            <div className="nav-search">
              <div className="dropdown-wrapper">
                <select className="search-select">
                  <option>All</option>
                  <option value="all">All Categories</option>
                  <option value="alexa">Alexa Skills</option>
                  <option value="devices">Amazon Devices</option>
                  <option value="fashion">Amazon Fashion</option>
                  <option value="fresh">Amazon Fresh Meat</option>
                  <option value="pharmacy">Amazon Pharmacy</option>
                  <option value="appliances">Appliances</option>
                  <option value="apps">Apps & Games</option>
                  <option value="audible">Audible Audiobooks</option>
                  <option value="baby">Baby</option>
                  <option value="beauty">Beauty</option>
                  <option value="books">Books</option>
                  <option value="car">Car & Motorbike</option>
                  <option value="clothing">Clothing & Accessories</option>
                  <option value="collectibles">Collectibles</option>
                  <option value="computers">Computers & Accessories</option>
                  <option value="deals">Deals</option>
                  <option value="electronics">Electronics</option>
                  <option value="furniture">Furniture</option>
                </select>
              </div>
              <input placeholder="Search Amazon" className="search-input" />
              <div className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>

            <div className="nav-lang border">
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/color/48/usa.png"
                alt="usa"
              />
              <p className="nav-second">EN</p>
              <i style={{ fontSize: "1.5vw", color: "grey" }} className="fas">
                &#xf0d7;
              </i>
            </div>

            <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
              <div onClick={handleAuthentication} className="nav-signin border">
                <p>
                  <span>Hello {!user ? "Guest" : user.email}</span>
                </p>
                <p style={{ marginLeft: "5px" }} className="nav-second">
                  {user ? " Sign Out" : "Sign In"}
                </p>
              </div>
            </Link>

            <div className="nav-return border">
              <p>
                <span>Returns</span>
              </p>
              <p style={{ marginLeft: "-7px" }} className="nav-second">
                & Orders
              </p>
            </div>

            <Link to="/checkout" style={{ textDecoration: "none" }}>
              <div className="nav-cart border">
                <i className="fa-solid fa-cart-shopping"></i>
                Cart
                <span className="basketCount">{basket?.length}</span>
              </div>
            </Link>
          </div>

          <div className="panel">
            <div className="panel-all">
              <a href="#">
                <i className="fa-solid fa-bars"></i>
                All
              </a>
            </div>

            <div className="panel-ops">
              <p className="border">Today's Deals</p>
              <p className="border">Customer Service</p>
              <p className="border">Registry</p>
              <p className="border">Gift Cards</p>
              <p className="border">Sell</p>
            </div>

            <div className="panel-deals">Shop deals in Electronics</div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
