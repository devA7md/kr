import { CSSProperties, FC } from "react";
import {Box, SxProps, Theme} from "@mui/material";

const LoaderSvg: FC<LoaderSvgProps> = ({ sx = {}, fill = "#0F2830" }) => {
  return (
    <Box style={{ display: "flex", alignItems: "center" }} sx={sx}>
      <svg
        width="64"
        height="76"
        viewBox="0 0 64 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <path
          d="M46.34 18.2L28.14 0V12.28C12.38 14.24 0.140015 27.68 0.140015 44C0.140015 60.32 12.34 73.76 28.14 75.72V67.64C16.78 65.72 8.14001 55.88 8.14001 44C8.14001 32.12 16.78 22.28 28.14 20.36V36L46.34 18.2ZM63.86 40C63.18 34.44 60.98 29.08 57.38 24.44L51.7 30.12C53.86 33.12 55.22 36.52 55.78 40H63.86ZM36.14 67.6V75.68C41.7 75 47.1 72.84 51.74 69.24L45.98 63.48C42.98 65.64 39.62 67.04 36.14 67.6ZM51.7 57.92L57.38 63.56C60.98 58.92 63.18 53.56 63.86 48H55.78C55.22 51.48 53.86 54.88 51.7 57.92Z"
          fill={fill}
        />
      </svg>
    </Box>
  );
};

interface LoaderSvgProps {
  sx?: SxProps<Theme>;
  fill?: string;
}

export default LoaderSvg;
