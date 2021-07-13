import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root{
        --black: #171717;
        --darkGray:#444444;
        --medGray:#B2B1B9;
        --lightGray:#EDEDED;
        --white:#FFFFFF;
        --fontBig:2rem;
        --fontMed:1.8rem;
        --fontSmall:1.5rem;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        background-color:var(--lightGray);
    }




`;
