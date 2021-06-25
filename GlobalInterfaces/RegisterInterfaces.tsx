export interface Iregister {
  name: string;
  email: string;
  password: string;
}

export interface IregisterErrors {
  email?: string;
  validate?: string;
}
