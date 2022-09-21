import { useTheme } from "@mui/material";

import SectionWrapper from "../../../components/SectionWrapper";
import RuleSearch from "./RuleSearch";
import RuleSetTitle from "./RuleSetTitle";
import { useGetStepperContext } from "../utils/StepperFormContext";
import CreationLoading from "./CreationLoading";
import {customGrey} from "../../../theme";

const DefineRuleSet = () => {
  const { palette } = useTheme();
  const { currentStep } = useGetStepperContext();

  return (
    <SectionWrapper>
      <RuleSetTitle />

      <>
        {currentStep && currentStep === 1 && (
          <SectionWrapper
            styles={{
              backgroundColor: customGrey["50"],
              marginTop: 3,
            }}
          >
            <RuleSearch />
          </SectionWrapper>
        )}
      </>

      <>{currentStep && currentStep === 2 && <CreationLoading />}</>
    </SectionWrapper>
  );
};

export default DefineRuleSet;
