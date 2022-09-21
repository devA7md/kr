import { CSSProperties, FC, ReactElement } from "react";
import { Box, useTheme } from "@mui/material";

const SectionWrapper: FC<FormStepperElementWrapperProps> = ({
  children,
  styles = {},
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: 4,
        border: `1px solid ${theme.palette.secondary.light}`,
        borderRadius: 1,
        ...styles,
      }}
    >
      {children}
    </Box>
  );
};

interface FormStepperElementWrapperProps {
  children: ReactElement | ReactElement[];
  styles?: CSSProperties;
}

export default SectionWrapper;
