import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPages";
import { Navbar } from "./components/layout/Navbar";
import { useAuth } from "./auth/hooks/useAuth";

export const UsersApp = () => {
  const {login, handlerLogin, handlerLogOut} = useAuth();
  return (
    <>
      {login.isAuth ? (
        <>
          <Navbar handlerLogOut={handlerLogOut} login={login} />
          <UsersPage />
        </>
      ) : (
        <LoginPage handlerLogin={handlerLogin} />
      )}
    </>
  );
};
