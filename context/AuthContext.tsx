import { createContext } from "react";

import {
  Actions,
  dataObject,
  LOGIN,
  LOGOUT,
  LOGINLOADING,
  LOGINNOLOADING,
  REGISTERLOADING,
  REGISTERNOLOADING
} from "../GlobalInterfaces/AuthContextInterfaces";
import { useReducer } from "react";
import { useContext } from "react";

interface Istate {
  loginLoading: boolean;
  registerLoading: boolean;
  data?: dataObject | null;
}

const DefaultState = createContext<Istate>({
  loginLoading: false,
  registerLoading: false
});

const DispatchActions = createContext(null);

const localReducer = (state: Istate, action: Actions): Istate => {
  switch (action.type) {
    case LOGINLOADING:
      return {
        ...state,
        loginLoading: true
      };

    case LOGINNOLOADING:
      return {
        ...state,
        loginLoading: false
      };

    case REGISTERLOADING:
      return {
        ...state,
        registerLoading: true
      };

    case REGISTERNOLOADING:
      return {
        ...state,
        registerLoading: false
      };

    case LOGIN:
      localStorage.setItem("Auth", JSON.stringify({ ...action.payload }));
      return {
        ...state,
        loginLoading: false,
        registerLoading: false,
        data: action.payload
      };

    case LOGOUT:
      localStorage.removeItem("Auth");
      return {
        ...state,
        data: null
      };

    default:
      return state;
  }
};

export const AuthContext = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(localReducer, {
    registerLoading: false,
    loginLoading: false,
    data: null
  });

  return (
    <DefaultState.Provider value={state}>
      <DispatchActions.Provider value={dispatch}>
        {children}
      </DispatchActions.Provider>
    </DefaultState.Provider>
  );
};

export const AuthData = () => useContext(DefaultState);
export const AuthActions = () => useContext(DispatchActions);
