import { styled } from "styled-components";

export const HomeStyledContainer = styled.div`
    text-align: center;
    background-color: #85afe4c0;
    height: 100vh;

@media (min-width: 320px) {
  min-width: 320px;
}

@media (min-width: 768px) {
  min-width: 768px;
}

@media (min-width: 1200px) {
  min-width: 1200px;
}

.title-container {
  padding: 20px;
}

.home-title {
    font-weight: 600;
    color: black;
    font-size: 35px;
    letter-spacing: 1px;
    margin-bottom: 20px;
    text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.8);
}

.greeting-picture {
  max-width: 100%;
  height: auto;
}

.nav-container {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.register-container,
.login-container {
  flex: 1;
  padding: 10px;
}

.nav-descr {
  font-size: 16px;
  margin-bottom: 10px;
}

.nav-link {
  text-decoration: none;
  color: #000; 
}

.link-picture {
  max-width: 100%;
  height: auto;
}
`