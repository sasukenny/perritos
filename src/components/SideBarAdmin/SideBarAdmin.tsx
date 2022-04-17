import { useNavigate } from 'react-router';

const SideBarAdmin = () => {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-light"
      style={{ width: '100%' }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <svg className="bi me-2" width={40} height={32}>
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">Opciones</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="#"
            className="nav-link active"
            aria-current="page"
            onClick={() => {
              navigate('/admin/citas');
            }}
          >
            <svg className="bi me-2" width={16} height={16}>
              <use xlinkHref="#home" />
            </svg>
            Citas Programadas
          </a>
        </li>
        <li>
          <a
            href="#"
            className="nav-link link-dark"
            onClick={() => {
              navigate('/admin/perritos');
            }}
          >
            <svg className="bi me-2" width={16} height={16}>
              <use xlinkHref="#speedometer2" />
            </svg>
            Historial de pacientes
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <svg className="bi me-2" width={16} height={16}>
              <use xlinkHref="#table" />
            </svg>
            Servicio 3
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <svg className="bi me-2" width={16} height={16}>
              <use xlinkHref="#grid" />
            </svg>
            Servicio 4
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <svg className="bi me-2" width={16} height={16}>
              <use xlinkHref="#people-circle" />
            </svg>
            Servicio 5
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
          id="dropdownUser2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://github.com/mdo.png"
            alt=""
            width={32}
            height={32}
            className="rounded-circle me-2"
          />
          <strong>mdo</strong>
        </a>
        <ul
          className="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser2"
        >
          <li>
            <a className="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBarAdmin;
