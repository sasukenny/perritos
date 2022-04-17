import React, { useRef, useState } from 'react';
import './CardButton2.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../Buttons/Button/Button';

type Props = {
  title: string;
  description?: string;
  buttonlabel?: string;
  background?: string;
  height?: string;
  textheight?: string;
  ruta?: string;
};
const defaultImg =
  '/assets/images/los-mejores-juegos-de-perritos-cachorros-por-mes-de-edad.png';
const defaultHeight = 'auto';
const defaultTextHeightInit = '1rem';
const defaultTextHeight = '9rem';
const defaultRuta = '/dashboard';

const Cardbutton2 = ({
  title,
  description,
  buttonlabel,
  background,
  height,
  textheight,
  ruta,
}: Props) => {
  const backgroundCardHover = `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.7)), url(${
    background ? background : defaultImg
  })`;
  const backgroundCard = `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.3)), url(${
    background ? background : defaultImg
  })`;

  /* const backgroundText =
    ' linear-gradient(rgba(159,77,21,0.5), rgba(159,77,21,0.15))'; */
  const backgroundText =
    'linear-gradient(0deg, rgba(1,10,23,0.7707457983193278) 0%, rgba(57,94,148,0.3337710084033614) 100%)';
  //estados de animacion
  const [backgroundCardstate, setbackgroundCardstate] =
    useState(backgroundCard);
  // const [pointer, setPointer] = useState('not pointer');
  const pointer = useRef('not pointer');
  /* const [heightValue, setHeightValue] = useState(
    height ? height : defaultHeight
  ); */
  const heightValue = useRef(height ? height : defaultHeight);
  // const [TextheightValue, setTextHeightValue] = useState(defaultTextHeightInit);
  const TextheightValue = useRef(defaultTextHeightInit);
  const [TextOpacity, setTextOpacity] = useState('0');

  const navigate = useNavigate();

  //funcionts for styles
  console.log('aaaaaa');
  return (
    <>
      <div
        //set states
        onMouseOver={() => {
          setbackgroundCardstate(backgroundCardHover);
          pointer.current = 'pointer';
          setTextOpacity('1');
          TextheightValue.current = textheight ? textheight : defaultTextHeight;
        }}
        onMouseLeave={() => {
          setbackgroundCardstate(backgroundCard);
          pointer.current = 'not pointer';
          setTextOpacity('0');
          TextheightValue.current = '0rem';
        }}
        //basic styles
        className="row  cardimg  align-items-end text-center m-1"
        style={{
          backgroundImage: backgroundCardstate,
          cursor: pointer.current,
          height: heightValue.current ? heightValue.current : defaultHeight,
          boxShadow: '5px 7px 5px 1px  #888888',
        }}
      >
        <div
          className="col-12 "
          style={{
            // display: 'none',
            background: backgroundText,
            marginLeft: '0.05rem',
            marginRight: '0.05rem',
          }}
        >
          <div className="col-12 pb-1 pt-4 px-4 border-bottom border-secondary">
            <h4>
              <strong>{title}</strong>
            </h4>
          </div>
          <div
            className="col-12 p-3"
            style={{
              display: 'flex',
              height: TextheightValue.current,
              opacity: TextOpacity,
              transition: '.5s',
              justifyContent: 'center',
            }}
          >
            <p>
              <strong>{description}</strong>
            </p>
          </div>
          <div className="row d-flex justify-content-center pb-4">
            <div className="col-12">
              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  className="btn btn-primary btn-sm"
                  type="button"
                  onClick={() => {
                    navigate(ruta ? ruta : defaultRuta);
                  }}
                >
                  Ir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cardbutton2;
