import * as React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const MenuToggleButton = () => {
    return (
        <Tooltip
            title="Open/Close menu"
            enterDelay={500}
        >
            <IconButton color="inherit" onClick={() => {}}>
                <MenuIcon
                    classes=''
                />
            </IconButton>
        </Tooltip>
    );
};
