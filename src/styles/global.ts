import { createGlobalStyle } from 'styled-components'

    const GlobalStyles = createGlobalStyle`
    
    :root {
        --highlight: #F18805;
        --background: #0E1428;
        --white: #eeeeee;

        --container 100rem;

        --small: 1.5rem;
        --medium: 3rem;
        --large: 5rem;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    }

    html, body, #__next {
        height: 100%;
        background: var(--background);
        color: var(--white);

    }

    

    p,a {
        font-size: 2rem;
        line-height: var(--medium);
    }

    a {
        color: var(--highlight);
    }

    `

export default GlobalStyles