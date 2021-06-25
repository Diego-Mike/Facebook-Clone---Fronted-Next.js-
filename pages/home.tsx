import Head from "next/head";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import useSWR from "swr";
import axios from "axios";
import { GetStaticProps } from "next";

import Private from "../components/Private/Private";
import LeftSideBar from "../components/Home/LeftSidebar/LeftSideBar";
import { dataObject } from "../GlobalInterfaces/AuthContextInterfaces";
import { Ipublication } from "../GlobalInterfaces/DataInterfaces";
import RightSideBar from "../components/Home/RightSideBar/RightSideBar";
import PublicationsHome from "../components/Home/Publications/PublicationsHome";
import { URL } from "../API/Calls";

const Home = ({ data: allPubs }) => {
  const [userAuth, setUserAuth] = useState<dataObject>({});

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("Auth"));
    setUserAuth(auth);
  }, []);

  // All pubs

  const { data: Publications } = useSWR<Ipublication[]>(
    `${URL}/api/publication`,
    {
      initialData: allPubs,
      revalidateOnFocus: false
    }
  );

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

          <PublicationsHome Publications={Publications} />

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

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(`${process.env.URL}/api/publication`);

  return {
    props: { data }
  };
};

export default Home;
