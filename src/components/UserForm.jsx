import { useEffect, useState } from "react";

export const UserForm = ({ userSelected, handlerAddUser, initialUserForm }) => {
  // Estado inicial del formulario, basado en initialUserForm
  const [userForm, setUserForm] = useState(initialUserForm);

  //Desestructuración para acceder fácilmente a cada campo del formulario
  const { id, username, password, email } = userForm;


  useEffect(() => {
    setUserForm({
      ...userSelected,
      password: '',
    });
  }, [userSelected])

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
        `Por favor, completa los siguientes campos: 
          ${missingFields.join(", ")}`, // el join introduce una ',' entre los elementos + un espacio
        "error"
      );
      return; 
    }
    handlerAddUser(userForm); // se envia al padre 
                              // (userFormData en UsersApp)
                              // y aniade el usuario

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
      <input 
        type="hidden" 
        name="id"
        value={id}/>

      <button className="btn btn-primary" type="submit">
        {id > 0 ? 'Editar' : 'Crear'}
      </button>
    </form>
  );
};
