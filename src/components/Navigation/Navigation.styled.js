import { styled } from "styled-components";

export const NavigationStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    .link {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        text-decoration: none;
        padding: 10px;
        font-size: 18px;
        letter-spacing: 1px;
        transition: color 0.25s;

        &:hover, &:focus {
        color: #5549b2;
        }
    
    @media (min-width: 768px) {
      font-size: 24px;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`