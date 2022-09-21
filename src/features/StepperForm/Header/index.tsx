import { Box, IconButton, useTheme } from "@mui/material";

import RuleType from "../../../components/RuleType";
import InfoSvg from "../../../components/svgs/InfoSvg";
import CloseSvg from "../../../components/svgs/CloseSvg";
import { useGetStepperContext } from "../utils/StepperFormContext";

const Header = () => {
  const { palette } = useTheme();
  const { closeModal } = useGetStepperContext();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 4,
      }}
    >
      <RuleType
        style={{
          width: "auto",
          border: "none",
        }}
        title="Rule Builder"
        titleStyle={{
          fontSize: "18px",
          fontWeight: 600,
        }}
        Actions={() => {
          return <InfoSvg sx={{ width: "12px" }} fill={palette.primary.main} />;
        }}
      />

      <IconButton onClick={closeModal}>
        <CloseSvg
          fill={palette.secondary.main}
          sx={{
            width: "24px",
          }}
        />
      </IconButton>
    </Box>
  );
};

export default Header;
