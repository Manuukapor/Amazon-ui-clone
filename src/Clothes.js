import React from "react";
import "./Clothes.css";
import Product from "./Product";

function Clothes() {
  console.log("Clothes component rendered");
  return (
    <>
      <div className="left-side">
        <div className="delivery-refinement">
          <div className="delivery-title">
            <span>Deliver Day</span>
          </div>
          <ul>
            <li>
              <input type="checkbox" id="today" value="today" />
              Get It Today
            </li>
            <li>
              <input type="checkbox" id="tomorrow" value="tomorrow" />
              Get It By Tomorrow
            </li>
            <li>
              <input type="checkbox" id="two-days" value="two-days" />
              Get It in 2 Days
            </li>
          </ul>
        </div>
        <div className="departments">
          <div className="department-title">
            <span>Category</span>
          </div>
          <div className="department-cat">
            <label htmlFor="">Clothing & Accessories</label>
            <label htmlFor="">Baby Boys' Clothing Sets</label>
            <label htmlFor="">Men's Shirts</label>
            <label htmlFor="">Men's T-Shirts</label>
            <label htmlFor="">Men's Polos</label>
            <label htmlFor="">Women's Dresses & Jumpsuits</label>
            <label htmlFor="">Baby Boys' Rompers</label>
            <label htmlFor="">Cloths & Towels</label>
          </div>
        </div>
        <div className="customer-refinement">
          <div className="customer-refinement-title">
            <span>Customer Review</span>
          </div>
          <div className="stars">
            <span>⭐⭐⭐⭐⭐ &up</span>
          </div>
        </div>
        <div className="brands-refinement">
          <div className="brands-refinement-title">
            <span>Brands</span>
          </div>
          <ul>
            <li>
              <input
                type="checkbox"
                id="leriya-fashion"
                value="leriya-fashion"
              />
              Leriya Fashion
            </li>
            <li>
              <input type="checkbox" id="gosriki" value="gosriki" />
              GoSriKi
            </li>
            <li>
              <input
                type="checkbox"
                id="years-designer"
                value="years-designer"
              />
              YEARS DESIGNER
            </li>
          </ul>
        </div>
        <div className="price-refinement"></div>
        <div className="filters"></div>
      </div>
      <h2>Results</h2>
      <div className="top-line">
        <span>
          Price and other details may vary based on product size and colour.
        </span>
      </div>
      <div className="product">
        <Product
          img="../clothes/Images/cloth1.png"
          patterns="+3colors/patterns"
          sponsored="Sponsored"
          brand="BLUE TYGA"
          title="SUNSCREEN JACKET Women's Travel Nylon Solid Plain Sports"
          ratings={4}
          bought="1K+ bought in past month"
          deal="Limited time deal"
          price={1499}
          discount="25% off"
          free="FREE Delivery by Amazon"
        />
        <Product
          img="../clothes/Images/cloth2.png"
          patterns="+7colors/patterns"
          sponsored="Sponsored"
          brand="CHKOKKO"
          title="Double Layered Sports Gym Workout Running Shorts for"
          bought="100+ bought in past month"
          deal="Limited time deal"
          price={549}
          discount="63% off"
          free="FREE Delivery by Amazon<"
        />
        <Product
          img="../clothes/Images/cloth3.png"
          patterns="+2colors/patterns"
          sponsored="Sponsored"
          brand="Rustic Tones"
          title="Full Sleeve Tshirt Pyjama Pant Casual Clothing Set for Infants"
          bought="300+ bought in past month"
          deal="Limited time deal"
          price={149}
          discount="40% off"
          free="FREE Delivery by Amazon"
        />
      </div>
    </>
  );
}

export default Clothes;
