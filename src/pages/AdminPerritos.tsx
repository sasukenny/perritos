import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Perrito } from '../common/Types/PerritoTypes/PerritoTypes';
import SideBarAdmin from '../components/SideBarAdmin/SideBarAdmin';
import Wrapper from './Wrapper';

const AdminPerritos = () => {
  const [perritos, setPerritos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://44.203.226.109:8001/api/perritos`)
        .then((data) => data.json())
        .then((data1) => {
          setPerritos(data1);
        });
    })();
  }, []);
  return (
    <>
      <Wrapper>
        <div>
          <h1>Consola de Admin </h1>
          <br />
        </div>
        <div className="row">
          <div className="col-3">
            <SideBarAdmin />
          </div>
          <div className="col-9 border">
            <div>
              <h3>Historial de Perritos</h3>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">PacienteId</th>
                  <th scope="col">Paciente</th>
                  <th scope="col">Propietario</th>
                  <th scope="col">Imagen</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {perritos.map((perrito: Perrito) => {
                  return (
                    <tr>
                      <th scope="row">{perrito.id}</th>
                      <td>{perrito.name}</td>
                      <td>{perrito.owner}</td>
                      <td>
                        <img
                          src={'http://44.203.226.109:8001' + perrito.picture}
                          alt="Card image cap"
                          width="100px"
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-primary btn-sm"
                          type="button"
                          onClick={() => {}}
                        >
                          Ver historial
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default AdminPerritos;
