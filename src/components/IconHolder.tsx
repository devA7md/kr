import { CSSProperties, FC } from "react";
import { Box } from "@mui/material";

const IconHolder: FC<IconHoldProps> = ({ icon, alt, styles = {} }) => {
  return (
    <>
      {icon && (
        <Box sx={{ ...styles, display: "flex", alignItems: "center" }}>
          <img src={icon} alt={alt} style={{ width: "100%" }} />
        </Box>
      )}
    </>
  );
};

interface IconHoldProps {
  icon: any;
  alt?: string;
  styles?: CSSProperties;
}

export default IconHolder;
