import { useContext, useEffect, useState } from 'react';

import { useParams } from 'react-router';
import { UserContext } from '../common/context/UserContext';
import { CitaTextAreas } from '../common/Types/CitaTypes/CitaConstants';
import { Cita } from '../common/Types/CitaTypes/CitaTypes';
import { Perrito } from '../common/Types/PerritoTypes/PerritoTypes';
import { Services } from '../common/Types/ServiceTypes/ServiceTypes';
import Form from '../components/Form/Form';
import Header from '../components/Header/Header';
import Wrapper from './Wrapper';

const AgendarCita = () => {
  const { servicioId } = useParams();
  const { perritoId } = useParams();
  const [mascotas, setMascotas] = useState([]);
  const [servicios, setServicios] = useState([]);
  const { user } = useContext(UserContext);
  let selectMascotas = [];
  let selectServicios = [];
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://127.0.0.1:8001/api/perritos/${user.id}`
      )
        .then((data) => data.json())
        .then((data1) => {
          setMascotas(data1);
        });
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://127.0.0.1:8001/api/servicios`)
        .then((data) => data.json())
        .then((data1) => {
          setServicios(data1);
        });
    })();
  }, []);
  console.log(mascotas);
  selectMascotas = mascotas.map((perrito: Perrito) => {
    return { id: perrito.id.toString(), name: perrito.name };
  });
  selectServicios = servicios.map((servicio: Services) => {
    return { id: servicio.id.toString(), name: servicio.name };
  });
  console.log(selectServicios);

  const handleSubmit = async (data: Cita) => {
    data.date_created = '2022-09-01';
    data.status = 'solicitado';
    await fetch(`http://127.0.0.1:8001/api/servicioscontratados`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  };
  let MascotasSelects = [
    {
      name: 'perrito',
      label: 'Perrito elegido',
      placeholder: 'Seleccione a su mascota',
      required: true,
      validFeedback: '',
      invalidFeedback: 'Todo curso debe tener un día seleccionado',
      options: selectMascotas,
    },
    {
      name: 'service',
      label: 'Servicio elegido',
      placeholder: 'Seleccione el servicio',
      required: true,
      validFeedback: '',
      invalidFeedback: 'Todo curso debe tener un día seleccionado',
      options: selectServicios,
    },
  ];
  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className=" row p-1 justify-content-center ">
                <div
                  style={{ maxWidth: '500px' }}
                  className="card my-3 p-2 w-100"
                >
                  <Header variant="secondary" centered>
                    Agendar una cita en el servicio {servicioId}
                  </Header>
                  <div className="px-4">
                    <Form
                      inputs={[]}
                      textAreas={CitaTextAreas}
                      selects={MascotasSelects}
                      callback={handleSubmit}
                      btnLabel="Agendar"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div>formulario del perrito</div>
              <div>formulario del usuario</div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default AgendarCita;
