import { UpdateFromStyles } from "./FormUpdate.styled";
//import {ReactComponent as WorldIcon} from "../../images/world.svg";
import {ReactComponent as UserIcon} from "../../images/user.svg";
import {ReactComponent as PnoneIcon} from "../../images/phone.svg";
import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useContacts } from "hooks/useContacts";
//import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { updateContactById } from "redux/Contacts/contactOperations";
import { getAllContacts } from 'redux/Contacts/contactOperations';

export const FormUpdate = (props) => {
    const dispatch = useDispatch();
    const {contacts, itemIDForModal} = useContacts();
    const [setIsOptionsListActive] = useState(false);
    const dropdownRef = useRef(null); 

    // INITIAL DATA RENDER FOR INPUT FIELDS//
    const selectedContact = contacts.find((item) => item.id === itemIDForModal);
    const selectedNumber = selectedContact.number.split("-").slice(-4).join("");

    const handleBackgroundClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOptionsListActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleBackgroundClick);

        return () => {
            document.removeEventListener('click', handleBackgroundClick);
        };
    });

    // SUBMIT FORM////////////////////////
    const onFormUpdateSubmit = (event) => {
        event.preventDefault();
        const code = event.target.country.value;
        const name = event.target.name.value;
        const number = event.target.number.value;

        const codeValue = code.split(":")[1].trim();
        const digits = number.split("");
        const formattedNumber = `${digits.slice(0, 2).join('')}-${digits.slice(2, 5).join('')}-${digits.slice(5, 7).join('')}-${digits.slice(7, 9).join('')}`;
        const phoneNumber = `${codeValue }-${formattedNumber}`;

        const existedContact = {name: selectedContact.name, number: selectedContact.number}
        const contactData = {
            id: selectedContact.id,
            name,
            number: phoneNumber
        };

        if (contactData.name === existedContact.name && contactData.number === existedContact.number) {
            toast.warning(`You are trying to update unchanged data.`);
            return
        }

        dispatch(updateContactById(contactData))
        .then(() => {
          dispatch(getAllContacts());
          props.formShowUpdateForm();
        })
        .catch((error) => {
          console.error('Error updating contact:', error);
        });
        event.target.reset();
    };
    
    return(
        <UpdateFromStyles onSubmit={onFormUpdateSubmit}>
            <label className='label' htmlFor='name'>
                <div className='descr-div'>
                    <UserIcon className="form-icon" width="30" height="25"/>
                    <span className="input-title">Username</span>
                </div>
                <input className="input"
                    type="text"
                    name="name"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    placeholder='Rosie Simpson'
                    id='name'
                    defaultValue={selectedContact.name}
                />
            </label>
            <label className='label' htmlFor='number'>
                <div className='descr-div'>
                    <PnoneIcon className="form-icon" width="30" height="30"/>
                    <span className="input-title">Number</span>
                </div>
                <input className="input input-below"
                    type="tel"
                    name="number"
                    title="Phone number must be digits only. Without spaces, dashes, parentheses or +"
                    required
                    placeholder='459125687'
                    minLength="1"
                    maxLength="9"
                    id='number'
                    defaultValue={selectedNumber}
                />
            </label>
            <p className="descr-text descr-text-lower">&#8727; Type the number in the format mentioned above only.</p>
            <button 
                className="btn-f btn-primary-f btn-block-f btn-large-f" 
                type='submit'
                >Update Contact
            </button>
        </UpdateFromStyles>
    );
};