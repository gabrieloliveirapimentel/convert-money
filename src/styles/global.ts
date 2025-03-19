import { createGlobalStyle } from "styled-components"
import backgroundImg from "../assets/background.png"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }    

    :focus {
            outline: 0;
            box-shadow: 0 0 0 2px ${props => props.theme['blue-700']};
    }

    body {
        background-image: url(${backgroundImg});
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;

        color: ${props => props.theme['blue-900']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem 'Inter', sans-serif;
    }
`