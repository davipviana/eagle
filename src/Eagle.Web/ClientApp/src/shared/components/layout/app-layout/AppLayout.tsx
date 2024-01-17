import React from 'react';
import styled from '@emotion/styled';
import { AppBar } from '../app-bar/AppBar';

const Core = styled.div`
    display: 'flex';
    flexDirection: 'column';
    zIndex: 1;
    minHeight: '100vh';
    position: 'relative';
    minWidth: 'fit-content';
    width: '100%';
`;

const AppFrame = styled.div`
    display: 'flex';
    flexDirection: 'column';
    flexGrow: 1;
    marginTop: 6px;
`;

export const AppLayout = () => {
    return <Core>
        <AppFrame>
            <AppBar alwaysOn={true} />
        </AppFrame>
    </Core>;
};