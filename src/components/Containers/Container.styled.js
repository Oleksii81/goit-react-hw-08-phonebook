import { styled } from "styled-components";

export const ContainersStyle = styled.div`
    display: flex;
    align-items: center;
    //justify-content: center;
    flex-direction: column;
    padding: 40px 40px 0 40px;
    margin: 0 auto;
    background-color: #85afe4c0;
    height: 100vh;
    //width: 100vh;

    @media (min-width: 320px) {
    min-width: 320px;
    }

    @media (min-width: 768px) {
    min-width: 768px;
    }

    @media (min-width: 1200px) {
    min-width: 1200px;
    }
    .title{
        font-weight: 600;
    color: black;
    font-size: 35px;
    letter-spacing: 1px;
    margin-bottom: 30px;
    margin-top: 30px;
    text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.8);
    }
`