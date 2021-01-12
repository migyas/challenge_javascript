import React from 'react'
import {
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Grid
} from '@material-ui/core';

import GetAppIcon from '@material-ui/icons/GetApp';

import * as S from './styled';

const Installments = ({ amount }) => {
    return (
        <Grid container xs={12} sm={12} md={8} style={{marginTop: '3rem'}}>
            <h2 style={{fontSize: '1.8rem'}}>Parcelas</h2>
            <S.Container elevation={3} >
                <S.TableContent size="medium">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" style={{fontSize: '1.5rem'}}>VENCIMENTO</TableCell>
                            <TableCell align="center" style={{fontSize: '1.5rem'}}>VALOR</TableCell>
                            <TableCell align="center" style={{fontSize: '1.5rem'}}>STATUS</TableCell>
                            <TableCell align="center" style={{fontSize: '1.5rem'}}>BAIXAR</TableCell>
                        </TableRow>
                    </TableHead>
                    
                    <TableBody>
                        {amount.installments?.map(item => (
                            <TableRow key={item.dueDate}>
                                <TableCell align="center" style={{fontSize: '1.2rem'}}>{item.dueDate}</TableCell>
                                <TableCell align="center" style={{fontSize: '1.2rem'}}>{item.formatedValue}</TableCell>
                                <TableCell align="center" style={{fontSize: '1.2rem'}}>{item.payd === false ? 'Falta pagar' : 'Pago'}</TableCell>
                                <TableCell align="center" ><GetAppIcon style={{ cursor: 'pointer' }} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </S.TableContent>
            </S.Container>
        </Grid>

    )
}

export default Installments;