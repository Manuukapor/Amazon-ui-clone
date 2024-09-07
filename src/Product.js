import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({
  title,
  img,
  price,
  rating,
  discount,
  brand,
  free,
  patterns,
  sponsored,
  bought,
  deal,
}) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        img: img,
        price: price,
        discount: discount,
        brand: brand,
        free: free,
        patterns: patterns,
        sponsored: sponsored,
        bought: bought,
        deal: deal,
      },
    });
  };
  return (
    <>
      <section>
        <div className="right-side">
          <div className="products">
            <div className="product">
              <a href="#">
                <img src={img} />
              </a>
              <div className="patterns">
                <span>
                  <a href="#">{patterns}</a>
                </span>
              </div>
              <div className="sponsered">
                <span id="spon1">{sponsored}</span>
              </div>
              <div className="product-brand">
                <span>
                  <h2>{brand}</h2>
                </span>
              </div>
              <div className="product-name">
                <span>
                  <a href="#">
                    <h4>{title}</h4>
                  </a>
                </span>
              </div>
              <div className="stars">
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <span>⭐⭐⭐⭐43</span>
                  ))}
              </div>
              <div className="bought">
                <span>{bought}</span>
              </div>
              <button id="deal">{deal}</button>
              <div className="price">
                <h3>
                  <small>₹</small>
                  <strong>{price}</strong>
                </h3>
                <span className="mrp">
                  M.R.P:<span className="cut">₹1,999</span>
                </span>
                <h5>{discount}</h5>
              </div>
              <div className="free">
                <span>{free}</span>
              </div>
              <button onClick={addToBasket}>Add to Basket</button>
            </div>
            {/* <div className="product">
              <a href="#">
                <img src={img} />
              </a>
              <div className="patterns">
                <span>
                  <a href="#">{patterns}</a>
                </span>
              </div>
              <div className="sponsered">
                <span id="spon2">{sponsored}</span>
              </div>
              <div className="product-brand">
                <span>
                  <h2>{brand}</h2>
                </span>
              </div>
              <div className="product-name">
                <span>
                  <a href="#">
                    <h4>{title}</h4>
                  </a>
                </span>
              </div>
              <div className="bought">
                <span>{bought}</span>
              </div>
              <button id="deal">{deal}</button>
              <div className="price">
                <h3>
                  <small>₹</small>
                  <strong>{price}</strong>
                </h3>
                <span className="mrp">
                  M.R.P:<span className="cut">₹1,499</span>
                </span>
                <h5>{discount}</h5>
              </div>
              <div className="free">
                <span>{free}</span>
              </div>
              <button onClick={addToBasket}>Add to Basket</button>
            </div> */}
            {/* <div className="product">
              <a href="#">
                <img
                  src={img}
                />
              </a>
              <div className="patterns">
                <span>
                  <a href="#">{patterns}</a>
                </span>
              </div>
              <div className="sponsered">
                <span id="spon3">{sponsored}</span>
              </div>
              <div className="product-brand">
                <span>
                  <h2>{brand}</h2>
                </span>
              </div>
              <div className="product-name">
                <span>
                  <a href="#">
                    <h4>
                      {title}
                    </h4>
                  </a>
                </span>
              </div>
              <div className="bought">
                <span>{bought}</span>
              </div>
              <button id="deal">{deal}</button>
              <div className="price">
                <h3><small>₹</small>
                <strong>{price}</strong></h3>
                <span className="mrp">
                  M.R.P:<span className="cut">₹2,490</span>
                </span>
                <h5>{discount}</h5>
              </div>
              <div className="free">
                <span>{free}</span>
              </div>
              <button onClick={addToBasket}>Add to Basket</button>
            </div>
            <div className="product">
              <a href="#">
                <img
                  id="img-4"
                  src="../clothes/Images/cloth4.png"
                  alt="cloth4"
                />
              </a>
              <div className="patterns">
                <span>
                  <a href="#">+3colors/patterns</a>
                </span>
              </div>
              <div className="sponsered">
                <span id="spon4">Sponsored</span>
              </div>
              <div className="product-brand">
                <span>
                  <h2>Leriya Fashion</h2>
                </span>
              </div>
              <div className="product-name">
                <span>
                  <a href="#">
                    <h4>
                      Night Dress for Men || Rayon Multi Printed Night Dress for
                    </h4>
                  </a>
                </span>
              </div>
              <div className="stars">
                <span>⭐⭐˅1502</span>
              </div>
              <div className="bought">
                <span>50+ bought in past month</span>
              </div>
              <button id="deal">Limited time deal</button>
              <div className="price">
                <h3>₹509</h3>
                <span className="mrp">
                  M.R.P:<span className="cut">₹1,999</span>
                </span>
                <h5>(75% off)</h5>
              </div>
              <div className="prime">
                <img src="../clothes/Images/prime.png" alt="prime" />
              </div>
              <div className="free">
                <span>FREE Delivery by Amazon</span>
              </div>
              <button onClick={addToBasket}>Add to Basket</button>
            </div> */}
          </div>
          {/* <div className="products">
            <div className="product">
              <a href="#">
                <img
                  id="img-5"
                  src="../clothes/Images/cloth5.png"
                  alt="cloth5"
                />
              </a>
              <div className="patterns">
                <span>
                  <a href="#">+3colors/patterns</a>
                </span>
              </div>
              <div className="product-brand">
                <span>
                  <h2>Wedani</h2>
                </span>
              </div>
              <div className="product-name">
                <span>
                  <a href="#">
                    <h4>
                      Women's Half Sleeve Printed Cotton Short Kurti (RSF007_XL)
                    </h4>
                  </a>
                </span>
              </div>
              <div className="stars">
                <span>⭐⭐⭐⭐˅1365</span>
              </div>
              <div className="bought">
                <span>500+ bought in past month</span>
              </div>
              <button id="deal">Limited time deal</button>
              <div className="price">
                <h3>₹449</h3>
                <span className="mrp">
                  M.R.P:<span className="cut">₹1,199</span>
                </span>
                <h5>(63% off)</h5>
              </div>
              <div className="prime">
                <img src="../clothes/Images/prime.png" alt="prime" />
              </div>
              <div className="free">
                <span>FREE Delivery by Amazon</span>
              </div>
              <button onClick={addToBasket}>Add to Basket</button>
            </div>
            <div className="product">
              <a href="#">
                <img
                  id="img-6"
                  src="../clothes/Images/cloth6.png"
                  alt="cloth6"
                />
              </a>
              <div className="patterns">
                <span>
                  <a href="#">+3colors/patterns</a>
                </span>
              </div>
              <div className="product-brand">
                <span>
                  <h2>J B Fashion</h2>
                </span>
              </div>
              <div className="product-name">
                <span>
                  <a href="#">
                    <h4>Womens Cotton Printed Kurti</h4>
                  </a>
                </span>
              </div>
              <div className="stars">
                <span>⭐⭐⭐⭐˅45</span>
              </div>
              <div className="bought">
                <span>200+ bought in past month</span>
              </div>
              <button id="deal">Limited time deal</button>
              <div className="price">
                <h3>₹399</h3>
                <span className="mrp">
                  M.R.P:<span className="cut">₹1,199</span>
                </span>
                <h5>(67% off)</h5>
              </div>
              <div className="prime">
                <img src="../clothes/Images/prime.png" alt="prime" />
              </div>
              <div className="free">
                <span>FREE Delivery by Amazon</span>
              </div>
              <button onClick={addToBasket}>Add to Basket</button>
            </div>
            <div className="product">
              <a href="#">
                <img
                  id="img-7"
                  src="../clothes/Images/cloth7.png"
                  alt="cloth7"
                />
              </a>
              <div className="patterns">
                <span>
                  <a href="#">+3colors/patterns</a>
                </span>
              </div>
              <div className="product-brand">
                <span>
                  <h2>Vest Friend</h2>
                </span>
              </div>
              <div className="product-name">
                <span>
                  <a href="#">
                    <h4>
                      Combo Pack of 5 Pure Cotton Regular Fit Half Sleeve Men's
                      Vest (Pack of 5)
                    </h4>
                  </a>
                </span>
              </div>
              <div className="stars">
                <span>⭐⭐⭐⭐˅16</span>
              </div>
              <div className="bought">
                <span>50+ bought in past month</span>
              </div>
              <button id="deal">Limited time deal</button>
              <div className="price">
                <h3>₹579</h3>
                <span className="mrp">
                  M.R.P:<span className="cut">₹1,499</span>
                </span>
                <h5>(61% off)</h5>
              </div>
              <div className="prime">
                <img src="../clothes/Images/prime.png" alt="prime" />
              </div>
              <div className="free">
                <span>FREE Delivery by Amazon</span>
              </div>
              <button onClick={addToBasket}>Add to Basket</button>
            </div>
            <div className="product">
              <a href="#">
                <img
                  id="img-8"
                  src="../clothes/Images/cloth8.png"
                  alt="cloth8"
                />
              </a>
              <div className="patterns">
                <span>
                  <a href="#">+3colors/patterns</a>
                </span>
              </div>
              <div className="product-brand">
                <span>
                  <h2>Seer Secrets</h2>
                </span>
              </div>
              <div className="product-name">
                <span>
                  <a href="#">
                    <h4>Ajwain Honey Lemon Tea</h4>
                  </a>
                </span>
              </div>
              <div className="stars">
                <span>⭐⭐⭐⭐˅350</span>
              </div>
              <div className="bought">
                <span>200+ bought in past month</span>
              </div>
              <button id="deal">Limited time deal</button>
              <div className="price">
                <h3>₹509</h3>
                <span className="mrp">
                  M.R.P:<span className="cut">₹999</span>
                </span>
                <h5>(49% off)</h5>
              </div>
              <div className="free">
                <span>FREE Delivery by Amazon</span>
              </div>
              <button onClick={addToBasket}>Add to Basket</button>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Product;
