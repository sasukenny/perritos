import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../common/context/UserContext';
import { Perrito } from '../common/Types/PerritoTypes/PerritoTypes';
import CardPerrito from '../components/Card/Card';
import Wrapper from './Wrapper';

const MisPerritos = () => {
  const [perritos, setPerritos] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://127.0.0.1:8001/api/perritos/${user.id}`
      )
        .then((data) => data.json())
        .then((data1) => {
          setPerritos(data1);
        });
    })();
  }, []);
  console.log(perritos);
  return (
    <>
      <Wrapper>
        <div className="p-4">
          <h1>Mis perritos</h1>
        </div>
        <div className=" row p-1 justify-content-center ">
          {perritos.map((p: Perrito) => (
            <CardPerrito
              name={p.name}
              id={p.id}
              image={'http://127.0.0.1:8001' + p.picture}
            />
          ))}
        </div>
      </Wrapper>
    </>
  );
};
export default MisPerritos;
