import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { initialReporteData } from '../common/Types/ReporteTypes/ReporteConstants';
import { Reporte } from '../common/Types/ReporteTypes/ReporteTypes';
import { nullToString } from '../common/utils/isNull';
import Wrapper from './Wrapper';

const VerReporte = () => {
  const { cita } = useParams();
  const [reporte, setReporte] = useState<Reporte>(initialReporteData);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://3.216.133.207:8001/api/reportes/${cita}`
      )
        .then((data) => data.json())
        .then((data1) => {
          setReporte(data1);
        });
    })();
  }, []);
  console.log(reporte);
  let rutaRayosX: string | null = reporte.ray_x_file
    ? `http://3.216.133.207:8001/${reporte.ray_x_file}`
    : null;

  let bloodTest: string | null = reporte.blood_test_file
    ? `http://3.216.133.207:8001/${reporte.blood_test_file}`
    : null;
  return (
    <Wrapper>
      <h1>Reporte n°: {cita}</h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h6>Síntomas encontrados:</h6>
            <p>{reporte.sintomas ? reporte.sintomas : 'No especificado'}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h6>¿Se solicitó Rayos-X?</h6>
            <p>{reporte.ray_x ? 'Sí' : 'No'}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h6>Archivo de Rayos-X</h6>
            <p>
              {reporte.ray_x_file ? (
                <a
                  className="btn btn-secondary"
                  target="_blank"
                  href={nullToString(rutaRayosX)}
                  rel="noreferrer"
                >
                  Ver archivo
                </a>
              ) : (
                'No hay archivo'
              )}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h6>Rayos-X resultados:</h6>
            <p>{reporte.ray_x_results}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h6>¿Se solicitó prueba de sangre?</h6>
            <p>{reporte.blood_test ? 'Sí' : 'No'}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h6>Archivo de Prueba de Sangre</h6>
            <p>
              {reporte.blood_test_file ? (
                <a
                  className="btn btn-secondary"
                  target="_blank"
                  href={nullToString(rutaRayosX)}
                  rel="noreferrer"
                >
                  Ver archivo
                </a>
              ) : (
                'No hay archivo'
              )}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h6>Resultados de la prueba de sangre</h6>
            <p>{reporte.blood_test_results}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h6>Resultados finales del doctor:</h6>
            <p>{reporte.general_results}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h6>Recomendaciones (Recetas)</h6>
            <p>{reporte.medicine}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default VerReporte;
