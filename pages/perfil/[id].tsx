import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Axios from "axios";
import useSWR from "swr";

import {
  IuserData,
  multipleUsers,
  thePublication,
  user,
  Ipublication
} from "../../GlobalInterfaces/DataInterfaces";
import PerfilPhotos from "../../components/Perfil/PerfilPhotos";
import Private from "../../components/Private/Private";
import PerfilOptions from "../../components/Perfil/PerfilOptions";
import PerfilPublications from "../../components/Perfil/PerfilPublications";
import { dataObject } from "../../GlobalInterfaces/AuthContextInterfaces";
import PerfilFriends from "../../components/Perfil/PerfilFriends";
import { URL } from "../../API/Calls";

const Perfil = ({ data: urlIdData, allPubs }) => {
  const [userAuth, setUserAuth] = useState<dataObject>({});
  const [updatePerfil, setUpdatePerfil] = useState<boolean>(false);
  const [watchPubs, setWatchPubs] = useState<boolean>(true);
  const [watchFriends, setWatchFriends] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("Auth"));
    setUserAuth(auth);
  }, []);

  const { data } = useSWR<user>(`${URL}/api/user/singleU/${router.query.id}`, {
    initialData: urlIdData
  });

  const { data: Publications } = useSWR<Ipublication[]>(
    `${URL}/api/publication`,
    {
      initialData: allPubs,
      revalidateOnFocus: false
    }
  );

  return (
    <>
      {userAuth && data && router.isFallback !== true ? (
        <>
          <Head>
            <title> {data.name} | Facebook </title>
          </Head>
          {/* Banner and perfil photo */}
          <PerfilPhotos userPerfil={data} />
          {/* Watch publications - friends or update perfil - add people as friend */}
          <PerfilOptions
            updatePerfil={updatePerfil}
            setUpdatePerfil={setUpdatePerfil}
            perfilId={data}
            setWatchPubs={setWatchPubs}
            setWatchFriends={setWatchFriends}
            watchPubs={watchPubs}
            watchFriends={watchFriends}
          />
          {/* Display option selected */}
          {watchPubs && (
            <PerfilPublications
              Publications={Publications}
              UserId={userAuth && userAuth.user && userAuth.user.id}
              userPerfil={data}
              setWatchPubs={setWatchPubs}
              setWatchFriends={setWatchFriends}
            />
          )}
          {watchFriends && (
            <PerfilFriends
              Homies={data.friends.filter(({ friend }) => friend === true)}
            />
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
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data }: multipleUsers = await Axios.get(
    `${process.env.URL}/api/user`
  );

  const paths = data.map(path => {
    return { params: { id: path._id } };
  });

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data }: IuserData = await Axios.get(
    `${process.env.URL}/api/user/singleU/${params.id}`
  );

  const { data: allPubs } = await Axios.get(
    `${process.env.URL}/api/publication`
  );

  return {
    props: { data, allPubs },
    revalidate: 3
  };
};

export default Perfil;
