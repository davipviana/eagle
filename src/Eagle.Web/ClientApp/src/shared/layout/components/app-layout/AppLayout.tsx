import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Box,
  CssBaseline,
  List,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material';
import { useSidebarState } from 'shared/layout';
import { Module } from 'shared/types';
import { AppBar } from '../app-bar/AppBar';
import { SidebarToggleButton, Sidebar } from '../sidebar';

const theme = createTheme();
const sidebarWidth: number = 240;

interface AppLayoutProps {
  modules: [Module];
}

export const AppLayout = ({modules}: AppLayoutProps) => {
  const [sidebarOpen] = useSidebarState();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar sidebarOpen={sidebarOpen} sidebarWidth={sidebarWidth}>
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
        <Sidebar sidebarWidth={sidebarWidth}>
          <List component="nav">
            {modules.map((m) => (<ListItemButton>
              <ListItemText key={m.name} primary={m.name} />
              </ListItemButton>))}
          </List>
        </Sidebar>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        ></Box>
      </Box>
    </ThemeProvider>
  );
};