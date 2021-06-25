import Head from "next/head";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Private from "../components/Private/Private";
import LeftSideBar from "../components/Home/LeftSidebar/LeftSideBar";
import { dataObject } from "../GlobalInterfaces/AuthContextInterfaces";
import RightSideBar from "../components/Home/RightSideBar/RightSideBar";
import PublicationsHome from "../components/Home/Publications/PublicationsHome";

const Home = () => {
  const [userAuth, setUserAuth] = useState<dataObject>({});

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("Auth"));
    setUserAuth(auth);
  }, []);

  const cutLeftColumn = useMediaQuery({ query: "(max-width: 1100px)" });
  const cutRighttColumn = useMediaQuery({ query: "(max-width: 900px)" });

  return (
    <div>
      {userAuth ? (
        <>
          <Head>
            <title>Facebook</title>
          </Head>
          {/* Left sidebar */}

          {cutLeftColumn ? null : (
            <LeftSideBar UserId={userAuth !== undefined && userAuth} />
          )}

          {/* Publicaciones */}

          <PublicationsHome />

          {/* Right sidebar */}

          {cutRighttColumn ? null : (
            <RightSideBar UserId={userAuth !== undefined && userAuth} />
          )}
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
};

export default Home;
