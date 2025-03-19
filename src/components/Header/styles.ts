import styled from "styled-components"

export const Container = styled.header`
    padding: 5rem 0 3.2rem;

    @media (max-width: 768px) {
        padding: 4rem 0 6rem;
    }

    @media (max-width: 480px) {
        padding: 3rem 0 5rem;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
