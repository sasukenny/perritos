import { Link } from 'react-router-dom';
import Button from '../Buttons/Button/Button';
import './Card.scss';

type Props = {
  id?: number;
  image?: string;
  name?: string;
};

const defaultImg =
  'https://vilmanunez.com/wp-content/uploads/2016/03/herramientas-y-recursos-para-crear-curso-online.png';

const CardPerrito = ({ id = 0, image, name }: Props) => {
  console.log(image);
  return (
    <div className="col-md-4 col-lg-4 col-xl-3 px-auto py-1" key={id}>
      <div className="card">
        <div className="card-body ">
          <div className=" ">
            <img
              src={image}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = defaultImg;
              }}
              className="card-img-top"
              alt=""
            />
          </div>
          <div className="row">
            <h5 className="card-title mt-2">{name}</h5>
          </div>

          <div className="row pt-2">
            <div className=" d-flex justify-content-center">
              <Link to={`${id}/dashboard`}>
                <Button className="mx-1" color="primary" elevated>
                  Ver Historial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPerrito;
