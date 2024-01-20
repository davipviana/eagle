import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Box,
  CssBaseline,
  Typography
} from '@mui/material';
import { useSidebarState } from 'shared/layout';
import { AppBar } from '../app-bar/AppBar';
import { SidebarToggleButton, Sidebar } from '../sidebar'

const theme = createTheme();

export const AppLayout = () => {
  const [sidebarOpen] = useSidebarState();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar sidebarOpen={sidebarOpen}>
          <SidebarToggleButton />
          <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Eagle
            </Typography>
        </AppBar>
        <Sidebar/>
      </Box>
    </ThemeProvider>
  );
};