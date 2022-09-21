import { createContext, useContext } from "react";

import { IStepperFormContextProps } from "../types";

export const defaultStepperFormContext: IStepperFormContextProps = {
  steps: [],
  currentStep: 0,
  selectedRule: null,
  creating: false,
  ruleSet: {
    title: null,
    rules: [],
  },
};

export const StepperFormContext = createContext<IStepperFormContextProps>(
  defaultStepperFormContext
);

export const useGetStepperContext = () => {
  return useContext(StepperFormContext);
};
