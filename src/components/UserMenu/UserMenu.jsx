import { useDispatch, useSelector } from "react-redux";
import { apiLogout } from "../../redux/auth/operations";
import { selectAuthUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  return (
    <div className={css.userSection}>
      <p className={css.userName}>Welcome, {user.name}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(apiLogout())}
      >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
