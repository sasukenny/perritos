export type Services = {
  id: number;
  name: string;
  picture?: File;
  description: string;
  price: number;
};

export type serviciosContratados = {
  id: number;
  date_created: string;
  status: string;
  symptoms_priori: string;
  perrito: number;
  service: number;
};
