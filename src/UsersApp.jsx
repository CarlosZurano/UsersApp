import { useReducer, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";

  const initialUsers = [
    {
      id: 1,
      username: "pepe",
      password: 12345,
      email: "pepe@gmail.com",
    },
  ];

  const initialUserForm = {
    id:0,
    username: "",
    password:"",
    email: "",
  }

  

export const UsersApp = () => {
    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setuUserSelected] = useState(initialUserForm); //usuario seleccio9nado

    const handlerAddUser = (userFormData) => { //viene del formulario
        let type;
        if (userFormData.id === 0){
            type = 'addUser';
        }else{
            type = 'updateUser';
        }
        dispatch({
            type,
            payload: userFormData,
            // userFormData representa el objeto con los 
            // datos que envia el formulario
        })
    }

    const handlerRemoveUser = (id) => {

        dispatch({
            type: 'removeUser',
            payload: id,
        })
    }

    const handlerUserSelectedForm = (user) => {
        setuUserSelected({...user});
    }

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
