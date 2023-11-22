import { LoginHomeStyledContainer } from "./LoginHome.styled";
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAuth } from "hooks/useAuth";
import { logOut } from "redux/Auth/auth-operations";
import helloPicture from "../../images/greeting.svg";
import contactPicture from "../../images/user.svg";
import logoutPicture from "../../images/logout.svg";
import createPicture from "../../images/create.svg";

export const LoginHomePage = () => {
    const dispatch = useDispatch();
    const {user} = useAuth();

    return (
        <LoginHomeStyledContainer>
            <img className="login-page-picture" src={helloPicture} alt="" width='80'/>
            <h2 className="login-page-title">Greetings!</h2>
            <p className="login-page-text">Dear {user}</p>
            <p className="login-page-text lower">Choose the action you want to take:</p>
            <div className="login-descr-container">
                <div className="action-container">
                    <p className="action-text">Contacts</p>
                    <NavLink className='nav-link' to="/contacts">
                        <img className="action-picture-contact" src={contactPicture} alt="" width='80'/>
                    </NavLink>
                </div>
                <div className="action-container">
                    <p className="action-text">Create Contacts</p>
                    <NavLink className='nav-link' to="/createcontacts">
                        <img className="action-picture-create" src={createPicture} alt="" width='80'/>
                    </NavLink>
                </div>
                <div className="action-container">
                    <p className="action-text">Logout</p>
                    <button className="action-button" type="button" onClick={() => dispatch(logOut())}>
                        <img className="action-picture-logout" src={logoutPicture} alt="" width='80'/>
                    </button>
                </div>
            </div>
        </LoginHomeStyledContainer>
    );
};