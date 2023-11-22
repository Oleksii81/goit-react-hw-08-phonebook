import { Section } from 'components/Section/Section';
import { Containers } from 'components/Containers/Container';
import { Form } from 'components/Form/Form';
import { ContactsSum } from 'components/ContactsSum/ContactsSum';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllContacts } from 'redux/Contacts/contactOperations';

const CreateContactsPage = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContacts())
  })

  return(
    <Section>
      <Containers title={'Phonebook'}>
        <Form />
        <ContactsSum/>
      </Containers>
    </Section>
  );
};

export default CreateContactsPage;