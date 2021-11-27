import { createGlobalStyle } from 'styled-components';

export const ResetCss = createGlobalStyle`
    *,
    ::before,
    ::after {
        outline: 0;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        background-color: #fff;
    }

    body::-webkit-scrollbar {
        width: 10px;
    }

    body::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.primary};
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`