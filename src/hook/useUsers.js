import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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
  const [visibleForm, setVisibleForm] = useState(false);  //estado visibilidad formulario
  
  // para las rutas
  const navigate = (useNavigate);

  const handlerAddUser = (userFormData) => {
    // viene del formulario
    dispatch({
      type: (userFormData.id === 0) ? "addUser" : "updateUser",
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

    );
    setVisibleForm(false);
    setuUserSelected(initialUserForm);

    
  };

  const handlerRemoveUser = (id) => {
    dispatch({
      type: "removeUser",
      payload: id,
    });
  };

  const handlerUserSelectedForm = (user) => {
    setuUserSelected({ ...user });
    // true porque al seleccionar, tengo que mostrar el form
    setVisibleForm(true); 
  };


  const handlerOpemForm = () => {
    setVisibleForm(true);
  }

  const handlerCloseForm = () => {
    setVisibleForm(false);
    setuUserSelected(initialUserForm);
  }

  navigate('/users');

  // devuelve un objeto con las funciones  estados del prop
  return {
    users,
    userSelected,
    initialUserForm,
    visibleForm,

    handlerAddUser,
    handlerRemoveUser,
    handlerUserSelectedForm,
    handlerOpemForm,
    handlerCloseForm,
  };
};
