import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../auth/context/authContext";

export const Navbar = () => {
  const { login, handlerLogOut } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Users App
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menú de enlaces */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/users">
              Usuarios
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/users/register">
              Registrar Usuario
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Logout y usuario */}
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavLogOut"
      >
        <span className="nav-item nav-link text-primary mx-3">
          {login.user?.username}
        </span>
        <button className="btn btn-outline-success" onClick={handlerLogOut}>
          Logout
        </button>
      </div>
    </nav>
  );
};
