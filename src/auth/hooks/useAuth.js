import { useReducer } from "react";
import { loginReducer } from "../pages/reducers/loginReducer";
import Swal from "sweetalert2";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
  isAuth: false,
  user: undefined,
};
export const useAuth = () => {
  const [login, dispatch] = useReducer(loginReducer, initialLogin);

  const handlerLogin = ({ username, password }) => {
    if (username === "admin" && password === "12345") {
      const user = { username: "admin" };
      dispatch({
        type: "login",
        payload: user,
      });

      sessionStorage.setItem(
        "login",
        JSON.stringify({
          isAuth: true,
          user,
        })
      );

      Swal.fire(
        "Usuario autenticado",
        `El usuario ${username} ha iniciado sesión correctamente`,
        "success"
      );
    } else {
      Swal.fire("Error login", "Username o password incorrectos", "error");
    }
  };

  const handlerLogOut = () => {
    dispatch({
      type: "logOut",
    });
    sessionStorage.removeItem("login");
  };

  return {
    login,
    
    handlerLogin,
    handlerLogOut,
  };
};
