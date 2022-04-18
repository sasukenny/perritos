import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { loginInputs } from '../common/constants';
import { LoginData } from '../common/Types/UserTypes/Usertypes';

import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import { UserContext } from '../common/context/UserContext';
import Wrapper from './Wrapper';

const defaultImg =
  '/assets/images/los-mejores-juegos-de-perritos-cachorros-por-mes-de-edad.png';
const backgroundCard = `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.3)), url(${defaultImg})`;
const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log('existe una sesion activa');
      navigate('/home');
    }
  });
  const handleSubmit = async (data: LoginData) => {
    await fetch(`http://3.216.133.207:8000/api/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((dataresponse) => {
        console.log(dataresponse);
        console.log(dataresponse.user);
        localStorage.setItem('token', dataresponse.token);
        setUser(dataresponse.user);
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user);
        navigate('/home');
      });
  };
  return (
    <>
      <Wrapper>
        <div className="row h-100">
          <div
            className="col-12 col-md-6 d-none d-md-flex align-items-center justify-content-center"
            style={{
              height: '600px',
              backgroundImage: backgroundCard,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          ></div>
          <div className="col-12 col-md-6 py-4 d-flex flex-column justify-content-center align-items-center">
            <div
              style={{ maxWidth: '600px' }}
              className="w-100 d-flex flex-column justify-content-center align-items-center"
            >
              <Header centered>Iniciar Sesión</Header>
              <div
                style={{ maxWidth: '500px' }}
                className="card my-3 p-2 w-100"
              >
                <Header variant="secondary" centered>
                  Bienvenido a Perritos.com
                </Header>
                <div className="px-4">
                  <Form
                    inputs={loginInputs}
                    textAreas={[]}
                    selects={[]}
                    callback={handleSubmit}
                    btnLabel="Ingresar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default Login;
