import { Box, useTheme } from "@mui/material";

import { useGetStepperContext } from "../utils/StepperFormContext";
import useNormalizeData from "../utils/useNormalizeData";
import RuleType from "../../../components/RuleType";
import useRuleTypeData from "../utils/useRuleTypeData";
import { RuleTypeKey } from "../types";
import CloseSvg from "../../../components/svgs/CloseSvg";

const SelectedRuleSet = () => {
  const { palette } = useTheme();

  const ruleTypeData = useRuleTypeData();
  const { ruleSet, setRuleSet } = useGetStepperContext();
  const { normalizedData } = useNormalizeData();

  const handleRemoveSelectedRule = (ruleId: string) => {
    setRuleSet?.((prevState) => {
      return {
        ...prevState,
        rules: prevState.rules.filter((rule_id) => rule_id !== ruleId),
      };
    });
  };

  return (
    <>
      {ruleSet?.rules?.length > 0 && (
        <Box
          sx={{
            display: "flex",
            mb: 2,
            marginInline: -1,
          }}
        >
          {ruleSet?.rules.map((ruleId) => (
            <RuleType
              style={{
                cursor: "initial",
                backgroundColor: "#1DC9D433",
                width: "auto",
                padding: 1,
                marginInline: 1,
              }}
              startIcon={
                ruleTypeData[normalizedData[ruleId]?.type as RuleTypeKey]?.icon
              }
              title={normalizedData[ruleId]?.title}
              titleStyle={{
                fontSize: "12px",
              }}
              growTitle={false}
              Actions={() => {
                return (
                  <Box
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleRemoveSelectedRule(ruleId)}
                  >
                    <CloseSvg
                      fill={palette.primary.main}
                      sx={{ marginInline: 4, width: "12px" }}
                    />
                  </Box>
                );
              }}
            />
          ))}
        </Box>
      )}
    </>
  );
};

export default SelectedRuleSet;
