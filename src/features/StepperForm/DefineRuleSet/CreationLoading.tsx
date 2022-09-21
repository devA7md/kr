import { Box, Typography, useTheme } from "@mui/material";

import LoaderSvg from "../../../components/svgs/LoaderSvg";

const CreationLoading = () => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 2
      }}
    >
      <LoaderSvg fill={palette.primary.light} sx={{ width: "65px", marginBottom: 2 }} />
      <Typography fontWeight={600}>Sign the transaction...</Typography>
    </Box>
  );
};

export default CreationLoading;
