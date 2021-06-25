export interface IauthErr {
  email?: string;
  validate?: string;
}

export interface IloginData {
  email: string | null;
  password: string | null;
}
