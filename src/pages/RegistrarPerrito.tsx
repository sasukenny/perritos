import { useContext } from 'react';
import { PerritoRequest } from '../common/Types/PerritoTypes/PerritoTypes';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import { UserContext } from '../common/context/UserContext';
import Wrapper from './Wrapper';
import {
  PerritoRegisterInputs,
  PerritoRegisterSelects,
} from '../common/Types/PerritoTypes/PerritoConstants';
import { useNavigate } from 'react-router';

const RegistrarPerrito = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const handleSubmit = async (data: PerritoRequest) => {
    const form = new FormData();
    data.owner = user.id.toString();
    data.birth = '2022-09-01';
    console.log(data);
    for (const [key, value] of Object.entries(data)) {
      console.log('key ' + key);
      console.log('value ' + value);
      form.append(key, value);
    }
    console.log(form);
    await fetch(`http://44.203.226.109:8001/api/perritos`, {
      method: 'POST',
      body: form,
    });
    navigate('/home');
  };

  return (
    <>
      <Wrapper>
        <div className="p-4">
          <h1>Registro de perritos</h1>
        </div>
        <div className=" row p-1 justify-content-center ">
          <div style={{ maxWidth: '500px' }} className="card my-3 p-2 w-100">
            <Header variant="secondary" centered>
              Registrese en Perritos.com
            </Header>
            <div className="px-4">
              <Form
                inputs={PerritoRegisterInputs}
                textAreas={[]}
                selects={PerritoRegisterSelects}
                callback={handleSubmit}
                btnLabel="Ingresar"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default RegistrarPerrito;
