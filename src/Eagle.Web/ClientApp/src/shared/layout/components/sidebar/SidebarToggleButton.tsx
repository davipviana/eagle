import * as React from "react";
import { IconButton, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSidebarState } from "shared/layout";

export const SidebarToggleButton = () => {
  const [sidebarOpen, setSidebarOpen] = useSidebarState();

  return (
    <Tooltip title="Open/Close menu" enterDelay={500}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        sx={{
          marginRight: "36px",
          ...(sidebarOpen && { display: "none" }),
        }}
      >
        <MenuIcon />
      </IconButton>
    </Tooltip>
  );
};
