import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { serviciosContratados } from '../common/Types/ServiceTypes/ServiceTypes';
import SideBarPerrito from '../components/SideBarPerrito/SideBarPerrito';
import Wrapper from './Wrapper';

const PerritoDetalle = () => {
  const { perritoId } = useParams();
  const [servicios_contratados, setServicios_contratados] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://3.216.133.207:8001/api/perritosservicioscontratados/${perritoId}`
      )
        .then((data) => data.json())
        .then((data1) => {
          setServicios_contratados(data1);
        });
    })();
  }, []);

  function habilitarCrear(value: string, id: number) {
    if (value == 'solicitado') {
      return (
        <>
          <p>Aún no disponible</p>
        </>
      );
    } else {
      return (
        <>
          <button
            className="btn btn-primary btn-sm"
            type="button"
            onClick={() => {
              navigate(`${id}`);
            }}
          >
            Ver Reporte
          </button>
        </>
      );
    }
  }
  return (
    <>
      <Wrapper>
        <div>
          <h1>Dashboard del perrito </h1>

          <br />
        </div>
        <div className="row">
          <div className="col-3">
            <SideBarPerrito />
          </div>
          <div className="col-9 border">
            <div>
              <h3>Citas Programadas</h3>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No°</th>
                  <th scope="col">Paciente(perrito)</th>
                  <th scope="col">Servicio</th>
                  <th scope="col">Motivo</th>
                  <th scope="col">Status</th>
                  <th scope="col">Fecha de creacion</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {servicios_contratados.map(
                  (servicios_contratados: serviciosContratados) => {
                    return (
                      <tr>
                        <th scope="row">{servicios_contratados.id}</th>
                        <td>{servicios_contratados.perrito}</td>
                        <td>{servicios_contratados.service}</td>
                        <td>{servicios_contratados.symptoms_priori}</td>
                        <td>{servicios_contratados.status}</td>
                        <td>{servicios_contratados.date_created}</td>
                        <td>
                          {habilitarCrear(
                            servicios_contratados.status,
                            servicios_contratados.id
                          )}
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default PerritoDetalle;
