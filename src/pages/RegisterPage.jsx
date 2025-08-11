import { useContext, useEffect, useState } from "react";
import { UserForm } from "../components/UserForm";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";


export const RegisterPage = () => {
  // users=[] porque si es registro, 
  // no existe ese usuario y si no lanza error
  const {users = [], initialUserForm} = useContext(UserContext);

  const [userSelected, setUserSelected] = useState(initialUserForm);

  //obtener el id desde la url
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Buscar el usuario cuyo id coincida con el de la url
      // si no lo encuentra, asigna el form vacio
      const user = users.find((u) => u.id == id) || initialUserForm;
      // actualiza el estado con el resultado
      setUserSelected(user);
    }
  }, [id]);

  return (
    <div className="container my-4">
      <h4>{userSelected.id > 0 ? "Editar" : "Registrar"} Usuario</h4>
      <div className="row">
        <div className="col">
          <UserForm
            userSelected={userSelected}
          />
        </div>
      </div>
    </div>
  );
};
