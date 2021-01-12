import React, { useState, useEffect } from 'react';

import GlobalStyles from './styles/global';
import Dashboard from './pages/Dashboard';
import api from './service/api';


const App = () => {
  const [amount, setAmount] = useState([]);

  const getData = async () => {
    const response = await api.get('Installments');
    const data = response.data;

    setAmount(data);
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <GlobalStyles />
      <Dashboard amount={amount} />
    </>
  );
}

export default App;
