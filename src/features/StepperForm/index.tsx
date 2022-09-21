import { Box, Card } from "@mui/material";
import { FC, useState } from "react";

import FormStepper from "../../components/FormStepper";
import SelectExpression from "./SelectExpression";
import { StepperFormContext } from "./utils/StepperFormContext";
import { ERuleType, IRuleSet, IStep, RuleTypeKey } from "./types";
import DefineRuleSet from "./DefineRuleSet";
import FormAction from "./FormAction";
import Header from "./Header";

const StepperForm: FC<StepperFormProps> = ({ steps, closeModal }) => {
  const [selectedRule, setSelectedRule] = useState<RuleTypeKey | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [creating, setCreating] = useState(false);
  const [ruleSet, setRuleSet] = useState<IRuleSet>({ title: null, rules: [] });

  return (
    <StepperFormContext.Provider
      value={{
        steps,
        selectedRule,
        currentStep,
        ruleSet,
        creating,
        setCreating,
        setSelectedRule,
        setCurrentStep,
        setRuleSet,
        closeModal,
      }}
    >
      <Card
        sx={{
          width: "80%",
          height: "80%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: 5,
          overflow: "auto",
        }}
      >
        <Header />

        <Box mb={2}>
          <FormStepper />
        </Box>

        {currentStep === 0 && (
          <SelectExpression
            types={[
              ERuleType.union,
              ERuleType.intersection,
              ERuleType.complement,
              ERuleType.difference,
            ]}
          />
        )}

        {currentStep !== 0 && <DefineRuleSet />}

        <FormAction />
      </Card>
    </StepperFormContext.Provider>
  );
};

interface StepperFormProps {
  steps: IStep[];
  closeModal?: () => void;
}

export default StepperForm;
