import { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";

import SectionWrapper from "../../../components/SectionWrapper";
import RuleType from "../../../components/RuleType";
import { RuleTypeKey } from "../types";
import { useGetStepperContext } from "../utils/StepperFormContext";
import useRuleTypeData from "../utils/useRuleTypeData";
import InfoSvg from "../../../components/svgs/InfoSvg";

const SelectExpression: FC<SelectExpressionProps> = ({ types }) => {
  const { palette } = useTheme();
  const ruleTypeData = useRuleTypeData();
  const { setSelectedRule, setCurrentStep } = useGetStepperContext();

  const handleClickRuleType = (rule: RuleTypeKey) => {
    setSelectedRule?.(rule);
    /**
     * update the current step to be 1 to move to the next step
     * */
    setCurrentStep?.(1);
  };

  return (
    <SectionWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ mb: 1 }}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "14px", lineHeight: "28px" }}
          >
            Which Type of Rule do you want to create?
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
          }}
        >
          {types.map((rule) => (
            <RuleType
              key={rule}
              style={{
                minWidth: "200px",
                paddingInline: 1,
              }}
              startIcon={ruleTypeData[rule].icon}
              title={ruleTypeData[rule].title}
              titleStyle={(theme) => ({
                color: theme.palette.primary.light,
                fontSize: "16px",
              })}
              Actions={() => (
                <>
                  <InfoSvg
                    fill={palette.primary.light}
                    sx={{ width: "12px" }}
                  />
                </>
              )}
              onClick={() => handleClickRuleType(rule)}
            />
          ))}
        </Box>
      </Box>
    </SectionWrapper>
  );
};

interface SelectExpressionProps {
  types: RuleTypeKey[];
}

export default SelectExpression;
