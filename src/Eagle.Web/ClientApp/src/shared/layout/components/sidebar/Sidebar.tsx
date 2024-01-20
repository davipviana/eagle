import React from 'react';
import {
    Drawer,
    IconButton,
    Toolbar
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useSidebarState } from "shared/layout";
export const Sidebar = (props: React.PropsWithChildren) => {
    const [sidebarOpen, setSidebarOpen] = useSidebarState();
    return (
        <Drawer variant="permanent" open={sidebarOpen}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
        </Drawer>
    );
};