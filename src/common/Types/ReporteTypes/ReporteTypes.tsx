export type Reporte = {
  id: number;
  sintomas: string;
  ray_x: boolean;
  ray_x_results: string;
  ray_x_file?: File;
  blood_test: boolean;
  blood_test_results: string;
  blood_test_file?: File;
  general_results: string;
  medicine: string;
  perrito: number;
  hired_service: number;
};

export type ReporteRequest = {
  sintomas: string;
  ray_x: string;
  ray_x_results: string;
  ray_x_file?: File;
  blood_test: string;
  blood_test_results: string;
  blood_test_file?: File;
  general_results: string;
  medicine: string;
  perrito: string;
  hired_service: string;
};
