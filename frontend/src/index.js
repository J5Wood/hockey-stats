import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./App.css";
import { AppContextProvider } from "./AppContextProvider";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
