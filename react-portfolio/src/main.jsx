import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LayoutGroup } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LayoutGroup>
      <App />
    </LayoutGroup>
  </React.StrictMode>
);
