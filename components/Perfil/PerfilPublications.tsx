import React, { FC, SetStateAction, Dispatch } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import {
  PublicationsFriendsHero,
  FewFriendsWrapper,
  UserPublications,
  FewFriendsTitle,
  FewFriendsPhotos,
  ContainFewFriendsPhoto,
  FriendPhoto,
  HoverFriendPhoto
} from "../../styled-pages/PerfilStyled";
import CreatePubs from "../Pubs/CreatePubs/CreatePubs";
import Pubs from "../Pubs/Pubs/Pubs";
import { Ipublication, user } from "../../GlobalInterfaces/DataInterfaces";
import {} from "react";

interface IPerfilPubs {
  UserId: string;
  Publications: Ipublication[];
  userPerfil: user;
  setWatchPubs: Dispatch<SetStateAction<boolean>>;
  setWatchFriends: Dispatch<SetStateAction<boolean>>;
}

const PerfilPublications: FC<IPerfilPubs> = ({
  UserId,
  Publications,
  userPerfil,
  setWatchFriends,
  setWatchPubs
}) => {
  const router = useRouter();

  //   Watch friends

  const watchTheHomies = (): void => {
    setWatchFriends(true);
    setWatchPubs(false);
  };

  return (
    <PublicationsFriendsHero>
      {UserId && Publications ? (
        <>
          {/* Few friends */}
          <FewFriendsWrapper>
            <FewFriendsTitle>
              <h2>
                Amig@s <br />
                <span>
                  {
                    userPerfil.friends.filter(({ friend }) => friend === true)
                      .length
                  }
                  &nbsp;amig@s
                </span>
              </h2>
              <motion.p
                whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.06)" }}
                whileTap={{ backgroundColor: "rgba(0, 0, 0, 0.16)" }}
                onClick={watchTheHomies}
              >
                {userPerfil &&
                userPerfil.friends.filter(({ friend }) => friend === true)
                  .length > 0
                  ? "Ver todos los amigos"
                  : null}
              </motion.p>
            </FewFriendsTitle>
            <FewFriendsPhotos>
              {userPerfil.friends
                .filter(({ friend, perfil }) => friend === true && perfil)
                .splice(0, 9)
                .map(({ perfil, name, _id, identifier }) => {
                  return (
                    <ContainFewFriendsPhoto
                      key={_id}
                      onClick={() => router.push(`/perfil/${identifier}`)}
                    >
                      <FriendPhoto>
                        <img src={perfil} alt="" />
                        {/* Hover */}
                        <HoverFriendPhoto />
                      </FriendPhoto>
                      <motion.p whileHover={{ textDecoration: "underline" }}>
                        {name}
                      </motion.p>
                    </ContainFewFriendsPhoto>
                  );
                })}
            </FewFriendsPhotos>
          </FewFriendsWrapper>
          {/* User pubs */}
          <UserPublications>
            {router.query.id === UserId && <CreatePubs />}
            {Publications.filter(
              ({ creator }) => creator.identifier === router.query.id
            ).map(publication => {
              return <Pubs key={publication._id} publication={publication} />;
            })}
          </UserPublications>
        </>
      ) : (
        <div></div>
      )}
    </PublicationsFriendsHero>
  );
};

export default PerfilPublications;
