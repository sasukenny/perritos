import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { initialServiceData } from '../common/Types/ServiceTypes/ServiceConstants';
import { Services } from '../common/Types/ServiceTypes/ServiceTypes';
import SideBar from '../components/SideBar/SideBar';
import SimpleCard from '../components/SimpleCard/SimpleCard';
import Wrapper from './Wrapper';

const ServicioDetalles = () => {
  const { servicioId } = useParams();
  const navigate = useNavigate();
  const [servicio, setServicios] = useState<Services>(initialServiceData);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://3.216.133.207:8001/api/servicios/${servicioId}`
      )
        .then((data) => data.json())
        .then((data1) => {
          setServicios(data1);
        });
    })();
  }, []);
  console.log(servicio);
  return (
    <>
      <Wrapper>
        <div>
          <h1>Nuestros Servicios {servicioId}</h1>

          <br />
        </div>
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9 border">
            <div className="row p-4">
              <div className="col-7">
                <h2>{servicio.name}</h2>
                <p>{servicio.description}</p>
              </div>
              <div className="col-5">
                <img
                  className="card-img-top"
                  src={'http://3.216.133.207:8001' + servicio.picture}
                  alt="Card image cap"
                />
                <div>
                  <p>Texto adicional</p>
                </div>
                <div>
                  <h4>Precio: </h4>
                  <p>s/.{servicio.price.toFixed(2)}</p>
                </div>
                <div>
                  <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    onClick={() => {
                      navigate(`agendar`);
                    }}
                  >
                    Agendar cita
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default ServicioDetalles;
