import { useSelector } from 'react-redux';
import { 
    selectUser, 
    selectLoggedUser, 
    selectLoading, 
    selectRefreshing, 
} from 'redux/Auth/auth-selectors';

export const useAuth = () => {
    const isLoadingAuth = useSelector(selectLoading);
    const isLoggedIn = useSelector(selectLoggedUser);
    const user = useSelector(selectUser);
    const isRefreshing = useSelector(selectRefreshing);

    return {
        isLoadingAuth,
        isLoggedIn,
        user,
        isRefreshing,
    };
};