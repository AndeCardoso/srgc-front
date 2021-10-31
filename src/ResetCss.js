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
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`