import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./App.css";
import { TeamProvider } from "./Provider";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <TeamProvider>
    <App />
  </TeamProvider>
);
