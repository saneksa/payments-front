import { Navigate, Route, Routes } from "react-router";
import { RegistrationPage, LoginPage } from "@payment-front/pages";

import { useAuthorization } from "@payment-front/features";

const UnauthorizedRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<RegistrationPage />} />
        <Route path="*" element={<Navigate to="/sign-in" />} />
      </Route>
    </Routes>
  );
};

const AuthorizedRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/main" Component={() => <div>Main screen</div>} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Route>
    </Routes>
  );
};

export const AppRoutes = () => {
  const { isAuthorized } = useAuthorization();

  return isAuthorized ? <AuthorizedRoutes /> : <UnauthorizedRoutes />;
};
