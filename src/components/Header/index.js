import React from 'react';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { Avatar, Button } from '@material-ui/core';

// import api from '../../service/api';
import logo from '../../assets/logo.svg';

import * as S from './styled';

const Header = ({ amount }) => {
    return (
        <S.Container lg={12} md={12} xs={12}>
            <img src={logo} alt="logo" />
            <S.Title>
                <h1>Dashboard</h1>
                <Button type="button" style={{ marginLeft: '6rem', border: '1px solid #fff', color: '#fff', fontWeight: 'bolder' }}>
                    PLUS
                    <MonetizationOnIcon style={{ color: "#fff", fontSize: '3rem', marginLeft: '.5rem' }} />
                </Button>
            </S.Title>
            <S.Profile>
                <h2>
                    <Avatar>Provi</Avatar>
                </h2>
                <p>#{amount}</p>
            </S.Profile>
        </S.Container>
    );
}

export default Header;