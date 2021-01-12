import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
    font-family: 'Roboto',sans-serif;
  }
  body {
      background-color: #FFFFFF;
  }
`;