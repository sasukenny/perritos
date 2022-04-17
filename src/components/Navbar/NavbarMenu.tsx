import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../common/context/UserContext';
import './Navbar.scss';

const NavbarMenu = () => {
  const { user } = useContext(UserContext);
  const closeSession = () => {
    localStorage.removeItem('token');
  };
  console.log(user);
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/misperritos">
              misperritos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/registrar">
              Registrar Perritos
            </Link>
          </li>
          <li className="nav-item responsive-item">
            <Link className="nav-link" to="/configuracion/color">
              Configuración
            </Link>
          </li>

          <li className="nav-item responsive-item">
            <Link onClick={closeSession} className="nav-link" to="/">
              Cerrar Sesión
            </Link>
          </li>
        </ul>

        <div className="user-wrapper">
          <Link to="/">
            <img src="/assets/images/ilonka.jpg" alt="" />
          </Link>
          <span className="user-name">{user.username}</span>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              title="Menú de usuario"
            ></button>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <Link to="/configuracion/color" className="dropdown-item">
                  Configuración
                </Link>
              </li>
              <li>
                <Link to="/" onClick={closeSession} className="dropdown-item">
                  Cerrar Sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarMenu;
