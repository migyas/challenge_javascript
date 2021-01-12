import styled from 'styled-components';
import { Paper, Grid } from '@material-ui/core';

export const Container = styled(Grid)`
    display: flex; 
    align-items: center;
    justify-content: center; 
    margin-top: 3rem;
`;

export const Item = styled(Paper)`
    padding: 1.2rem;
    height: 7rem;
    text-align: center;
    font-weight: bold;
`;