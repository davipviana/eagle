import React from 'react';
import {
    AppBar as MuiAppBar,
    AppBarProps as MuiAppBarProps,
    Toolbar
} from '@mui/material';
import { HideOnScroll } from '../hide-on-scroll/HideOnScroll';
import { MenuToggleButton } from './MenuToggleButton';

export interface AppBarProps extends Omit<MuiAppBarProps, 'title'> {
    alwaysOn?: boolean;
    container?: React.ElementType<any>;
}

export const AppBar: React.FC<AppBarProps> = React.memo(props => {
    const {
        alwaysOn,
        children,
        className,
        color = 'primary',
        container: Container = alwaysOn ? 'div' : HideOnScroll,
        ...rest
    } = props;

    return <Container className={className}>
        <MuiAppBar
            color={color}
            {...rest}
        >
            <Toolbar>
                <MenuToggleButton />
            </Toolbar>
        </MuiAppBar>
    </Container>;
});
