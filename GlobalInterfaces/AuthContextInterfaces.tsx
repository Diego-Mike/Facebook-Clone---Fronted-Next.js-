// Data

export type dataObject = {
  token?: string;
  user?: { id?: string; email: string; name: string };
};

// Options's Actions

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOGINLOADING = "LOADING";
export const LOGINNOLOADING = "NOLOADING";
export const REGISTERLOADING = "REGISTERLOADING";
export const REGISTERNOLOADING = "REGISTERNOLOADING";

interface IloginAuth {
  type: typeof LOGIN;
  payload: dataObject;
}

interface IloginLogout {
  type: typeof LOGOUT;
}

interface IloginLoading {
  type: typeof LOGINLOADING;
}

interface IloginNoLoading {
  type: typeof LOGINNOLOADING;
}

interface IregisterLoading {
  type: typeof REGISTERLOADING;
}

interface IregisterNoLoading {
  type: typeof REGISTERNOLOADING;
}

export type Actions =
  | IloginAuth
  | IloginLogout
  | IloginLoading
  | IloginNoLoading
  | IregisterLoading
  | IregisterNoLoading;
