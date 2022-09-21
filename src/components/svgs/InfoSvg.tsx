import { FC } from "react";
import { Box, SxProps, Theme } from "@mui/material";

const InfoSvg: FC<InfoSvgProps> = ({ sx, fill = "#1DC9D4" }) => {
  return (
    <Box style={{ display: "flex", alignItems: "center" }} sx={sx}>
      <svg
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <path
          d="M5 0.5C2.23859 0.5 0 2.73859 0 5.5C0 8.26141 2.23859 10.5 5 10.5C7.76141 10.5 10 8.26144 10 5.5C10 2.73857 7.76141 0.5 5 0.5ZM5.83333 8.70348C5.83333 8.89209 5.68041 9.045 5.4918 9.045H4.55483C4.36622 9.045 4.2133 8.89209 4.2133 8.70348V4.90167C4.2133 4.71307 4.3662 4.56015 4.55483 4.56015H5.4918C5.68041 4.56015 5.83333 4.71304 5.83333 4.90167V8.70348ZM5 3.91304C4.53176 3.91304 4.15217 3.53346 4.15217 3.06522C4.15217 2.59698 4.53176 2.21739 5 2.21739C5.46824 2.21739 5.84783 2.59698 5.84783 3.06522C5.84783 3.53346 5.46824 3.91304 5 3.91304Z"
          fill={fill}
        />
      </svg>
    </Box>
  );
};

interface InfoSvgProps {
  sx?: SxProps<Theme>;
  fill?: string;
}

export default InfoSvg;
