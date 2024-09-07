const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51Poit2L1U3xK6cBx2MP4KjrwJbvpO73hFYgAd2VWzs6Owwmo" +
    "kPiCTHyV2jO9kaBjSssVyKkhLZiElhIHmfDFuPgk003AgEyI98",
);

console.log(stripe);

// Initialize Express
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved BOOM!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Expose the API as a Cloud Function
exports.api = functions.https.onRequest(app);
