import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./RegistrationPage.module.css";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Ім'я користувача має бути мінімум 3 символи")
    .max(50, "Ім'я користувача має бути максимум 50 символів")
    .required("Ім'я користувача є обов'язковим"),
  email: Yup.string()
    .email("Некоректна електрона адреса")
    .required("Електрона адреса є обов'язковим"),
  password: Yup.string()
    .min(8, "Пароль має бути мінімум 8 символи")
    .max(50, " Пароль має бути максимум 50 символів")
    .required("Пароль є обов'язковим"),
});

const RegistrationPage = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label>
            <span className={css.title}>Ім&apos;я користувача</span>
            <Field type="text" name="name" placeholder="Адріан Кросс" />
            <ErrorMessage className={css.error} name="name" component="span" />
          </label>
        </div>
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
          Зареєструватися
        </button>
      </Form>
    </Formik>
  );
};
export default RegistrationPage;
