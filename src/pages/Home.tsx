import { useContext, useEffect } from 'react';
import Cardbutton2 from '../components/CardButton2/CardButton2';
import Navbar from '../components/Navbar/Navbar';
import { UserContext } from '../common/context/UserContext';
import Wrapper from './Wrapper';

const Home = () => {
  const { user } = useContext(UserContext);
  useEffect(() => {
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
  });
  return (
    <>
      <Wrapper>
        <div className="p-4">
          <h1>¡Bienvenido!</h1>
        </div>

        <div className=" row p-1 justify-content-center ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-3 pr-2 pl-2  py-1   justify-content-center">
            <Cardbutton2
              title={'Nuestros servicios'}
              description={
                'Vea todos los servicios que ofrecemos a precios modestos'
              }
              background={'assets/images/servicios_veterinaria.jpg'}
              height={'30rem'}
              ruta={'/servicios'}
            />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-3 pr-2 pl-2  py-1   justify-content-center">
            <Cardbutton2
              title={'Mis perritos'}
              description={
                'Aquí puede visualizar el misperritos de los perritos registrados'
              }
              background={'assets/images/mis_mascotas.jpg'}
              height={'30rem'}
              ruta={'/misperritos'}
            />
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 pr-2 pl-2  py-1   justify-content-center">
            <div className="col-12 pt-1 p-0  justify-content-center">
              <Cardbutton2
                title={'Registrar perrito'}
                description={'Registre a sus perritos en la plataforma'}
                background={
                  'assets/images/los-mejores-juegos-de-perritos-cachorros-por-mes-de-edad.png'
                }
                height={'100%'}
                textheight={'3rem'}
                ruta={'/registrar'}
              />
            </div>
            <br />
            <div className="col-12 pt-1 p-0  justify-content-center ">
              <Cardbutton2
                title={'Administracion'}
                description={'Opción habilitada solo para veterinarios'}
                background={'/assets/images/ilonka.jpg'}
                height={'100%'}
                textheight={'3rem'}
                ruta={'/admin/citas'}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};
export default Home;
