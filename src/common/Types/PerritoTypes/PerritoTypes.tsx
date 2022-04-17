export type Perrito = {
  id: number;
  name: string;
  picture: File;
  birth: Date;
  gender: string;
  race: string;
  owner?: number;
};

export type PerritoRequest = {
  name: string;
  picture: File;
  birth: string;
  gender: string;
  race: string;
  owner?: string;
};
