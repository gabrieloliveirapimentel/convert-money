import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 0 auto;
    max-width: 30rem;

    padding-top: 4rem;
    border-radius: 1.5rem;

    border: 1px solid ${props => props.theme['blue-500']};
    background-color: ${props => props.theme['blue-300']};
`

export const Content = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    gap: 8px;

    padding: 0rem 4rem;
    padding-bottom: 1.5rem;

    label {
        font-size: 12px;
        text-transform: uppercase;
        color: ${props => props.theme.white};
    }

    input, select {
        color: ${props => props.theme.white};
        border: none;
        border-radius: 8px;

        padding: 1rem 1.25rem;
        background-color: ${props => props.theme['blue-200']};
    }

    select {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;

        background-image: url('data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M16.6922 7.94217L10.4422 14.1922C10.3841 14.2503 10.3152 14.2964 10.2393 14.3278C10.1634 14.3593 10.0821 14.3755 9.99998 14.3755C9.91785 14.3755 9.83652 14.3593 9.76064 14.3278C9.68477 14.2964 9.61584 14.2503 9.55779 14.1922L3.30779 7.94217C3.19052 7.82489 3.12463 7.66583 3.12463 7.49998C3.12463 7.33413 3.19052 7.17507 3.30779 7.05779C3.42507 6.94052 3.58413 6.87463 3.74998 6.87463C3.91583 6.87463 4.07489 6.94052 4.19217 7.05779L9.99998 12.8664L15.8078 7.05779C15.8659 6.99972 15.9348 6.95366 16.0107 6.92224C16.0865 6.89081 16.1679 6.87463 16.25 6.87463C16.3321 6.87463 16.4134 6.89081 16.4893 6.92224C16.5652 6.95366 16.6341 6.99972 16.6922 7.05779C16.7502 7.11586 16.7963 7.1848 16.8277 7.26067C16.8592 7.33654 16.8753 7.41786 16.8753 7.49998C16.8753 7.5821 16.8592 7.66342 16.8277 7.73929C16.7963 7.81516 16.7502 7.8841 16.6922 7.94217Z"/></svg>');
        background-size: 1rem;
        background-repeat: no-repeat;
        background-position: right 1rem center;

        cursor: pointer;
        font-size: 1rem;

        &:focus {
            background-image: url('data:image/svg+xml;charset=UTF-8,<svg width="20" height="20" viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M3.30783 12.0578L9.55783 5.80783C9.61588 5.74972 9.68481 5.70362 9.76068 5.67217C9.83656 5.64072 9.91788 5.62453 10 5.62453C10.0822 5.62453 10.1635 5.64072 10.2394 5.67217C10.3152 5.70362 10.3842 5.74972 10.4422 5.80783L16.6922 12.0578C16.8095 12.1751 16.8754 12.3342 16.8754 12.5C16.8754 12.6659 16.8095 12.8249 16.6922 12.9422C16.5749 13.0595 16.4159 13.1254 16.25 13.1254C16.0842 13.1254 15.9251 13.0595 15.8078 12.9422L10 7.13361L4.19221 12.9422C4.13414 13.0003 4.0652 13.0463 3.98933 13.0778C3.91346 13.1092 3.83214 13.1254 3.75002 13.1254C3.6679 13.1254 3.58658 13.1092 3.51071 13.0778C3.43484 13.0463 3.3659 13.0003 3.30783 12.9422C3.24976 12.8841 3.2037 12.8152 3.17227 12.7393C3.14085 12.6635 3.12467 12.5821 3.12467 12.5C3.12467 12.4179 3.14085 12.3366 3.17227 12.2607C3.2037 12.1848 3.24976 12.1159 3.30783 12.0578Z" /></svg>');
            background-size: 1rem;
            background-repeat: no-repeat;
            background-position: right 1rem center;
        }
    }

    option {
        color: ${props => props.theme.white};
        background-color: ${props => props.theme['blue-200']};
    }
`


export const Response = styled.div`
    width: 100%;
    gap: 8px;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    height: 9.75rem;
    padding: 2.5rem;

    border-radius: 0 0 1.5rem 1.5rem;    
    background-color: ${props => props.theme['blue-400']};

    span {
        font-size: 1rem;
        font-weight: 400;

        font-family: 'IBM Plex Mono';
        color: ${props => props.theme['blue-800']};
    }

    b { 
        font-size: 2rem;
        font-weight: 700;

        letter-spacing: 1.5px;
        color: ${props => props.theme.white};
    }
`

export const Button = styled.button`    
    margin-top: 1rem;
    margin-bottom: 3.5rem;

    padding: 1rem 1.25rem;

    border: none;
    border-radius: 8px;

    font-size: 1rem;
    line-height: 1rem;
    font-weight: 600;

    color: ${props => props.theme.white};
    background-color: ${props => props.theme['blue-600']};

    &:hover {
        background-color: ${props => props.theme['blue-700']};
        cursor: pointer;
    }

    &:disabled {
        background-color: ${props => props.theme['blue-600']};
        opacity: 0.5;

        cursor: default;
    }
`
