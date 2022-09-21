import { ChangeEvent, useEffect, useState } from "react";
import { Box, InputAdornment, TextField, useTheme } from "@mui/material";

import { RuleTypeKey } from "../types";
import useRuleTypeData from "../utils/useRuleTypeData";
import RuleType from "../../../components/RuleType";
import InfoSvg from "../../../components/svgs/InfoSvg";
import LinkSvg from "../../../components/svgs/LinkSvg";
import { useGetStepperContext } from "../utils/StepperFormContext";
import useDebounce from "../utils/useDebounce";
import useNormalizeData from "../utils/useNormalizeData";
import SelectedRuleSet from "./SelectedRuleSet";
import SearchSvg from "../../../components/svgs/SearchSvg";

const RuleSearch = () => {
  const ruleTypeData = useRuleTypeData();
  const { palette } = useTheme();

  const [result, setResult] = useState<Record<string, any>[]>([]);

  const { searchValue, tempValue, setTempValue } = useDebounce();
  const { setRuleSet, ruleSet } = useGetStepperContext();
  const { data, normalizedData } = useNormalizeData();

  const handleChangeSearchValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setTempValue(value);
  };

  const handleClickSearchedRule = (props: any) => {
    setRuleSet?.((prevState) => ({
      ...prevState,
      // @ts-ignore
      rules: [...new Set([...prevState.rules, props.ruleId])],
    }));
  };

  useEffect(() => {
    if (searchValue.length) {
      const { filteredIds, usedByIds } = data.reduce<{
        filteredIds: string[];
        usedByIds: string[];
      }>(
        (acc, rule) => {
          if (
            !rule.title.toLowerCase().includes(searchValue.trim().toLowerCase())
          )
            return acc;

          return {
            ...acc,
            filteredIds: [...acc.filteredIds, rule.ruleId],
            usedByIds: rule.usedBy.length
              ? [...acc.usedByIds, ...rule.usedBy]
              : acc.usedByIds,
          };
        },
        { filteredIds: [], usedByIds: [] }
      );

      // @ts-ignore
      const uniqueRules = [...new Set([...filteredIds, ...usedByIds])];
      setResult(uniqueRules.map((ruleId) => normalizedData[ruleId]));
    } else {
      setResult([]);
    }
  }, [searchValue]);

  return (
    <Box sx={{ width: "100%" }}>
      <SelectedRuleSet />

      <Box>
        <TextField
          placeholder="Search for an existing Rule or insert Rule ID"
          variant="outlined"
          size="small"
          fullWidth
          value={tempValue}
          onChange={handleChangeSearchValue}
          disabled={!ruleSet.title}
          tabIndex={2}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchSvg sx={{ width: "32px" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box>
        {result.map((rule) => (
          <RuleType
            key={rule.ruleId}
            style={{
              width: "auto",
            }}
            startIcon={ruleTypeData[rule.type as RuleTypeKey].icon}
            title={rule.title}
            titleStyle={{ color: palette.secondary.dark, fontSize: "14px" }}
            onClick={() => handleClickSearchedRule(rule)}
            Actions={() => {
              return (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <InfoSvg
                    fill={palette.primary.main}
                    sx={{ marginInline: 0.75 }}
                  />
                  <LinkSvg
                    fill={palette.primary.main}
                    sx={{ height: "20px", marginInline: 0.75 }}
                  />
                </Box>
              );
            }}
            growTitle={false}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RuleSearch;
