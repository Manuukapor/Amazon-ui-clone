import React from "react";
import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <NumericFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />

      <button onClick={(e) => navigate("/payment")}>Prooced to Checkout</button>
    </div>
  );
}

export default Subtotal;
