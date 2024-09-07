import { useEffect } from "react";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { ContactList } from "../components/ContactList/ContactList";
import { SearchBox } from "../components/SearchBox/SearchBox";
import { useDispatch } from "react-redux";
import { apiGetAllContacts } from "../redux/contacts/operations";
const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetAllContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
export default HomePage;
