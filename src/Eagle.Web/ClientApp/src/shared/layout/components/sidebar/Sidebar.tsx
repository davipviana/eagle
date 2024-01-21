import React from 'react';
import { styled } from "@mui/material/styles";
import {
  Divider,
  Drawer as MuiDrawer,
  DrawerProps as MuiDrawerProps,
  IconButton,
  Toolbar
} from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import { useSidebarState } from "shared/layout";

interface SidebarProps {
  children?: React.ReactNode;
  sidebarWidth: number
}

interface DrawerProps extends MuiDrawerProps {
  drawerWidth: number;
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => (prop !== 'open' && prop !== 'drawerWidth')}
)<DrawerProps>(
  ({ theme, open, drawerWidth }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: 0,
        [theme.breakpoints.up('sm')]: {
          width: 0,
        },
      }),
    },
  }),
);

export const Sidebar = ({ children, sidebarWidth }: SidebarProps) => {
    const [sidebarOpen, setSidebarOpen] = useSidebarState();
    return (
        <Drawer variant="permanent" open={sidebarOpen} drawerWidth={sidebarWidth}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
              <ChevronLeft />
            </IconButton>
          </Toolbar>
          <Divider />
          {children}
        </Drawer>
    );
};