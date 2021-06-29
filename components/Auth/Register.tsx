import { FormEvent, useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

import {
  RegisterWrapper,
  RegisterContain,
  RegisterStuff,
  RegisterTitle,
  RegisterClose,
  RegisterInput,
  RegisterButton,
  RegisterContainErrors,
  RegisterButtonLoading
} from "./RegisterStyled";
import { AuthActions, AuthData } from "../../context/AuthContext";
import {
  REGISTERLOADING,
  REGISTERNOLOADING,
  LOGIN
} from "../../GlobalInterfaces/AuthContextInterfaces";
import { register } from "../../API/Calls";
import {
  Iregister,
  IregisterErrors
} from "../../GlobalInterfaces/RegisterInterfaces";

interface IrProps {
  setRegisterWindow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register: React.FC<IrProps> = ({ setRegisterWindow }) => {
  const dispatch = AuthActions();
  const router = useRouter();

  const { registerLoading } = AuthData();

  const [registerData, setRegisterData] = useState<Iregister>({
    name: "",
    email: "",
    password: ""
  });

  const [registerErrors, setRegisterErrors] = useState<IregisterErrors>({});

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setRegisterWindow(false), (document.body.style.overflow = "auto");
    try {
      dispatch({ type: REGISTERLOADING });

      const { data } = await register(registerData);

      dispatch({ type: LOGIN, payload: data });

      router.push("/home");
    } catch (err) {
      dispatch({ type: REGISTERNOLOADING });
      setRegisterErrors(err.response.data);
    }
  };

  const isMobile = useMediaQuery({ query: "(max-width: 430px)" });

  // framer motion - PopUp

  const PopUp = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.35 } }
  };

  return (
    <RegisterWrapper variants={PopUp} initial="hidden" animate="visible">
      <RegisterContain
        onClick={(e: React.SyntheticEvent) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <RegisterStuff>
          {/* header of the form */}
          <RegisterTitle>
            {!isMobile ? (
              <h2>
                Registrarte
                <span> Es rápido y fácil.</span>
              </h2>
            ) : (
              <>
                <h2>
                  Registrarte <br /> <span> Es rápido y fácil.</span>
                </h2>
              </>
            )}

            <RegisterClose
              onClick={() => {
                setRegisterWindow(false),
                  (document.body.style.overflow = "auto");
              }}
            />
          </RegisterTitle>
          {/* break line */}
          <hr
            style={{
              opacity: 0.6,
              margin: "15px 0px",
              marginTop: "18px",
              width: "100%"
            }}
          />
          {/* Inputs */}
          <RegisterInput
            type="text"
            name="name"
            placeholder="Nombre"
            maxLength={42}
            value={registerData.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setRegisterData({
                ...registerData,
                [e.target.name]: e.target.value
              })
            }
          />
          <RegisterInput
            type="text"
            name="email"
            placeholder="Correo electrónico"
            maxLength={80}
            value={registerData.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setRegisterData({
                ...registerData,
                [e.target.name]: e.target.value
              })
            }
          />
          <RegisterInput
            type="password"
            name="password"
            placeholder="Contraseña"
            maxLength={55}
            value={registerData.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setRegisterData({
                ...registerData,
                [e.target.name]: e.target.value
              })
            }
          />
          {/* errors */}
          {Object.keys(registerErrors).length > 0 && (
            <>
              <RegisterContainErrors>
                {registerErrors.email && <li>{registerErrors.email}</li>}
                {registerErrors.validate && <li>{registerErrors.validate}</li>}
              </RegisterContainErrors>
            </>
          )}

          {/* button */}
          {registerData.email === "" ||
          registerData.name === "" ||
          registerData.password === "" ||
          registerData.email.split("").length < 5 ||
          registerData.name.split("").length < 3 ||
          registerData.password.split("").length < 5 ||
          registerLoading ? (
            <RegisterButtonLoading>Registrarte</RegisterButtonLoading>
          ) : (
            <RegisterButton
              whileHover={{ backgroundColor: "#088808" }}
              whileTap={{ opacity: 0.65 }}
              type="submit"
            >
              Registrarte
            </RegisterButton>
          )}
        </RegisterStuff>
      </RegisterContain>
    </RegisterWrapper>
  );
};

export default Register;
