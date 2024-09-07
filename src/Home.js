import React from "react";

function Home() {
  return (
    <div>
      <div
        className="wrapper"
        style={{ position: "relative", overflowX: "hidden" }}
      >
        <div className="hero-section">
          <div className="hero-msg">
            You are on amazon.com. You can also shop on Amazon India for
            millions of products with fast local delivery.
            <a href="https://www.amazon.in/">Click here to go to amazon.in</a>
          </div>
        </div>

        <div className="shop-section">
          <div className="box1 box">
            <div className="box-content">
              <a href="./Clothes.js">
                <h2>Clothes</h2>
                <div
                  className="box-img"
                  style={{ backgroundImage: 'url("box1_image.jpg")' }}
                ></div>
              </a>
              <p>
                <a href="./Clothes.js">Shop now</a>
              </p>
            </div>
          </div>
          <div className="box2 box">
            <div className="box-content">
              <a href="./Clothes.js">
                <h2>Health & Care</h2>
                <div
                  className="box-img"
                  style={{ backgroundImage: 'url("box2_image.jpg")' }}
                ></div>
              </a>
              <p>
                <a href="./Clothes.js">Shop now</a>
              </p>
            </div>
          </div>
          <div className="box3 box">
            <div className="box-content">
              <a href="./Clothes.js">
                <h2>Furniture</h2>
                <div
                  className="box-img"
                  style={{ backgroundImage: 'url("box3_image.jpg")' }}
                ></div>
              </a>
              <p>
                <a href="./Clothes.js">Shop now</a>
              </p>
            </div>
          </div>

          <div className="box4">
            <div className="box4-content">
              <h2>Sign in for the best experience</h2>
              <button className="but">
                <a href="./Login.js">Sign in securely</a>
              </button>
            </div>
            <div className="bg">
              <img src="shipping.jpg" alt="" />
            </div>
          </div>

          <div className="box5 box">
            <div className="box-content">
              <a href="./Clothes.js">
                <h2>Beauty Picks</h2>
                <div
                  className="box-img"
                  style={{ backgroundImage: 'url("box5_image.jpg")' }}
                ></div>
              </a>
              {/* Separate the inner <a> tag */}
              <p>
                <a href="./Clothes.js">Shop now</a>
              </p>
            </div>
          </div>
          <div className="box6 box">
            <div className="box-content">
              <a href="./Clothes.js">
                <h2>Pet Care</h2>
                <div
                  className="box-img"
                  style={{ backgroundImage: 'url("box6_image.jpg")' }}
                ></div>
              </a>
              <p>
                <a href="./Clothes.js">Shop now</a>
              </p>
            </div>
          </div>
          <div className="box7 box">
            <div className="box-content">
              <a href="./Clothes.js">
                <h2>New Arrivals in Toys</h2>
                <div
                  className="box-img"
                  style={{ backgroundImage: 'url("box7_image.jpg")' }}
                ></div>
              </a>
              <p>
                <a href="./Clothes.js">Shop now</a>
              </p>
            </div>
          </div>
          <div className="box8 box">
            <div className="box-content">
              <a href="./Clothes.js">
                <h2>Discover Fashion Trends</h2>
                <div
                  className="box-img"
                  style={{ backgroundImage: 'url("box8_image.jpg")' }}
                >
                  <img src="./public/box8_image.jpg" alt="" />
                </div>
              </a>
              <p>
                <a href="./Clothes.js">Shop now</a>
              </p>
            </div>
          </div>
        </div>

        <footer>
          <a href="" style={{ textDecoration: "none" }}>
            <div className="foot-panel1">Back to top</div>
          </a>

          <div className="foot-panel2">
            <ul>
              <p>Get to Know Us</p>
              <a href="">Careers</a>
              <a href="">Blog</a>
              <a href="">About Amazon</a>
              <a href="">Investor Relations</a>
              <a href="">Amazon Devices</a>
            </ul>
            <ul>
              <p>Make Money with Us</p>
              <a href="">Careers</a>
              <a href="">Blog</a>
              <a href="">About Amazon</a>
              <a href="">Investor Relations</a>
              <a href="">Amazon Devices</a>
            </ul>
            <ul className="pay">
              <p className="ment">Amazon Payment Products</p>
              <a href="">Careers</a>
              <a href="">Blog</a>
              <a href="">About Amazon</a>
              <a href="">Investor Relations</a>
              <a href="">Amazon Devices</a>
            </ul>
            <ul className="let">
              <p>Let Us Help You</p>
              <a href="">Careers</a>
              <a href="">Blog</a>
              <a href="">About Amazon</a>
              <a href="">Investor Relations</a>
              <a href="">Amazon Devices</a>
            </ul>
          </div>

          <div className="foot-panel3">
            <div className="logo1"></div>
          </div>

          <div className="foot-panel4">
            <div className="pages">
              <a href="">Conditions of Use</a>
              <a href="">Privacy Notice</a>
              <a href="">Your Ads Privacy Choices</a>
            </div>
            <div className="copyright">
              © 1996-2023, Amazon.com, Inc. or its affiliates
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
