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
        visibleForm,
        handlerAddUser,
        handlerRemoveUser,
        handlerUserSelectedForm,
        handlerOpemForm,
        handlerCloseForm,
    } = useUsers();
 
    return (
        <>
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
            
    {/* Si es falso, no es visible, si true, 
    muestro el formularioo */}
                {!visibleForm || <div className="col">
                    <UserForm
                        initialUserForm={ initialUserForm }
                        userSelected = {userSelected} 
                        handlerAddUser={ handlerAddUser }
                        handlerCloseForm = { handlerCloseForm }
                    /></div>} 

            <div className="col">
                {visibleForm || 
                    <button
                        className="btn btn-primary my-2"
                        onClick={handlerOpemForm}>
                            Nuevo usuario
                    </button> }

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
