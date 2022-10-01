import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./App.css";
// import { AppContextProvider } from "./contextStore/AppContextProvider";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <QueryClientProvider client={queryClient}>
    {/* <AppContextProvider> */}
    <App />
    {/* </AppContextProvider> */}
  </QueryClientProvider>
);
