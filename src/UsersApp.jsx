import { useReducer } from "react";
import { LoginPage } from "./auth/pages/LoginPage";
import { UsersPage } from "./pages/UsersPages";
import { loginReducer } from "./auth/pages/reducers/loginReducer";
import Swal from "sweetalert2";

const initialLogin = {
  isAuth: false,
  user: undefined,
}
export const UsersApp = () => {
 
  const [login, dispatch] = useReducer(loginReducer, initialLogin);

  const handlerLogin = ({username, password}) => {
        if (username === 'admin' && password === '12345'){
          const user = {username: 'admin'}
          dispatch({
            type:'login',
            payload: user,
          })
        
        Swal.fire(
          'Usuario autenticado',
          `El usuario ${username} ha iniciado sesion correctamente`,
          'success'
        )
          

      }else{
        Swal.fire(
          'Error login',
          'Username o password incorrectos',
          'error'
        )
      }
  }

  return (
    <>
    {login.isAuth
      ? <UsersPage/>
      : <LoginPage handlerLogin={handlerLogin}/> }
    </>
  );
};
