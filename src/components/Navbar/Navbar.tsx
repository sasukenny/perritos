import './Navbar.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarLogin from './NavbarLogin';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  const [sessionActive, setSessionActive] = useState(false);
  useEffect(() => {
    (() => {
      if (localStorage.getItem('token') !== '') {
        setSessionActive(true);
        console.log('start');
      }
      console.log(sessionActive);
    })();
  }, []);
  const showButtons = () => {
    return <NavbarLogin />;
  };
  const showUser = () => {
    return <NavbarMenu />;
  };
  return (
    <>
      <header className="navbar navbar-expand-md navbar-dark bg-primary">
        <div className="container-fluid  ">
          <Link className="navbar-brand" to="/home">
            Perritos.com
          </Link>
          {localStorage.getItem('token') ? showUser() : showButtons()}
        </div>
      </header>
    </>
  );
};

export default Navbar;
