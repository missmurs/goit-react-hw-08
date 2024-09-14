import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { apiGetAllContacts } from "../../redux/contacts/operations";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const filtredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiGetAllContacts());
  }, [dispatch]);

  return (
    <div>
      <ul className={css.sectionContact}>
        {filtredContacts?.length === 0 && <h3>Contacts list is empty</h3>}
        {Array.isArray(filtredContacts) &&
          filtredContacts.map((contact) => {
            return (
              <Contact
                name={contact.name}
                number={contact.number || "No number available"}
                key={contact.id}
                id={contact.id}
              />
            );
          })}
      </ul>
    </div>
  );
};
export default ContactList;
