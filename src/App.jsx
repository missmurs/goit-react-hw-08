import { Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));

export const App = () => {
  return (
    <>
      <main>
        <div>
          <Navigation />
          <Suspense fallback={<b>Loading...</b>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
          </Suspense>
        </div>
      </main>
    </>
  );
};
