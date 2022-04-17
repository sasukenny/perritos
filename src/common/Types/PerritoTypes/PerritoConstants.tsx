export const PerritoRegisterInputs = [
  {
    name: 'name',
    type: 'text',
    label: 'Nombre*',
    placeholder: 'Escriba el nombre del perrito',
    required: true,
    validFeedback: '',
    invalidFeedback: 'Debe incluirse un nombre',
    maxLength: 30,
    minLength: 0,
  },
  {
    name: 'race',
    type: 'text',
    label: 'Raza',
    placeholder: 'Escriba la raza del perrito',
    required: false,
    validFeedback: '',
    invalidFeedback: 'Debe incluirse un nombre',
    maxLength: 30,
    minLength: 0,
  },
  {
    name: 'birth',
    type: 'datetime-local',
    label: 'Fecha de nacimiento',
    placeholder: 'Añadir una Fecha...',
    required: false,
    validFeedback: '',
    invalidFeedback: 'Debe incluirse la fecha de nacimiento',
    maxLength: 30,
    minLength: 8,
  },
  {
    name: 'picture',
    type: 'file',
    label: 'Documento',
    placeholder: 'Añadir un Documento...',
    required: false,
    validFeedback: '',
    invalidFeedback: '',
    maxLength: 30,
    minLength: 8,
  },
];
export const PerritoRegisterSelects = [
  {
    name: 'gender',
    label: 'Género*',
    placeholder: 'Seleccione el género',
    required: true,
    validFeedback: '',
    invalidFeedback: 'Debe tener un género',
    options: [
      {
        id: '0',
        name: 'Macho',
      },
      {
        id: '1',
        name: 'Hembra',
      },
    ],
  },
];