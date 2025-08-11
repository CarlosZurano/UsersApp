import { Navigate, Route, Routes } from "react-router-dom";
import { UsersPage } from "../pages/UsersPages";
import { Navbar } from "../components/layout/Navbar";
import { RegisterPage } from "../pages/RegisterPage";
import { UserProvider } from "../context/UserProvider";

export const UserRoutes = ({ handlerLogOut, login }) => {

  return (
    <>
      <UserProvider>
        <Navbar handlerLogOut={handlerLogOut} login={login} />
        <Routes>
          <Route
            path="users"
            element={<UsersPage/>}
          />

          <Route
            path="users/register"
            element={<RegisterPage/>}
          />

          <Route
            path="users/edit/:id"
            element={<RegisterPage/>}
          />
          <Route 
            path="/" 
            element={<Navigate to="/users" />} />
        </Routes>
      </UserProvider>
    </>
  );
};
