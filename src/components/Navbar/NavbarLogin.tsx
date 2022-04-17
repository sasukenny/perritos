import { Link } from 'react-router-dom';
import Button from '../Buttons/Button-Standar/Button';


const NavbarLogin = () => {
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
        <ul
          style={{ marginLeft: 'auto' }}
          className="navbar-nav d-flex align-items-center"
        >
          <li>
            <Link to="/">
              <Button className="m-1" color="primary" elevated>
                Iniciar Sesión
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <Button className="m-1" color="secondary" elevated>
                Registrarme
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarLogin;
