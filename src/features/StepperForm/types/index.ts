import { Dispatch, SetStateAction } from "react";

export enum ERuleType {
  base = "base",
  complement = "complement",
  difference = "difference",
  intersection = "intersection",
  union = "union",
}

export type RuleTypeKey = keyof typeof ERuleType;

export interface IStep {
  title: string;
  index: number;
}

export interface IRuleSet {
  title: string | null;
  rules: string[];
}

export interface IStepperFormContextProps {
  steps: IStep[];
  currentStep: number;
  selectedRule: RuleTypeKey | null;
  ruleSet: IRuleSet;
  creating: boolean;
  setSelectedRule?: Dispatch<SetStateAction<RuleTypeKey | null>>;
  setCurrentStep?: Dispatch<SetStateAction<number>>;
  setRuleSet?: Dispatch<SetStateAction<IRuleSet>>;
  setCreating?: Dispatch<SetStateAction<boolean>>;
  closeModal?: () => void;
}
