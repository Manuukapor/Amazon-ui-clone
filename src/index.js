import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Create a root
const root = ReactDOM.createRoot(rootElement);

// Render the app using the created root
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
