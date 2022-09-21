import { FC } from "react";
import { Box, SxProps, Theme } from "@mui/material";

const LinkSvg: FC<LinkSvgProps> = ({ sx = {}, fill = "#0F2830" }) => {
  return (
    <Box style={{ display: "flex", alignItems: "center" }} sx={sx}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <g clip-path="url(#clip0_1_1916)">
          <path
            d="M11.2346 4.875H8.73462V6.125H11.2346C12.2659 6.125 13.1096 6.96875 13.1096 8C13.1096 9.03125 12.2659 9.875 11.2346 9.875H8.73462V11.125H11.2346C12.9596 11.125 14.3596 9.725 14.3596 8C14.3596 6.275 12.9596 4.875 11.2346 4.875ZM7.48462 9.875H4.98462C3.95337 9.875 3.10962 9.03125 3.10962 8C3.10962 6.96875 3.95337 6.125 4.98462 6.125H7.48462V4.875H4.98462C3.25962 4.875 1.85962 6.275 1.85962 8C1.85962 9.725 3.25962 11.125 4.98462 11.125H7.48462V9.875ZM5.60962 7.375H10.6096V8.625H5.60962V7.375Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1916">
            <rect
              width="15"
              height="15"
              fill="white"
              transform="translate(0.609619 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
};

interface LinkSvgProps {
  sx?: SxProps<Theme>;
  fill?: string;
}

export default LinkSvg;
