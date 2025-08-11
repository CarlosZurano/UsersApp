import { useUsers } from "../hook/useUsers"
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const {
    users,
    userSelected,
    initialUserForm,
    visibleForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpemForm,
    handlerCloseForm,
  } = useUsers();

  return (
    // Proveedor con toda la data
    <UserContext.Provider
      value={{
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpemForm,
        handlerCloseForm,
      }}>
      {children}
    </UserContext.Provider>
  );
};
