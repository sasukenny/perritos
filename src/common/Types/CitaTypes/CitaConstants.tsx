import { Cita } from './CitaTypes';

export const initialCitaData: Cita = {
  id: 0,
  date_created: 'string',
  status: 'string',
  symptoms_priori: 'string',
  perrito: 0,
  service: 0,
};

export const CitaTextAreas = [
  {
    name: 'symptoms_priori',
    type: 'textarea',
    label: 'Sintomas que presenta el paciente:',
    placeholder: 'Añadir resultados de los rayos X',
    required: false,
    validFeedback: '',
    invalidFeedback: 'De 1 a 1000 caracteres',
    maxLength: 1000,
    minLength: 1,
    rows: 3,
  },
];
