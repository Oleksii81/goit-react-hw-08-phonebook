import { HomeStyledContainer } from "./InitialHome.styled";
import { NavLink } from 'react-router-dom';
import greetingPicture from "../../images/greeting.png";

export const InitialHomePage = () => {
    return (
        <HomeStyledContainer>
            <div className="title-container">
                <h1 className='home-title'>
                Welcome to Phonebook web APP!
                </h1>
                <img className="greeting-picture" src={greetingPicture} alt='' width='100'/>
            </div>
            <div className="nav-container">
                <div className="register-container">
                    <p className="nav-descr">Register</p>
                    <NavLink className='nav-link' to="/register">
                    <img className="link-picture" src={require("../../images/register.svg").default} alt="" width='100' />
                    </NavLink>
                </div>
                <div className="login-container">
                    <p className="nav-descr">Log in</p>
                    <NavLink className='nav-link' to="/login">
                    <img className="link-picture" src={require("../../images/login.svg").default} alt="" width='100' />
                    </NavLink>
                </div>
            </div>
        </HomeStyledContainer>
    );
};