import { GlobalStyleComponent, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        html body #root{
            width: 100vw;
            height: 100vh;
            background-color: rgb(32,32,32);
        }
    }
`

export default GlobalStyle