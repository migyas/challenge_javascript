import { Grid } from '@material-ui/core';
import React from 'react';

import * as S from './styled';

const ReportDash = ({ amount }) => {
    return (
        <S.Container container xs={12} sm={9} spacing={2} >
            <Grid item xs={12} sm={4}>
                <S.Item style={{ backgroundColor: '#bebeb1' }}>
                    <div style={{ marginBottom: '1rem' }}>TOTAL PAGO</div>
                    <div style={{ fontSize: '2rem', color: 'gold' }}>R$ {amount.amountPayd}</div>
                </S.Item>
            </Grid>

            <Grid item xs={12} sm={4}>
                <S.Item style={{ backgroundColor: '#c3c3b9' }}>
                    <div style={{ marginBottom: '1rem' }}>TOTAL DOS JUROS</div>
                    <div style={{ fontSize: '2rem', color: 'red' }}>R$ {amount.totalAmountInTaxes}</div>
                </S.Item>
            </Grid>

            <Grid item xs={12} sm={4}>
                <S.Item style={{ backgroundColor: '#bdbdbd' }}>
                    <div style={{ marginBottom: '1rem' }}>TOTAL DO EMPRÉSTIMO</div>
                    <div style={{ fontSize: '2rem', color: 'green' }}>R$ {amount.amountTaken}</div>
                </S.Item>
            </Grid>
        </S.Container>
    )
}

export default ReportDash;