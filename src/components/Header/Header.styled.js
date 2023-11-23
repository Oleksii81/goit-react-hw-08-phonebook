import { styled } from "styled-components";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: #679ee2c0;
    border-bottom: 1px solid #556072;
    padding: 0 40px;
    box-sizing: border-box; 
    //width: 100vh; 

    @media (max-width: 620px) {
        height: 160px; 
    }
    
`