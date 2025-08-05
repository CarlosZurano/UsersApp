import Swal from "sweetalert2";
import { useState } from "react";

const initialUserForm = {
  username: "",
  password: "",
  email: "",
};

export const UserForm = ({ handlerAddUser }) => {
  // Estado inicial del formulario, basado en initialUserForm
  const [userForm, setUserForm] = useState(initialUserForm);

  //Desestructuración para acceder fácilmente a cada campo del formulario
  const { username, password, email } = userForm;

  // Maneja los cambios en los inputs del formulario
  const onInputChange = ({ target }) => {
  const { name, value } = target; // Extrae el nombre del campo y su nuevo valor

    // Actualiza el estado del formulario, manteniendo el resto de los valores
    setUserForm({
      ...userForm,
      // Atributo del input: valor escrito en él
      [name]: value,
    });
  };
  // Manejador del evento de envío del formulario
  const onSubmit = (event) => {
    event.preventDefault();

    const missingFields = [];

    // Si vacio, le pusheo los campos
    if (!username) missingFields.push("Nombre"); 
    if (!password) missingFields.push("Contraseña");
    if (!email) missingFields.push("Email");

    // Si el array tiene algun elemento = algo hay vacio
    if (missingFields.length > 0) {
      Swal.fire(
        "Campos requeridos",
        `Por favor, completa los siguientes campos: ${missingFields.join(", ")}`, // el join introduce una ',' entre los elementos + un espacio
        "error"
      );
      return; // Salir si faltan campos
    }
    handlerAddUser(userForm); // se envia al padre 
                              // (userFormData en UsersApp)
                              // y aniade el usuario
    
    Swal.fire(
      "Uusario añadido",
      `El usuario ${username}, fue creado correctamente`,
      "success"
    )

    setUserForm(initialUserForm);// reset formulario
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control my-3 w-75"
        placeholder="Nombre"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        className="form-control my-3 w-75"
        placeholder="Contraseña"
        type="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <input
        className="form-control my-3 w-75"
        placeholder="e-mail"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <button className="btn btn-primary" type="submit">
        Crear
      </button>
    </form>
  );
};
