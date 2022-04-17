export type TokenUser = {
  expiry: Date;
  token: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type UserData = {
  username: string;
  password: string;
};
export type User = {
  id: number;
  username: string;
  email: string;
};

export type NewUser = {
  username: string;
  email: string;
  password: string;
  cpassword: string;
};
