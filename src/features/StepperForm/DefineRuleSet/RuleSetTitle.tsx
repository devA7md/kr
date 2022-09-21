import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

import IconHolder from "../../../components/IconHolder";
import infoSvg from "../../../assets/info.svg";
import useRuleTypeData from "../utils/useRuleTypeData";
import { useGetStepperContext } from "../utils/StepperFormContext";

const RuleSetTitle = () => {
  const ruleTypeData = useRuleTypeData();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { selectedRule, setRuleSet, ruleSet, creating } =
    useGetStepperContext();

  const handleChangeRuleSetTitle = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchValue(e.target.value);
  };

  const handleUpdateRuleSetTitle = () => {
    if (searchValue)
      setRuleSet?.((prevState) => {
        return {
          ...prevState,
          title: searchValue,
        };
      });
    setIsInEditMode(false);
  };

  const handlePressEnter = (e: any) => {
    if (e.key === "Enter") {
      handleUpdateRuleSetTitle();
    }
  };

  useEffect(() => {
    /**
     * set the title value to the one in the context is it exists
     * */
    setSearchValue(ruleSet?.title ?? "");
  }, [ruleSet?.title]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconHolder
        icon={ruleTypeData[selectedRule!].icon}
        styles={{ width: "25px" }}
      />

      <Box sx={{ marginInline: 1 }}>
        {isInEditMode ? (
          <TextField
            placeholder="Enter rule set title"
            variant="outlined"
            size="small"
            value={searchValue}
            onChange={handleChangeRuleSetTitle}
            onKeyUp={handlePressEnter}
            onBlur={handleUpdateRuleSetTitle}
            ref={inputRef}
            autoFocus={isInEditMode}
            disabled={creating}
            tabIndex={1}
          />
        ) : (
          <Typography
            style={{
              cursor: "alias",
            }}
            onClick={() => {
              if (!creating) setIsInEditMode(true);
            }}
          >
            {ruleSet?.title
              ? ruleSet.title
              : `Untitled ${ruleTypeData[selectedRule!].title} Rule`}
          </Typography>
        )}
      </Box>

      <IconHolder icon={infoSvg} styles={{ width: "15px" }} />
    </Box>
  );
};

export default RuleSetTitle;
