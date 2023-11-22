import { InitialHomePage } from "components/InitialHome/InitialHome";
import { LoginHomePage } from "components/LoginHome/LoginHome";
import { useAuth } from "hooks/useAuth";
  
const Home = () => {
    const { isLoggedIn } = useAuth();

    return isLoggedIn ? (
        <LoginHomePage/>
    ) : (
        <InitialHomePage/>
    );
};

export default Home;