import { styled } from "styled-components";

export const AuthNavStyles = styled.div`
    display: flex;

    a {
    text-decoration: none;
    color: inherit;
  }
  .link {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
    font-size: 18px;
    margin-right: 10px;

    &:not(:first-child) {
      margin-right: 0;
    }
    
    @media (min-width: 768px) {
      font-size: 24px;
    }

  }

`