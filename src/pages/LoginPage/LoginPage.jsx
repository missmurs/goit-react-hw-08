import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../LoginPage/LoginPage.module.css";
import { useDispatch } from "react-redux";
import { apiLogin } from "../../redux/auth/operations";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Некоректна електрона адреса")
    .required("Електрона адреса є обов'язковим"),
  password: Yup.string()
    .min(8, "Пароль має бути мінімум 8 символи")
    .max(50, " Пароль має бути максимум 50 символів")
    .required("Пароль є обов'язковим"),
});

const LoginPage = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(apiLogin(values));
    console.log("values", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label>
            <span className={css.title}>Електрона адреса</span>
            <Field type="text" name="email" placeholder="across@mail.com" />
            <ErrorMessage className={css.error} name="email" component="span" />
          </label>
        </div>
        <div className={css.formGroup}>
          <label>
            <span className={css.title}>Пароль</span>
            <Field type="password" name="password" placeholder="********" />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </label>
        </div>
        <button className={css.btnSignup} type="submit">
          Увійти
        </button>
      </Form>
    </Formik>
  );
};
export default LoginPage;
