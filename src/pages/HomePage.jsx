import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { apiGetAllContacts } from "../redux/contacts/operations";
const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetAllContacts());
  }, [dispatch]);

  return <h1>Phonebook</h1>;
};
export default HomePage;
