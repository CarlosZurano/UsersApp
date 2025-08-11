import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/authContext";
const initialLoginForm = {
  username: "",
  password: "",
};
export const LoginPage = () => {
  const { handlerLogin } = useContext(AuthContext);
  
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const { username, password } = loginForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const missingFields = [];

    // Si vacio, le pusheo los campos
    if (!username) missingFields.push("Nombre");
    if (!password) missingFields.push("Contraseña");

    if (missingFields.length > 0) {
      Swal.fire(
        "Campos requeridos",
        `Por favor, complete los siguientes campos: 
            ${missingFields.join(", ")} `,
        "error"
      );
    }

    //implementamos el login, en este caso simulado
    handlerLogin({ username, password });
    setLoginForm(initialLoginForm);
  };

  return (
    <div
      className="modal"
      style={{ display: "block" }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"> Login Page</h5>
          </div>

          <form onSubmit={onSubmit}>
            <div className="modal-body">
              <input
                type="text"
                className="form-control my-3 w-75%"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
              />

              <input
                type="password"
                className="form-control my-3 w-75%"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
