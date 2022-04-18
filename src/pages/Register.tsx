import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { loginInputs, registerInputs } from '../common/constants';
import { NewUser } from '../common/Types/UserTypes/Usertypes';

import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import { UserContext } from '../common/context/UserContext';
import Wrapper from './Wrapper';

const defaultImg =
  '/assets/images/los-mejores-juegos-de-perritos-cachorros-por-mes-de-edad.png';
const backgroundCard = `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.3)), url(${defaultImg})`;
const Register = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      console.log('existe una sesion activa');
      navigate('/home');
    }
  });
  const handleSubmit = async (data: NewUser) => {
    if (data.cpassword === data.password) {
      await fetch(`http://44.203.226.109:8000/api/register/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((dataresponse) => {
          console.log(data);
          localStorage.setItem('token', dataresponse.token);
          setUser(dataresponse.user);
          localStorage.setItem(
            'user-data',
            JSON.stringify(dataresponse.user.data)
          );
          navigate('/home');
        });
    } else {
      console.log('las contraseñas no coinciden');
    }
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
                  Registrese en Perritos.com
                </Header>
                <div className="px-4">
                  <Form
                    inputs={registerInputs}
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
export default Register;
