import { FC } from "react";
import { Box, SxProps, Theme } from "@mui/material";

const CloseSvg: FC<CloseSvgProps> = ({ sx = {}, fill = "black" }) => {
  return (
    <Box style={{ display: "flex", alignItems: "center" }} sx={sx}>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <path
          d="M1.96029 1.37207L1.37109 1.96126L4.40983 5L1.37109 8.03874L1.96029 8.62793L4.99902 5.58919L8.03776 8.62793L8.62695 8.03874L5.58822 5L8.62695 1.96126L8.03776 1.37207L4.99902 4.41081L1.96029 1.37207Z"
          fill={fill}
        />
      </svg>
    </Box>
  );
};

interface CloseSvgProps {
  sx?: SxProps<Theme>;
  fill?: string;
}

export default CloseSvg;
