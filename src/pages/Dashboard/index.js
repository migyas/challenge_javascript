import React from 'react';
import { Grid } from '@material-ui/core';

import Header from '../../components/Header';
import ReportDash from '../../components/ReportDash';
import Installments from '../../components/Installments';

const Dashboard = ({ amount }) => {
    return (
        <>
            <Header amount={amount.UserId} />
            <Grid container lg={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '1.5rem' }}>

                <ReportDash amount={amount} />
                <Installments amount={amount} />
            </Grid>
        </>
    )
}

export default Dashboard;
