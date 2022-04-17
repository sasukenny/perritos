import { useContext, useEffect, useState } from 'react';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import { UserContext } from '../common/context/UserContext';
import Wrapper from './Wrapper';
import { useNavigate, useParams } from 'react-router';
import {
  initialReporteData,
  ReporteRegisterInputs,
  ReporteSelects,
  ReporteTextAreas,
} from '../common/Types/ReporteTypes/ReporteConstants';
import {
  Reporte,
  ReporteRequest,
} from '../common/Types/ReporteTypes/ReporteTypes';
import { Cita } from '../common/Types/CitaTypes/CitaTypes';
import { initialCitaData } from '../common/Types/CitaTypes/CitaConstants';

const RegistrarReporte = () => {
  const [servicios_contratados, setServicios_contratados] =
    useState<Cita>(initialCitaData);
  const { user } = useContext(UserContext);
  const { citaId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://127.0.0.1:8001/api/servicioscontratados/${citaId}`
      )
        .then((data) => data.json())
        .then((data1) => {
          setServicios_contratados(data1);
        });
    })();
  }, []);
  console.log(servicios_contratados);
  const handleSubmit = async (data: ReporteRequest) => {
    const form = new FormData();
    data.perrito = servicios_contratados.perrito.toString();
    data.hired_service = servicios_contratados.id.toString();
    for (const [key, value] of Object.entries(data)) {
      form.append(key, value);
    }
    console.log(form);
    await fetch(`http://127.0.0.1:8001/api/reportes`, {
      method: 'POST',
      body: form,
    });
    let cambiodeData = servicios_contratados;
    cambiodeData.status = 'realizado';
    await fetch(`http://127.0.0.1:8001/api/servicioscontratados/${citaId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cambiodeData),
    });
    navigate('/home');
  };

  return (
    <>
      <Wrapper>
        <div className="p-4">
          <h1>Crear Reporte</h1>
        </div>
        <div className=" row p-1 justify-content-center ">
          <div style={{ maxWidth: '500px' }} className="card my-3 p-2 w-100">
            <Header variant="secondary" centered>
              Registrese en Perritos.com
            </Header>
            <div className="px-4">
              <Form
                inputs={ReporteRegisterInputs}
                textAreas={ReporteTextAreas}
                selects={ReporteSelects}
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
export default RegistrarReporte;
