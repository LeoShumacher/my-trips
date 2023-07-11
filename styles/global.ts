import { createGlobalStyle, ThemeProvider } from 'styled-components'

const globlaStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

    html {
        font-size: 62.5%
    }

    html, body, #__next {
        height: 100%;
    }

    body {
        font-family: -apple-system, 'Segoe UI' 
    }

`

export default globlaStyles