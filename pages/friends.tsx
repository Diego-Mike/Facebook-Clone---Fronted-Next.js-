import Head from "next/head";
import { useState, useEffect } from "react";
import Axios from "axios";
import useSWR from "swr";

import Private from "../components/Private/Private";
import LookForFriends from "../components/Friends/LookForFriends";
import { dataObject } from "../GlobalInterfaces/AuthContextInterfaces";
import { user, multipleUsers } from "../GlobalInterfaces/DataInterfaces";
import { GetStaticProps } from "next";
import { URL } from "../API/Calls";

const Friends = ({ initialAllUsers }) => {
  const [userAuth, setUserAuth] = useState({});

  useEffect(() => {
    const auth: dataObject = JSON.parse(localStorage.getItem("Auth"));
    setUserAuth(auth);
  }, []);

  // All users and user on screen

  const { data: AllUsers } = useSWR<user[]>(() => `${URL}/api/user`, {
    initialData: initialAllUsers
  });

  return (
    <>
      {userAuth ? (
        <>
          <Head>
            <title> Amigos | Facebook </title>
          </Head>
          {/* Hero component */}
          <LookForFriends AllUsers={AllUsers} UserOnScreen={userAuth} />
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

export const getStaticProps: GetStaticProps = async () => {
  const { data: initialAllUsers }: multipleUsers = await Axios.get(
    `${process.env.URL}/api/user`
  );

  return {
    props: { initialAllUsers },
    revalidate: 5
  };
};

export default Friends;
