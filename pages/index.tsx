import Head from "next/head";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import {
  AuthWrapper,
  AuthPresentation,
  AuthContainPresentation
} from "../styled-pages/indexStyled";
import Auth from "../components/Auth/Auth";
import Private from "../components/Private/Private";

export default function Home() {
  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("Auth"));
    setUserAuth(auth);
  }, []);

  const isTablet = useMediaQuery({ query: "(max-width: 1008px)" });

  // framer motion - slide

  const Slide = {
    hidden: { x: -70, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.65 } }
  };

  const SlideFromTop = {
    hidden: { y: -200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: 0.8, duration: 0.6 } }
  };

  return (
    <div>
      {!userAuth ? (
        <>
          <Head>
            <title>Facebook - Inicia sesión o regístrate</title>
          </Head>
          <AuthWrapper>
            {/* Presentation - Text */}
            <AuthPresentation>
              <AuthContainPresentation
                variants={isTablet ? SlideFromTop : Slide}
                initial="hidden"
                animate="visible"
              >
                <img src="/Facebook-Header.svg" alt="Facebook Logo" />
                <p>
                  Facebook te ayuda a comunicarte y <br /> compartir con las
                  personas que forman <br /> parte de tu vida.
                </p>
              </AuthContainPresentation>
            </AuthPresentation>
            {/* Login / Register */}
            <Auth />
          </AuthWrapper>
        </>
      ) : (
        <>
          <Head>
            <title>Loading...</title>
          </Head>
          <Private />
        </>
      )}
    </div>
  );
}
