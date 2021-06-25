import React, { FC } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

import {
  FriendsHero,
  LookFriendsTitle,
  LookFriendsWrapper,
  LookFriendCard,
  LookFriendCardImg,
  LookFriendCardText
} from "./LookForFriendsStyled";
import { dataObject } from "../../GlobalInterfaces/AuthContextInterfaces";
import { user } from "../../GlobalInterfaces/DataInterfaces";
import DefaultUser from "../../public/defaultUser.svg";

interface ILookForFriends {
  UserOnScreen: dataObject;
  AllUsers: user[];
}

const LookForFriends: FC<ILookForFriends> = ({ UserOnScreen, AllUsers }) => {
  const router = useRouter();

  const Me: user =
    UserOnScreen &&
    UserOnScreen.user &&
    AllUsers.find(({ _id }) => _id === UserOnScreen.user.id);

  const LookFriends: user[] =
    Me && Me.friends.length > 0
      ? AllUsers.filter(({ _id }) => {
          return (
            Me.friends
              .filter(({ friend }) => friend === true)
              .findIndex(friend => friend.identifier === _id) === -1
          );
        }).filter(excludeMe => excludeMe._id !== Me._id)
      : Me && AllUsers.filter(excludeMe => excludeMe._id !== Me._id);

  return (
    <FriendsHero>
      <LookFriendsTitle>
        <h2>Personas que quizá conozcas</h2>
      </LookFriendsTitle>
      <LookFriendsWrapper>
        {LookFriends &&
          LookFriends.map(({ name, perfil, _id }) => {
            return (
              <LookFriendCard key={_id}>
                <LookFriendCardImg
                  onClick={() => router.push(`/perfil/${_id}`)}
                >
                  {perfil ? <img src={perfil} alt="" /> : <DefaultUser />}
                </LookFriendCardImg>
                <LookFriendCardText>
                  <motion.h3
                    whileHover={{ textDecoration: "underline" }}
                    onClick={() => router.push(`/perfil/${_id}`)}
                  >
                    {name}
                  </motion.h3>
                  <motion.button
                    whileTap={{ scale: 0.92 }}
                    onClick={() => router.push(`/perfil/${_id}`)}
                  >
                    Ver Perfil
                  </motion.button>
                </LookFriendCardText>
              </LookFriendCard>
            );
          })}
      </LookFriendsWrapper>
    </FriendsHero>
  );
};

export default LookForFriends;
