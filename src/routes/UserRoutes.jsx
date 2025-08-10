import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPages"
import { Navbar } from "../components/layout/Navbar"

export const UserRoutes = ({ handlerLogOut, login }) => {
    return (
        <>
             <Navbar
                handlerLogOut={handlerLogOut} 
                login={login} />
            <Routes>
                <Route 
                    path="users" 
                    element={ <UsersPage/> }/>
                <Route 
                    path="/" 
                    element={ <Navigate to='/users'/>}/>
            </Routes>
        </>
    )
}