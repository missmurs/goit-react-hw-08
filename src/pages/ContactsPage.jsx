import { useDispatch, useSelector } from "react-redux";
import {
  selectUserIsLoading,
  selectUserError,
} from "../redux/contacts/selectors";

import ContactList from "../components/ContactList/ContactList";
import Loader from "../components/Loader/Loader";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import { apiAddContacts } from "../redux/contacts/operations";
const ContactsPage = () => {
  const isLoading = useSelector(selectUserIsLoading);
  const error = useSelector(selectUserError);
  const dispatch = useDispatch();
  const onAddContact = (contact) => {
    dispatch(apiAddContacts(contact));
  };

  return (
    <>
      <div>
        {isLoading && <Loader />}
        {error !== null && <p>{error} Please, try again later.</p>}
      </div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={onAddContact} />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
};
export default ContactsPage;
