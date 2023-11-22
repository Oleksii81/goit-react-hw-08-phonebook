import { styled } from "styled-components";

export const LoginHomeStyledContainer = styled.div`
    text-align: center;
    background-color: #85afe4c0;
    height: 100vh;
    padding-top: 20px;

    @media (min-width: 320px) {
     min-width: 320px;
    }

    @media (min-width: 768px) {
    min-width: 768px;
    }

    @media (min-width: 1200px) {
    min-width: 1200px;
}
    .login-descr-container {
        display: flex;
        gap: 20px;
        justify-content: center;

    }
    .action-button {
        border: none;
        background-color: inherit;
        cursor: pointer;
    }
`