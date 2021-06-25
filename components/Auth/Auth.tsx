import { FormEvent, useState } from "react";
import { ChangeEvent } from "react";
import { useRouter } from "next/router";

import {
  LoginWrapper,
  LoginForm,
  LoginContain,
  LoginButton,
  LoginCreate,
  LoginEmpty
} from "./AuthStyled";
import { login } from "../../API/Calls";
import { IloginData, IauthErr } from "../../GlobalInterfaces/AuthInterfaces";
import { AuthActions, AuthData } from "../../context/AuthContext";
import {
  LOGIN,
  LOGINLOADING,
  LOGINNOLOADING
} from "../../GlobalInterfaces/AuthContextInterfaces";
import Register from "./Register";

const Auth = () => {
  const router = useRouter();

  const dispatch = AuthActions();

  const { loginLoading } = AuthData();

  const [loginData, setLoginData] = useState<IloginData>({
    email: "",
    password: ""
  });
  const [authErr, setAuthErr] = useState<IauthErr>({});

  const [registerWindow, setRegisterWindow] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      dispatch({ type: LOGINLOADING });

      const { data } = await login(loginData);

      dispatch({ type: LOGIN, payload: data });

      setLoginData({ email: "", password: "" });

      router.push("/home");
    } catch (err) {
      setAuthErr(err.response.data);
      dispatch({ type: LOGINNOLOADING });
    }
  };

  return (
    <>
      <LoginWrapper>
        <LoginForm onSubmit={handleSubmit}>
          <LoginContain>
            {Object.keys(authErr).length > 0 ? (
              <>
                <input
                  style={{ border: "1.3px solid #f02849" }}
                  name="email"
                  type="text"
                  placeholder="Correo electrónico"
                  value={loginData.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setLoginData({
                      ...loginData,
                      [e.target.name]: e.target.value
                    })
                  }
                />
                <input
                  style={{ border: "1.3px solid #f02849" }}
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  value={loginData.password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setLoginData({
                      ...loginData,
                      [e.target.name]: e.target.value
                    })
                  }
                />
              </>
            ) : (
              <>
                <input
                  name="email"
                  type="text"
                  placeholder="Correo electrónico"
                  value={loginData.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setLoginData({
                      ...loginData,
                      [e.target.name]: e.target.value
                    })
                  }
                />
                <input
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  value={loginData.password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setLoginData({
                      ...loginData,
                      [e.target.name]: e.target.value
                    })
                  }
                />
              </>
            )}

            {/* Check if email and password are not null */}
            {loginData.email === "" ||
            loginData.password === "" ||
            loginLoading ? (
              <LoginEmpty>Iniciar Sesión</LoginEmpty>
            ) : (
              <LoginButton
                whileHover={{ backgroundColor: "#1261c9" }}
                whileTap={{ opacity: 0.5 }}
                type="submit"
              >
                Iniciar Sesión
              </LoginButton>
            )}

            <hr
              style={{
                width: "100%",
                marginTop: "2.5rem",
                opacity: 0.55
              }}
            />
            <LoginCreate
              whileHover={{ backgroundColor: "#2e9b18" }}
              whileTap={{ opacity: 0.5 }}
              onClick={() => {
                setRegisterWindow(true);
                document.body.style.overflow = "hidden";
              }}
            >
              Crear cuenta nueva
            </LoginCreate>
          </LoginContain>
        </LoginForm>
      </LoginWrapper>
      {registerWindow && <Register setRegisterWindow={setRegisterWindow} />}
    </>
  );
};

export default Auth;
