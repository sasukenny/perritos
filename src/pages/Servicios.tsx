import { useEffect, useState } from 'react';
import { Services } from '../common/Types/ServiceTypes/ServiceTypes';
import SimpleCard from '../components/SimpleCard/SimpleCard';
import Wrapper from './Wrapper';

const Servicios = () => {
  const [servicios, setServicios] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch('http://44.203.226.109:8001/api/servicios')
        .then((data) => data.json())
        .then((data1) => {
          setServicios(data1);
        });
    })();
  }, []);
  console.log(servicios);
  return (
    <>
      <Wrapper>
        <h1>Nuestros Servicios </h1>
        <br />
        <div className="container ">
          <div className="d-flex p-4">
            {servicios.map((s: Services) => (
              <SimpleCard
                title={s.name}
                imagen={'http://44.203.226.109:8001' + s.picture}
                description={s.description}
                ruta={`${s.id}`}
                precio={s.price}
              ></SimpleCard>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default Servicios;
