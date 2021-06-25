import {
  useState,
  useEffect,
  SetStateAction,
  SyntheticEvent,
  MouseEvent
} from "react";
import { AnimatePresence } from "framer-motion";
import useSWR, { mutate } from "swr";
import { useMediaQuery } from 'react-responsive'

import { user, IuserData } from "../../GlobalInterfaces/DataInterfaces";
import { dataObject } from "../../GlobalInterfaces/AuthContextInterfaces";
import {
  PerfilOptionsWrapper,
  PerfilOptionsContain,
  PublicationOrFriends,
  ContainPubOrFriend,
  AddFriendOrUpdate,
  PencilIcon,
  AddPerson,
  DeletePerson,
  RespondPerson,
  ContainOptions,
  DiplayAddDeleteOptions,
  ContainAddDeleteOptions,
  EliminateFriend
} from "../../styled-pages/PerfilStyled";
import UpdatePerfil from "./UpdatePerfilModal/UpdatePerfil";
import {
  AddNotification,
  DeleteNotificationOrFriend,
  AddAsFriend
} from "../../API/Calls";

interface IperfilOptions {
  perfilId: user;
  updatePerfil: boolean;
  setUpdatePerfil: React.Dispatch<SetStateAction<boolean>>;
  setWatchPubs: React.Dispatch<SetStateAction<boolean>>;
  setWatchFriends: React.Dispatch<SetStateAction<boolean>>;
  watchFriends: boolean;
  watchPubs: boolean;
}

const PerfilOptions: React.FC<IperfilOptions> = ({
  perfilId,
  updatePerfil,
  setUpdatePerfil,
  setWatchFriends,
  setWatchPubs,
  watchFriends,
  watchPubs
}) => {
  const [userAuth, setUserAuth] = useState<dataObject>({});
  const [deleteAddOptions, setDeleteAddOptions] = useState<boolean>(false);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("Auth"));
    setUserAuth(auth);
  }, []);

  const { data: userOnScreen } = useSWR<user>(
    () => `${process.env.URL}/api/user/singleU/${userAuth.user.id}`
  );

  const AddFriend = async (): Promise<void> => {
    try {
      mutate(
        `${process.env.URL}/api/user/singleU/${perfilId._id}`,
        (visitedPerfil: user) => {
          if (visitedPerfil) {
            const friends = [
              {
                identifier: userOnScreen._id,
                perfil: userOnScreen.perfil,
                name: userOnScreen.name,
                notification: true,
                friend: true,
                createdAt: new Date().toISOString()
              },
              ...visitedPerfil.friends
            ];

            const newFriend = {
              ...visitedPerfil,
              friends
            };

            return newFriend;
          }
        },
        false
      );

      mutate(
        `${process.env.URL}/api/user/singleU/${userOnScreen._id}`,
        (userAtScreen: user) => {
          if (userAtScreen) {
            const findFriend = userAtScreen.friends.find(
              user => user.identifier === perfilId._id
            );

            const friends = userAtScreen.friends.map(find =>
              find === findFriend ? { ...find, friend: true } : find
            );

            const update = { ...userAtScreen, friends };

            return update;
          }
        },
        false
      );

      await AddAsFriend({ userId: perfilId._id }, userAuth.user.id);

      mutate(`${process.env.URL}/api/user/singleU/${userOnScreen._id}`);
      mutate(`${process.env.URL}/api/user/singleU/${perfilId._id}`);
    } catch (err) {
      if (err) {
        // If error, revalidate cache
        mutate(`${process.env.URL}/api/user/singleU/${userOnScreen._id}`);
        mutate(`${process.env.URL}/api/user/singleU/${perfilId._id}`);
      }
    }
  };

  const AddUser = async (): Promise<void> => {
    try {
      // Mutate cache to add notification

      mutate(
        `${process.env.URL}/api/user/singleU/${perfilId._id}`,
        (visitedPerfil: user) => {
          if (visitedPerfil) {
            const friends = [
              {
                identifier: userOnScreen._id,
                perfil: userOnScreen.perfil,
                name: userOnScreen.name,
                notification: true,
                friend: false,
                createdAt: new Date().toISOString()
              },
              ...visitedPerfil.friends
            ];

            const newNotification = {
              ...visitedPerfil,
              friends
            };

            return newNotification;
          }
        },
        false
      ),
        await AddNotification({ userId: perfilId._id }, userAuth.user.id);
      // Trigger to make sure the data is right

      mutate(`${process.env.URL}/api/user/singleU/${userOnScreen._id}`);
      mutate(`${process.env.URL}/api/user/singleU/${perfilId._id}`);
    } catch (err) {
      if (err) {
        // If error, revalidate cache
        mutate(`${process.env.URL}/api/user/singleU/${userOnScreen._id}`);
        mutate(`${process.env.URL}/api/user/singleU/${perfilId._id}`);
      }
    }
  };

  const Delete = async (): Promise<void> => {
    try {
      // Check if it's only notification or friend
      if (
        perfilId.friends.find(f => f.identifier === userOnScreen._id) &&
        userOnScreen.friends.find(f => f.identifier === perfilId._id)
      ) {
        mutate(
          `${process.env.URL}/api/user/singleU/${perfilId._id}`,
          (visitedPerfil: user) => {
            if (visitedPerfil) {
              const friends = visitedPerfil.friends.filter(
                eliminate => eliminate.identifier !== userOnScreen._id
              );

              const updatedVisitedPerfil = { ...visitedPerfil, friends };

              return updatedVisitedPerfil;
            }
          },
          false
        );
        mutate(
          `${process.env.URL}/api/user/singleU/${userOnScreen._id}`,
          (userAtScreen: user) => {
            if (userAtScreen) {
              const friends = userAtScreen.friends.filter(
                eliminate => eliminate.identifier !== perfilId._id
              );

              const updatedUserAtScreen = { ...userAtScreen, friends };

              return updatedUserAtScreen;
            }
          },
          false
        );
      }

      // Kill notification
      else if (
        perfilId.friends.find(f => f.identifier === userOnScreen._id) &&
        !userOnScreen.friends.find(f => f.identifier === perfilId._id)
      ) {
        mutate(
          `${process.env.URL}/api/user/singleU/${perfilId._id}`,

          (visitedPerfil: user) => {
            if (visitedPerfil) {
              const friends = visitedPerfil.friends.filter(
                eliminate => eliminate.identifier !== userOnScreen._id
              );

              const updatedVisitedPerfil = { ...visitedPerfil, friends };

              return updatedVisitedPerfil;
            }
          },
          false
        );
      } else if (
        userOnScreen.friends.find(f => f.identifier === perfilId._id) &&
        !perfilId.friends.find(f => f.identifier === userOnScreen._id)
      ) {
        mutate(
          `${process.env.URL}/api/user/singleU/${userOnScreen._id}`,
          (userAtScreen: user) => {
            if (userAtScreen) {
              const friends = userAtScreen.friends.filter(
                eliminate => eliminate.identifier !== perfilId._id
              );

              const updatedUserAtScreen = { ...userAtScreen, friends };

              return updatedUserAtScreen;
            }
          },
          false
        );
      }

      await DeleteNotificationOrFriend(
        { data: { userId: perfilId._id } },
        userAuth.user.id
      );

      mutate(`${process.env.URL}/api/user/singleU/${userOnScreen._id}`);
      mutate(`${process.env.URL}/api/user/singleU/${perfilId._id}`);
    } catch (err) {
      // If error, revalidate cache
      if (err) {
        mutate(`${process.env.URL}/api/user/singleU/${userOnScreen._id}`);
        mutate(`${process.env.URL}/api/user/singleU/${perfilId._id}`);
      }
    }
  };

  // Change option to watch pubs - friends

  const LetsWatchPubs = (): void => {
    setWatchPubs(true);
    setWatchFriends(false);
  };

  const LetsWatchFriends = (): void => {
    setWatchPubs(false);
    setWatchFriends(true);
  };

  //   Framer motion - actions - popup

  const Actions = {
    whileHover: {
      backgroundColor: "rgba(0, 0, 0, 0.07)",
      borderRadius: "1rem"
    },
    whileTap: { backgroundColor: "rgba(0, 0, 0, 0.18)", scale: 0.97 }
  };

  const PopUp = {
    hidden: { opacity: 0 },
    visible: {  opacity: 1, transition: { duration: 0.35 } },
    exit: { x: -100, opacity: 0 }
  };

  const PopUp2 = {
    hidden: { opacity: 0 },
    visible: {  opacity: 1, transition: { duration: 0.35 } },
    exit: {opacity: 0 }
  };

  const changeAnimation = useMediaQuery({query: '(max-width: 1050px)'})

  return (
    <>
      <PerfilOptionsWrapper
        onClick={(e: SyntheticEvent) => {
          e.stopPropagation(), setDeleteAddOptions(false);
        }}
      >
        {/* Separator line */}

        <hr />

        {/* Options */}

        <PerfilOptionsContain>
          {/* Watch publications - friends */}
          <PublicationOrFriends>
            {watchPubs && !watchFriends ? (
              <ContainPubOrFriend
                style={{ borderBottom: "3.7px solid #1877F2", height: "98%" }}
              >
                <span style={{ color: "#1877F2", opacity: 1 }}>
                  Publicaciones
                </span>
              </ContainPubOrFriend>
            ) : (
              <ContainPubOrFriend
                variants={Actions}
                whileHover="whileHover"
                whileTap="whileTap"
                onClick={LetsWatchPubs}
              >
                <span> Publicaciones </span>
              </ContainPubOrFriend>
            )}
            {watchFriends && !watchPubs ? (
              <ContainPubOrFriend
                style={{ borderBottom: "3.7px solid #1877F2", height: "98%" }}
              >
                <span style={{ color: "#1877F2", opacity: 1 }}>
                  Amigos &nbsp;
                  {perfilId.friends.length < 1
                    ? "0"
                    : perfilId.friends.filter(
                        findBoolean => findBoolean.friend === true
                      ).length}
                </span>
              </ContainPubOrFriend>
            ) : (
              <ContainPubOrFriend
                variants={Actions}
                whileHover="whileHover"
                whileTap="whileTap"
                onClick={LetsWatchFriends}
              >
                <span>
                  Amigos &nbsp;
                  {perfilId.friends.length < 1
                    ? "0"
                    : perfilId.friends.filter(
                        findBoolean => findBoolean.friend === true
                      ).length}
                </span>
              </ContainPubOrFriend>
            )}
          </PublicationOrFriends>
          {/* Update perfil */}
          {Object.keys(userAuth).length > 0 &&
            perfilId._id === userAuth.user.id && (
              <ContainOptions>
                <AddFriendOrUpdate
                  variants={Actions}
                  whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.13)" }}
                  whileTap={{
                    backgroundColor: "rgba(0, 0, 0, 0.13)",
                    scale: 0.93
                  }}
                  onClick={() =>{ document.body.style.overflow = 'hidden',setUpdatePerfil(true)}}
                >
                  <PencilIcon />
                  <span> Editar Perfil </span>
                </AddFriendOrUpdate>
              </ContainOptions>
            )}

          {Object.keys(userAuth).length > 0 &&
            perfilId._id !== userAuth.user.id && (
              <>
                {/* Send notification to add as a friend */}
                {userOnScreen &&
                  userOnScreen.friends.filter(
                    f => f.identifier === perfilId._id
                  ).length < 1 &&
                  perfilId.friends.filter(
                    f => f.identifier === userAuth.user.id
                  ).length < 1 && (
                    <ContainOptions>
                      <AddFriendOrUpdate
                        whileTap={{ scale: 0.93 }}
                        theBackground="#1877f2"
                        onClick={AddUser}
                      >
                        <AddPerson />
                        <span style={{ color: "white" }}> Agregar </span>
                      </AddFriendOrUpdate>
                    </ContainOptions>
                  )}

                {/* Cancel notification */}

                {/* If both users send notification at almost same time, deal error with cancel notification */}

                {userOnScreen &&
                  userOnScreen.friends.find(
                    f => f.identifier === perfilId._id
                  ) !== undefined &&
                  perfilId.friends.find(
                    f => f.identifier === userOnScreen._id
                  ) !== undefined &&
                  perfilId.friends.find(f => f.identifier === userOnScreen._id)
                    .friend === false && (
                    <ContainOptions>
                      <AddFriendOrUpdate
                        whileTap={{ scale: 0.93 }}
                        theBackground="#1877f2"
                        onClick={Delete}
                      >
                        <span
                          style={{
                            color: "white",
                            paddingLeft: "0.9rem",
                            paddingRight: "0.9rem"
                          }}
                        >
                          Resolver Error
                        </span>
                      </AddFriendOrUpdate>
                    </ContainOptions>
                  )}
                {/* If everything it's okay, no errors around */}
                {userOnScreen &&
                  userOnScreen.friends.find(
                    f => f.identifier === perfilId._id
                  ) === undefined &&
                  perfilId.friends.find(
                    f => f.identifier === userOnScreen._id
                  ) !== undefined &&
                  perfilId.friends.find(f => f.identifier === userOnScreen._id)
                    .friend === false && (
                    <ContainOptions>
                      <AddFriendOrUpdate
                        whileTap={{ scale: 0.93 }}
                        theBackground="#1877f2"
                        onClick={Delete}
                      >
                        <span style={{ paddingLeft: "0.8rem" }}>
                          <DeletePerson />
                        </span>
                        <span
                          style={{
                            color: "white",
                            paddingLeft: "0.7rem",
                            paddingRight: "1rem"
                          }}
                        >
                          Cancelar solicitud
                        </span>
                      </AddFriendOrUpdate>
                    </ContainOptions>
                  )}

                {/* Accept/Kill notification */}

                {userOnScreen &&
                  userOnScreen.friends.find(
                    f => f.identifier === perfilId._id
                  ) !== undefined &&
                  userOnScreen.friends.find(f => f.identifier === perfilId._id)
                    .friend == false &&
                  perfilId.friends.find(
                    f => f.identifier === userOnScreen._id
                  ) === undefined && (
                    <ContainOptions>
                      <AddFriendOrUpdate
                        whileTap={{ scale: 0.93 }}
                        theBackground="#1877f2"
                        onClick={(e: MouseEvent) => {
                          e.stopPropagation(),
                            setDeleteAddOptions(!deleteAddOptions);
                        }}
                      >
                        <RespondPerson />
                        <span style={{ color: "white" }}> Responder </span>
                      </AddFriendOrUpdate>
                      <AnimatePresence>
                        {deleteAddOptions && (
                          <DiplayAddDeleteOptions
                            onClick={(e: MouseEvent) => e.stopPropagation()}
                            variants={!changeAnimation ? PopUp : PopUp2}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                          >
                            <ContainAddDeleteOptions
                              variants={Actions}
                              whileHover="whileHover"
                              whileTap="whileTap"
                              onClick={() => {
                                AddFriend(),
                                  setDeleteAddOptions(!deleteAddOptions);
                              }}
                            >
                              <span>Confirmar</span>
                            </ContainAddDeleteOptions>
                            <ContainAddDeleteOptions
                              variants={Actions}
                              whileHover="whileHover"
                              whileTap="whileTap"
                              onClick={() => {
                                Delete(),
                                  setDeleteAddOptions(!deleteAddOptions);
                              }}
                            >
                              <span>Eliminar solicitud</span>
                            </ContainAddDeleteOptions>
                          </DiplayAddDeleteOptions>
                        )}
                      </AnimatePresence>
                    </ContainOptions>
                  )}
              </>
            )}

          {/* Delete friend */}

          {userOnScreen &&
            userOnScreen.friends.find(f => f.identifier === perfilId._id) !==
              undefined &&
            perfilId.friends.find(f => f.identifier === userAuth.user.id) !==
              undefined &&
            userOnScreen.friends.find(f => f.identifier === perfilId._id)
              .friend === true &&
            perfilId.friends.find(f => f.identifier === userAuth.user.id)
              .friend === true && (
              <ContainOptions>
                <AddFriendOrUpdate
                  theBackground="rgba(0, 0, 0, 0.12)"
                  whileTap={{ scale: 0.93 }}
                  onClick={(e: MouseEvent) => {
                    e.stopPropagation(), setDeleteAddOptions(!deleteAddOptions);
                  }}
                >
                  <RespondPerson colorIcon="black" />
                  <span> Amigos </span>
                </AddFriendOrUpdate>
                <AnimatePresence>
                  {deleteAddOptions && (
                    <DiplayAddDeleteOptions
                      onClick={(e: MouseEvent) => e.stopPropagation()}
                      variants={!changeAnimation ? PopUp : PopUp2}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <ContainAddDeleteOptions
                        variants={Actions}
                        whileHover="whileHover"
                        whileTap="whileTap"
                        onClick={Delete}
                      >
                        <span
                          style={{
                            paddingLeft: "1rem",
                            paddingRight: "0.3rem"
                          }}
                        >
                          <EliminateFriend />
                        </span>
                        <span>Eliminar de mis amigos</span>
                      </ContainAddDeleteOptions>
                    </DiplayAddDeleteOptions>
                  )}
                </AnimatePresence>
              </ContainOptions>
            )}

          {/* If there's an error between killing notification/add a friend */}

          {userOnScreen &&
            userOnScreen.friends.find(f => f.identifier === perfilId._id) !==
              undefined &&
            userOnScreen.friends.find(f => f.identifier === perfilId._id)
              .friend === true &&
            perfilId.friends.find(f => f.identifier === userOnScreen._id) ===
              undefined && (
              <ContainOptions>
                <AddFriendOrUpdate
                  whileTap={{ scale: 0.93 }}
                  theBackground="#1877f2"
                  onClick={Delete}
                >
                  <span
                    style={{
                      color: "white",
                      paddingLeft: "0.9rem",
                      paddingRight: "0.9rem"
                    }}
                  >
                    Solucionar Error
                  </span>
                </AddFriendOrUpdate>
              </ContainOptions>
            )}

          {userOnScreen &&
            userOnScreen.friends.find(f => f.identifier === perfilId._id) ===
              undefined &&
            perfilId.friends.find(f => f.identifier === userOnScreen._id) !==
              undefined &&
            perfilId.friends.find(f => f.identifier === userOnScreen._id)
              .friend === true && (
              <ContainOptions>
                <AddFriendOrUpdate
                  whileTap={{ scale: 0.93 }}
                  theBackground="#1877f2"
                  onClick={Delete}
                >
                  <span
                    style={{
                      color: "white",
                      paddingLeft: "0.9rem",
                      paddingRight: "0.9rem"
                    }}
                  >
                    Solucionar Error
                  </span>
                </AddFriendOrUpdate>
              </ContainOptions>
            )}
        </PerfilOptionsContain>
      </PerfilOptionsWrapper>

      {updatePerfil && (
        <UpdatePerfil
          setUpdatePerfil={setUpdatePerfil}
          perfilPhotos={perfilId}
        />
      )}
    </>
  );
};

export default PerfilOptions;
