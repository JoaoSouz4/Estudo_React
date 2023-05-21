
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --color-primary: #6615d0;
        --color-secundary: #5712b1;
        --color-black: #2d2d2d;
        --color-light: #fafafa;
    }

    #root{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default GlobalStyles;