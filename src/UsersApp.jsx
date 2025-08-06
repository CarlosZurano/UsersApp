import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { useUsers } from "./hook/useUsers";
  

export const UsersApp = () => {

    // constante que contiene el return 
    // de la funcion useUsers
    const {
        users,
        userSelected,
        initialUserForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
    } = useUsers();
 
    return (
        <>
        <div className="container my-4">
            <div className="row">
            <div className="col">
                <UserForm
                    initialUserForm={ initialUserForm }
                    handlerAddUser={ handlerAddUser }
                    userSelected = {userSelected} 
                />
            </div>

            <div className="col"> 
                {/* Si no hay usuarios en la lista, muestra warning. 
                Si si, muestra la lista */}
                {users.length === 0 ? 
               
                    <div className="alert alert-warning text-center">No hay usuarios en el sistema</div>
                    :<UsersList
                        handlerRemoveUser={ handlerRemoveUser }
                        users = {users}
                        handlerUserSelectedForm = { handlerUserSelectedForm }
                />}
            </div>
            </div>
        </div>
        </>
    );
};
