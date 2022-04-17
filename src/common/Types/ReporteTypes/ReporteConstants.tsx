import { Reporte } from './ReporteTypes';

export const initialReporteData: Reporte = {
  id: 0,
  sintomas: '0',
  ray_x: true,
  ray_x_results: 'string',
  blood_test: false,
  blood_test_results: 'string',
  general_results: 'string',
  medicine: 'string',
  perrito: 0,
  hired_service: 0,
};

export const ReporteRegisterInputs = [
  {
    name: 'sintomas',
    type: 'textArea',
    label: 'Síntomas*',
    placeholder: 'Escriba los sintomas',
    required: true,
    validFeedback: '',
    invalidFeedback: 'Debe incluirse un nombre',
    maxLength: 1000,
    minLength: 0,
  },
  {
    name: 'ray_x_file',
    type: 'file',
    label: 'Archivo de rayos x',
    placeholder: 'Ingrese el archivo de Rayos x',
    required: false,
    validFeedback: '',
    invalidFeedback: 'Debe incluirse un nombre',
    maxLength: 30,
    minLength: 0,
  },
  {
    name: 'blood_test_file',
    type: 'file',
    label: 'Archivo de Prueba de sangre',
    placeholder: 'Ingrese el archivo de prueba de sangre',
    required: false,
    validFeedback: '',
    invalidFeedback: 'Debe incluirse un nombre',
    maxLength: 30,
    minLength: 0,
  },
];

export const ReporteTextAreas = [
  {
    name: 'ray_x_results',
    type: 'textarea',
    label: 'Resultados de rayos X',
    placeholder: 'Añadir resultados de los rayos X',
    required: false,
    validFeedback: '',
    invalidFeedback: 'De 1 a 1000 caracteres',
    maxLength: 1000,
    minLength: 1,
    rows: 3,
  },
  {
    name: 'blood_test_results',
    type: 'textarea',
    label: 'Resultados de la prueba de sangre',
    placeholder: 'Añadir resultados de la prueba de sangre',
    required: false,
    validFeedback: '',
    invalidFeedback: 'De 1 a 1000 caracteres',
    maxLength: 1000,
    minLength: 1,
    rows: 3,
  },
  {
    name: 'general_results',
    type: 'textarea',
    label: 'Resultados generales',
    placeholder: 'Añadir resultados finales',
    required: true,
    validFeedback: '',
    invalidFeedback: 'De 1 a 1000 caracteres',
    maxLength: 1000,
    minLength: 1,
    rows: 3,
  },
  {
    name: 'medicine',
    type: 'textarea',
    label: 'Recomendaciones y prescripciones',
    placeholder: 'Añadir resultados finales',
    required: true,
    validFeedback: '',
    invalidFeedback: 'De 1 a 1000 caracteres',
    maxLength: 1000,
    minLength: 1,
    rows: 3,
  },
];
export const ReporteSelects = [
  {
    name: 'ray_x',
    label: '¿Se requirió rayos X?',
    placeholder: 'Seleccione el día',
    required: true,
    validFeedback: '',
    invalidFeedback: 'Todo curso debe tener un día seleccionado',
    options: [
      {
        id: '1',
        name: 'Si',
      },
      {
        id: '0',
        name: 'No',
      },
    ],
  },
  {
    name: 'blood_test',
    label: '¿Se requirió prueba de sangre',
    placeholder: 'Seleccione el día',
    required: true,
    validFeedback: '',
    invalidFeedback: 'Todo curso debe tener un día seleccionado',
    options: [
      {
        id: '1',
        name: 'Si',
      },
      {
        id: '0',
        name: 'No',
      },
    ],
  },
];
