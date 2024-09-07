import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Clothes from "./Clothes";
import { auth } from "./Firebase";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";

const promise = loadStripe(
  "pk_test_51Poit2L1U3xK6cBxqab1BXBum4gfRckIcaG8Wj3225zXq7UGj34Lkz3UGt5yRzxBlhmr2DX3QUSqmyfE2axKBdFD00NkBJ3Rv5"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app components loads...
    onAuthStateChanged(auth, (authUser) => {
      console.log("THE USER IS >>>>>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/Clothes.js"
            element={
              <>
                <Header />
                <Clothes />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
