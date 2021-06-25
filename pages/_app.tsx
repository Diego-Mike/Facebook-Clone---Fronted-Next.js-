import "../styles/globals.css";
import { useEffect } from "react";
import { SWRConfig } from "swr";

import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar/Navbar";
import axios from "axios";

function MyApp({ Component, pageProps }) {
  // redirect if already log in/haven't logged in

  const router = useRouter();

  const routes: string[] = ["/home", "/friends", `/perfil/[id]`];

  const isValidRoute = routes.includes(router.pathname);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("Auth"));
    if (auth && !isValidRoute) router.push("/home");
    else if (!auth && isValidRoute) router.push("/");
  }, [router.pathname]);

  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => axios.get(url).then(r => r.data)
      }}
    >
      <AuthContext>
        {isValidRoute && <Navbar />}
        <Component {...pageProps} />
      </AuthContext>
    </SWRConfig>
  );
}

export default MyApp;
