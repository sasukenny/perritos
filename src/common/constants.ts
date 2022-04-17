export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const registerInputs = [
  {
    name: 'username',
    type: 'text',
    label: 'Username',
    placeholder: 'Ingrese un nombre de usuario',
    required: true,
    validFeedback: '',
    invalidFeedback: 'Los nombres son obligatorios. Máximo 50 caracteres',
    maxLength: 50,
    minLength: 1,
  },
  {
    name: 'email',
    type: 'email',
    label: 'Correo',
    placeholder: 'Ingrese su correo...',
    required: true,
    validFeedback: '',
    invalidFeedback:
      'El correo es obligatorio y debe poseer el formato de email. Máximo 50 caracteres',
    maxLength: 50,
    minLength: 1,
  },
  {
    name: 'password',
    type: 'password',
    label: 'Contraseña',
    placeholder: 'Ingrese su contraseña...',
    required: true,
    validFeedback: '',
    invalidFeedback: 'La contraseña es obligatoria. De 8 a 30 caracteres',
    maxLength: 30,
    minLength: 8,
  },
  {
    name: 'cpassword',
    type: 'password',
    label: 'Confirmar contraseña',
    placeholder: 'Vuelva a ingresar su contraseña...',
    required: true,
    validFeedback: '',
    invalidFeedback: 'La contraseña es obligatoria. De 8 a 30 caracteres',
    maxLength: 30,
    minLength: 8,
  },
];

export const loginInputs = [
  {
    name: 'username',
    type: 'username',
    label: 'Correo',
    placeholder: 'Ingrese su correo...',
    required: true,
    validFeedback: '',
    invalidFeedback:
      'El correo es obligatorio y debe poseer el formato de email. Máximo 50 caracteres',
    maxLength: 50,
    minLength: 1,
  },
  {
    name: 'password',
    type: 'password',
    label: 'Contraseña',
    placeholder: 'Ingrese su contraseña...',
    required: true,
    validFeedback: '',
    invalidFeedback: 'La contraseña es obligatoria. De 1 a 30 caracteres',
    maxLength: 30,
    minLength: 1,
  },
];

export const courseCreationSelects = [
  {
    name: 'day',
    label: 'Día',
    placeholder: 'Seleccione el día',
    required: true,
    validFeedback: '',
    invalidFeedback: 'Todo curso debe tener un día seleccionado',
    options: [
      {
        id: '1',
        name: 'Lunes',
      },
      {
        id: '2',
        name: 'Martes',
      },
      {
        id: '3',
        name: 'Miércoles',
      },
      {
        id: '4',
        name: 'Jueves',
      },
      {
        id: '5',
        name: 'Viernes',
      },
      {
        id: '6',
        name: 'Sábado',
      },
      {
        id: '7',
        name: 'Domingo',
      },
    ],
  },
];

export const MaterialCreationTextAreas = [
  {
    name: 'description',
    type: 'textarea',
    label: 'Descripción',
    placeholder: 'Añadir descripción del material...',
    required: true,
    validFeedback: '',
    invalidFeedback: 'De 1 a 250 caracteres',
    maxLength: 250,
    minLength: 1,
    rows: 3,
  },
];
