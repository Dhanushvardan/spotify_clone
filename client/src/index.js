import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { DataLayerProvider } from "./DataLayer";
import { initialState } from "./Reducer";
import reducer from "./Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataLayerProvider initialState={initialState} reducer={reducer}>
      <App />
    </DataLayerProvider>
  </React.StrictMode>
);
