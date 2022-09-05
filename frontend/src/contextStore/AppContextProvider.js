import React from "react";
import { TeamProvider } from "./TeamProvider";
import { StatProvider } from "./StatProvider";

const providers = [TeamProvider, StatProvider];

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
