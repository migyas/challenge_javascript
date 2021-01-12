import styled from 'styled-components';

import { Grid } from '@material-ui/core';

export const Container = styled(Grid)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: gray;
    max-height: 8rem;

    img {
        width: 9rem;
        height: 6rem;
    }

    @media screen and (max-width: 350px) {
        img {
            width: 4rem;
            height: 6rem;
        }
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;

    h1 {
        color: #fff;
        font-size: 3rem;
        text-transform: uppercase;
    }

    @media screen and (max-width: 520px) {
        padding: .5rem;
        h1 {
            font-size: 2.2rem;
        }

        button {
            margin-left: 1.4rem !important; 
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;

    h2 {
        margin-right: 1.2rem;
    }

    p {
        font-weight: bold;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 520px) {
        display: none;
    }
`;