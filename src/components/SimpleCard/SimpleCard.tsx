import { useNavigate } from 'react-router';

type Props = {
  title?: string;
  description?: string;
  imagen?: string;
  ruta?: string;
  precio?: number;
};
const defaultRuta = '/home';
const SimpleCard = ({ title, imagen, description, ruta, precio }: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className="card m-2"
      style={{ width: '18rem' }}
      onClick={() => {
        navigate(ruta ? ruta : defaultRuta);
      }}
    >
      <img className="card-img-top" src={imagen} alt="Card image cap" />
      <div className="card-body">
        <h4>{title}</h4>
        <p className="card-text">{description}</p>
        <div>Precio: S/.{precio?.toFixed(2)}</div>
      </div>
    </div>
  );
};
export default SimpleCard;
