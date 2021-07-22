import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    :root{
        --black: #171717;
        --darkGray:#2b2b2b;
        --medGray:#B2B1B9;
        --lightGray:#EDEDED;
        --white:#FFFFFF;

        --fontSuperBig:2.4rem;
        --fontBig:2rem;
        --fontMed:1.8rem;
        --fontSmall:1.3rem;
        --fontSuperSmall:0.7rem;
    }

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body{
        background-color:var(--lightGray);
    }


    h1{
        font-size: var(--fontSuperBig);
        font-weight: 600;
        font-family: 'Abel', sans-serif;
    }
    h2{
        font-size: var(--fontMed);
        font-weight: 600;
        font-family: 'Abel', sans-serif;
    }
    h3{
        font-size: var(--fontSmall);
        font-weight: 400;
        
        font-family: 'Montserrat', sans-serif;
    }
    p,h4,h5,h6,li{
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
    }
    a{
        text-decoration: none;
        color:inherit;
    }



`;
