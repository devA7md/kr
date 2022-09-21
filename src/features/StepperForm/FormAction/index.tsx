import { Box, Button } from "@mui/material";
import { useGetStepperContext } from "../utils/StepperFormContext";

const FormAction = () => {
  const { ruleSet, setCurrentStep, setCreating, creating } =
    useGetStepperContext();

  const handleCreateRule = () => {
    setCurrentStep?.(2);
    setCreating?.(true);
  };

  return (
    <>
      {!creating && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 3,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            disabled={!ruleSet?.title || !ruleSet?.rules.length}
            onClick={handleCreateRule}
          >
            Create Rule
          </Button>
        </Box>
      )}
    </>
  );
};

export default FormAction;
