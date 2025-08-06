import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

const initialUsers = [
  {
    id: 1,
    username: "pepe",
    password: 12345,
    email: "pepe@gmail.com",
  },
];

const initialUserForm = {
  id: 0,
  username: "",
  password: "",
  email: "",
};

export const useUsers = () => {
  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const [userSelected, setuUserSelected] = useState(initialUserForm); // usuario seleccionado
  const handlerAddUser = (userFormData) => {
    // viene del formulario
    let type;
    if (userFormData.id === 0) {
      type = "addUser";
    } else {
      type = "updateUser";
    }
    dispatch({
      type,
      payload: userFormData,
      // userFormData representa el objeto con los
      // datos que envia el formulario
    });

    Swal.fire(
        (userFormData.id === 0) ? 
            `Usuario creado` 
        : 
            `Usuario actualizado`,
        (userFormData.id === 0) ? 
            `El usuario ${userFormData.username} ha sido creado con éxito`
        :
            `El usuario ${userFormData.username} ha sido actualizado con éxito`,
            "success"

    )
  };

  const handlerRemoveUser = (id) => {
    dispatch({
      type: "removeUser",
      payload: id,
    });
  };

  const handlerUserSelectedForm = (user) => {
    setuUserSelected({ ...user });
  };

  // devuelve un objeto con las funciones  estados del prop
  return {
    users,
    userSelected,
    initialUserForm,
    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
  };
};
