import { useSelector } from 'react-redux';
import { 
    selectContacts, 
    selectFilter, 
    selectLoading, 
    selectCheckbox,
    selectIDForModal,
} from "redux/selectors";

export const useContacts = () => {
    const isLoading = useSelector(selectLoading);
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const checkbox = useSelector(selectCheckbox);
    const itemIDForModal = useSelector(selectIDForModal);

    return {
        isLoading,
        contacts,
        filter,
        checkbox,
        itemIDForModal,
    };
};