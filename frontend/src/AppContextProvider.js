import React from "react";
import { TeamProvider } from "./TeamProvider";
import { SeasonProvider } from "./SeasonProvider";

const providers = [TeamProvider, SeasonProvider];

const combineComponents = (...components) => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }) => <>{children}</>
  );
};

export const AppContextProvider = combineComponents(...providers);
