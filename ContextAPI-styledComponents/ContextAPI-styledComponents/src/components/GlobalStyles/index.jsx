import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    :root{
        --color-primary:  #c70fec;
        --color-secundary:  #a40cc2;
        --color-dark: #2f2f2f;
    }
`

export default GlobalStyles;