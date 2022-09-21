import { FC } from "react";
import { Box, SxProps, Theme } from "@mui/material";

const SearchSvg: FC<SearchSvgProps> = ({ sx = {}, fill = "#1DC9D4" }) => {
  return (
    <Box style={{ display: "flex", alignItems: "center" }} sx={sx}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_1857)">
          <path
            d="M16.1458 14.5833H15.3229L15.0312 14.3021C16.0521 13.1146 16.6667 11.5729 16.6667 9.89583C16.6667 6.15625 13.6354 3.125 9.89583 3.125C6.15625 3.125 3.125 6.15625 3.125 9.89583C3.125 13.6354 6.15625 16.6667 9.89583 16.6667C11.5729 16.6667 13.1146 16.0521 14.3021 15.0312L14.5833 15.3229V16.1458L19.7917 21.3438L21.3438 19.7917L16.1458 14.5833ZM9.89583 14.5833C7.30208 14.5833 5.20833 12.4896 5.20833 9.89583C5.20833 7.30208 7.30208 5.20833 9.89583 5.20833C12.4896 5.20833 14.5833 7.30208 14.5833 9.89583C14.5833 12.4896 12.4896 14.5833 9.89583 14.5833Z"
            fill="#1DC9D4"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_1857">
            <rect width="25" height="25" fill={fill} />
          </clipPath>
        </defs>
      </svg>
    </Box>
  );
};

interface SearchSvgProps {
  sx?: SxProps<Theme>;
  fill?: string;
}

export default SearchSvg;
