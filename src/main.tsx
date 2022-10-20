import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "dracula-ui/styles/dracula-ui.css";
// import "./index.css";
document.body.className += "drac-bg-black-secondary";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
