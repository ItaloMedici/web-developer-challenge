import { createGlobalStyle } from "styled-components";
import { theme } from ".";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    max-width: 100vw;

    background: ${theme.color("background")};
  }
`