import { CSSProperties, ElementType, FC } from "react";
import {Box, SxProps, Theme, Typography, useTheme} from "@mui/material";

import IconHolder from "./IconHolder";

const RuleType: FC<RuleTypeProps> = ({
  style,
  startIcon,
  title,
  titleStyle = {},
  growTitle = true,
  Actions = null,
  CustomIconHolder,
  onClick,
}) => {
  const { palette } = useTheme();

  /**
   * this component select either the default start icon previewer or the custom passed one
   * */
  const IconPreviewer: FC<{ icon: any; alt?: string; styles: any }> = (
    props
  ) => {
    const { styles, ...rest } = props;

    return CustomIconHolder ? (
      <CustomIconHolder {...rest} />
    ) : (
      <IconHolder {...props} />
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        border: `1px solid ${palette.secondary.light}`,
        borderRadius: 1,
        padding: 0.5,
        cursor: "pointer",
        ...style,
      }}
      onClick={onClick}
    >
      <IconPreviewer
        styles={{
          width: "20px",
        }}
        icon={startIcon}
        alt={title}
      />

      <Box sx={{ marginX: 2, flexGrow: growTitle ? 1 : 0 }}>
        <Typography sx={titleStyle}>{title}</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {Actions && <Actions />}
      </Box>
    </Box>
  );
};

interface RuleTypeProps {
  style?: SxProps<Theme>;
  startIcon?: any;
  title: string;
  titleStyle?: SxProps<Theme>;
  growTitle?: boolean;
  /**
   * `Actions` and `CustomIconHolder` used to replace the default components
   * */
  Actions?: ElementType;
  CustomIconHolder?: ElementType;
  /**
   * function triggers on click on the rule
   * we defined props here as an object to send some data on click
   * later on we can send more in this object `props`
   * */
  onClick?: () => void;
}

export default RuleType;
