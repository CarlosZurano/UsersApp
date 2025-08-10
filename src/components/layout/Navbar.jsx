import { NavLink } from "react-router-dom";

export const Navbar = ({ login, handlerLogOut }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Users App
      </a>

      {/* Botón hamburguesa para móviles */}
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
            <NavLink 
              className="nav-link" 
              to="/users"
            >
              Usuarios
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Logout y usuario */}
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavLogOut">
        <span className="nav-item nav-link text-primary mx-3">
          {login.user?.username}
        </span>
        <button 
          className="btn btn-outline-success"
          onClick={handlerLogOut}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
