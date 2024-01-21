import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Toolbar,
} from "@mui/material";

export interface AppBarProps extends Omit<MuiAppBarProps, "title"> {
  sidebarOpen?: boolean;
  sidebarWidth?: number;
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) =>
    prop !== "sidebarOpen" && prop !== "sidebarWidth",
})<AppBarProps>(({ theme, sidebarOpen, sidebarWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(sidebarOpen && {
    marginLeft: sidebarWidth,
    width: `calc(100% - ${sidebarWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const AppBar: React.FC<AppBarProps> = (props) => {
  const { children } = props;
  return (
    <StyledAppBar {...props}>
      <Toolbar sx={{ pr: "24px" }}>{children}</Toolbar>
    </StyledAppBar>
  );
};
