import { useAuth } from "../hooks/useAuth"
import { AuthContext } from "./authContext"


export const AuthProvider = ({ children }) => {

     const { login, handlerLogin, handlerLogOut } = useAuth();  
            

    return (
       <AuthContext.Provider value={
            {
                login,
                handlerLogin,
                handlerLogOut,
            } 
       }>
        { children }
       </AuthContext.Provider>
    )
}