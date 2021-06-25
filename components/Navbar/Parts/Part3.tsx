import React from "react";
import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";
import Moment from "moment";
import { useMediaQuery } from "react-responsive";

import {
  NavbarPart3,
  UserPerfil,
  ImgPerfil,
  UserContainIcon,
  UserIcon,
  IconPlus,
  IconNotifications,
  IconArrow,
  ArrowDropDown,
  ArrowDropdownContain,
  ArrowDropdownUser,
  ArrowDropdownUserImg,
  ArrowDropdownUserName,
  ArrowDropdownLogout,
  ArrowDropdownLogoutIcon,
  ArrowDropdownLogoutText,
  LogoutIcon,
  NumberOfNotifications,
  DisplayNotifications,
  ContainNotifications,
  NotificationsTitle,
  NoNotifications,
  TheNotification,
  TheNotificationImg,
  TheNotificationData,
  TheNotificationDataTitle,
  TheNotificationDataOptions,
  TheNotificationDataSpan,
  NotificationAccepted
} from "../NavbarStyled";
import {
  dataObject,
  LOGOUT
} from "../../../GlobalInterfaces/AuthContextInterfaces";
import DefaultUser from "../../../public/defaultUser.svg";
import { IuserData, user } from "../../../GlobalInterfaces/DataInterfaces";
import { useState, useEffect, SetStateAction, SyntheticEvent } from "react";
import { AuthActions } from "../../../context/AuthContext";
import { DeleteNotificationOrFriend, AddAsFriend } from "../../../API/Calls";
import ModalCreatePub from "../../Pubs/CreatePubs/ModalCreatePub/ModalCreatePub";

interface IPar2Props {
  options: boolean;
  setOptions: React.Dispatch<SetStateAction<boolean>>;
  setSearchBar: React.Dispatch<SetStateAction<boolean>>;
  setNotifications: React.Dispatch<SetStateAction<boolean>>;
  notifications: boolean;
}

const Part3: React.FC<IPar2Props> = ({
  options,
  setOptions,
  setSearchBar,
  setNotifications,
  notifications
}) => {
  const router = useRouter();
  const dispatch = AuthActions();

  const [userId, setUserId] = useState<dataObject>({});
  const [modalCreate, setModalCreate] = useState<boolean>(false);

  useEffect(() => {
    const auth: dataObject = JSON.parse(localStorage.getItem("Auth"));

    setUserId(auth);
  }, []);

  const { data } = useSWR<user>(
    () => `${process.env.URL}/api/user/singleU/${userId.user.id}`
  );

  // Logout

  const logout = () => {
    dispatch({ type: LOGOUT });
    router.reload();
  };

  const AddFriend = async (acceptFriend: string): Promise<void> => {
    try {
      await AddAsFriend({ userId: acceptFriend }, userId.user.id);
      mutate(`${process.env.URL}/api/user/singleU/${userId.user.id}`);
      mutate(`${process.env.URL}/api/user/singleU/${acceptFriend}`);
      setNotifications(false);
    } catch (err) {
      if (err) {
        mutate(`${process.env.URL}/api/user/singleU/${userId.user.id}`);
        mutate(`${process.env.URL}/api/user/singleU/${acceptFriend}`);
        setNotifications(false);
      }
    }
  };

  const Delete = async (rejectUserId: string): Promise<void> => {
    // Kill notification
    try {
      await DeleteNotificationOrFriend(
        { data: { userId: rejectUserId } },
        userId.user.id
      );
      mutate(`${process.env.URL}/api/user/singleU/${userId.user.id}`);
      setNotifications(false);
    } catch (err) {
      // If error, re-validate cache
      if (err) {
        mutate(`${process.env.URL}/api/user/singleU/${userId.user.id}`);
        setNotifications(false);
      }
    }
  };

  // Framer motion - hover / tap

  const Actions = {
    whileHover: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
    whileTap: { backgroundColor: "rgba(0, 0, 0, 0.18)", scale: 0.95 }
  };

  const ActionsNotifications = {
    whileHover: { backgroundColor: "rgba(0, 0, 0, 0.05)" },
    whileTap: { backgroundColor: "rgba(0, 0, 0, 0.18)" }
  };

  const cutName = useMediaQuery({ query: "(max-width: 1200px)" });

  return (
    <NavbarPart3 onClick={(e: SyntheticEvent) => e.stopPropagation()}>
      {!data ? (
        <div></div>
      ) : (
        <>
          {/* Perfil photo and name */}

          {/* If you are in your own perfil, change color of icon and text */}

          {router.asPath === `/perfil/${data._id}` && (
            <UserPerfil
              style={{ background: "#E7F3FF" }}
              whileHover={{ backgroundColor: "rgb(222, 232, 243)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                data !== undefined && router.push(`/perfil/${data._id}`);
                setOptions(false);
                setSearchBar(false);
                setNotifications(false);
              }}
            >
              {data.perfil ? (
                <>
                  <ImgPerfil>
                    <img src={data.perfil} alt="" />
                  </ImgPerfil>
                </>
              ) : (
                <span style={{ margin: "0rem 0.7rem", marginTop: "0.3rem" }}>
                  <DefaultUser style={{ width: "30px", height: "84%" }} />
                </span> 
              )}
              {data.name && data.name.split(" ")[0].length < 13 ? (
                <>
                {!cutName && (<h2 style={{ color: "#1877F2" }}>{data.name.split(" ")[0]}</h2>)}
                </>
              ) :  (
                <h2></h2>
              )}
            </UserPerfil>
          )}
          {/* If you are not in your own perfil, styles by default */}
          {router.asPath !== `/perfil/${data._id}` && (
            <UserPerfil
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.07)" }}
              whileTap={{ backgroundColor: "rgba(0, 0, 0, 0.17)", scale: 0.97 }}
              onClick={() => {
                data !== undefined && router.push(`/perfil/${data._id}`);
                setOptions(false);
                setSearchBar(false);
                setNotifications(false);
              }}
            >
              {data.perfil ? (
                <>
                  <ImgPerfil>
                    <img src={data.perfil} alt="" />
                  </ImgPerfil>
                </>
              ) : (
                <span style={{ margin: "0rem 0.7rem", marginTop: "0.3rem" }}>
                  <DefaultUser style={{ width: "30px", height: "84%" }} />
                </span>
              )}
              {data.name && data.name.split(" ")[0].length > 13 ? (
                <h2></h2>
              ) : (
                <>
                {data.name && !cutName && (
                  <h2>{data.name.split(" ")[0]}</h2>
                )} 
                </>
              )}
            </UserPerfil>
          )}
        </>
      )}

      {/* Create publication icon */}

      <UserContainIcon
        variants={Actions}
        whileTap="whileTap"
        whileHover="whileHover"
        onClick={() => {
          (document.body.style.overflow = "hidden"), setModalCreate(true);
        }}
      >
        <UserIcon>
          <IconPlus />
        </UserIcon>
      </UserContainIcon>

      {modalCreate && (
        <ModalCreatePub
          setModalCreate={setModalCreate}
          CurrentUserName={data && data.name}
          UserId={data && data._id}
        />
      )}

      {/* Notification icon */}

      {!notifications ? (
        <UserContainIcon
          variants={Actions}
          whileTap="whileTap"
          whileHover="whileHover"
          onClick={() => {
            setOptions(false), setNotifications(true);
          }}
        >
          <UserIcon>
            <IconNotifications />
          </UserIcon>
          {/* Number of notifications */}
          {data !== undefined &&
            data.friends &&
            data.friends.filter(f => f.friend === false).length > 0 && (
              <NumberOfNotifications>
                <span>
                  {data.friends &&
                  data.friends.filter(f => f.friend === false).length > 99
                    ? "99+"
                    : data.friends &&
                      data.friends.filter(f => f.friend === false).length}
                </span>
              </NumberOfNotifications>
            )}
        </UserContainIcon>
      ) : (
        <UserContainIcon variants={Actions} whileHover="whileHover">
          <UserIcon
            style={{ backgroundColor: "#E7F3FF" }}
            onClick={() => {
              setNotifications(false);
            }}
          >
            <IconNotifications style={{ color: "#1877F2" }} />
          </UserIcon>
          {/* Number of notifications */}
          {data !== undefined &&
            data.friends &&
            data.friends.filter(f => f.friend === false).length > 0 && (
              <NumberOfNotifications>
                <span>
                  {data.friends.filter(f => f.friend === false).length > 99
                    ? "99+"
                    : data.friends &&
                      data.friends.filter(f => f.friend === false).length}
                </span>
              </NumberOfNotifications>
            )}

          {/* Display notifications */}

          <DisplayNotifications>
            <ContainNotifications>
              <NotificationsTitle>Notificaciones</NotificationsTitle>
              {data !== undefined &&
                data.friends &&
                data.friends.filter(
                  f =>
                    f.friend === false ||
                    (f.friend === true && f.notification === true)
                ).length < 1 && (
                  <NoNotifications>
                    No tienes notificaciones pendientes
                  </NoNotifications>
                )}

              {data !== undefined &&
                data.friends &&
                data.friends
                  .filter(
                    f =>
                      f.friend === false ||
                      (f.friend === true && f.notification === true)
                  )
                  .map(notification => {
                    return (
                      <React.Fragment key={notification._id}>
                        {/* Notification */}
                        {notification.friend === false && (
                          <TheNotification
                            onClick={() => {
                              router.push(`/perfil/${notification.identifier}`),
                                setNotifications(false);
                            }}
                            variants={ActionsNotifications}
                            whileTap="whileTap"
                            whileHover="whileHover"
                          >
                            <TheNotificationImg>
                              <div>
                                {notification.perfil ? (
                                  <img src={notification.perfil} alt="" />
                                ) : (
                                  <DefaultUser />
                                )}
                              </div>
                            </TheNotificationImg>
                            <TheNotificationData>
                              <TheNotificationDataTitle>
                                <h3>
                                  {notification.name.split(" ")[0]}
                                  &nbsp;
                                  {notification.name.split(" ")[1]}
                                  &nbsp;
                                  {notification.name.split(" ")[2]}
                                </h3>
                                <span>
                                  {Moment(notification.createdAt).fromNow(true)}
                                </span>
                              </TheNotificationDataTitle>

                              <TheNotificationDataOptions
                                onClick={(e: SyntheticEvent) =>
                                  e.stopPropagation()
                                }
                              >
                                <TheNotificationDataSpan
                                  colorStuff="white"
                                  backgroundStuff="#1877f2"
                                  paddingStuff="0.6rem 2rem"
                                  whileTap={{ scale: 0.97 }}
                                  onClick={() =>
                                    AddFriend(notification.identifier)
                                  }
                                >
                                  Confirmar
                                </TheNotificationDataSpan>
                                <TheNotificationDataSpan
                                  backgroundStuff="rgba(0, 0, 0, 0.1)"
                                  paddingStuff="0.6rem 2.5rem"
                                  whileTap={{ scale: 0.97 }}
                                  onClick={() =>
                                    Delete(notification.identifier)
                                  }
                                >
                                  Eliminar
                                </TheNotificationDataSpan>
                              </TheNotificationDataOptions>
                            </TheNotificationData>
                          </TheNotification>
                        )}
                        {/* Notification accepted */}
                        {notification.friend === true && (
                          <TheNotification
                            onClick={() => {
                              router.push(`/perfil/${notification.identifier}`),
                                setNotifications(false);
                            }}
                            whileTap={{ opacity: 0.5 }}
                            mainColor="rgb(208, 231, 255)"
                          >
                            <TheNotificationImg>
                              <div>
                                {notification.perfil ? (
                                  <img src={notification.perfil} alt="" />
                                ) : (
                                  <DefaultUser />
                                )}
                              </div>
                            </TheNotificationImg>
                            <TheNotificationData>
                              <TheNotificationDataTitle>
                                <h3 style={{ fontWeight: 600 }}>
                                  {notification.name.split(" ")[0]}
                                  &nbsp;
                                  {notification.name.split(" ")[1]}
                                  &nbsp;
                                  {notification.name.split(" ")[2]}
                                </h3>
                                <span style={{ opacity: 0.88 }}>
                                  {Moment(notification.createdAt).fromNow(true)}
                                </span>
                              </TheNotificationDataTitle>
                              <TheNotificationDataOptions position="flex-start">
                                <NotificationAccepted>
                                  Solicitud de amistad aceptada
                                </NotificationAccepted>
                              </TheNotificationDataOptions>
                            </TheNotificationData>
                          </TheNotification>
                        )}
                      </React.Fragment>
                    );
                  })}
            </ContainNotifications>
          </DisplayNotifications>
        </UserContainIcon>
      )}

      {/* Options icon */}

      {!options ? (
        <UserContainIcon
          variants={Actions}
          whileTap="whileTap"
          whileHover="whileHover"
          onClick={() => {
            setNotifications(false), setOptions(true);
          }}
        >
          <UserIcon>
            <IconArrow />
          </UserIcon>
        </UserContainIcon>
      ) : (
        <UserContainIcon variants={Actions} whileHover="whileHover">
          <UserIcon
            style={{ backgroundColor: "#E7F3FF" }}
            onClick={() => setOptions(false)}
          >
            <IconArrow style={{ color: "#1877F2" }} />
          </UserIcon>
          {/* Dropdown to go to user - logout */}
          <ArrowDropDown>
            <ArrowDropdownContain>
              {/* The image and go to perfil */}
              <ArrowDropdownUser
                whileHover={{
                  backgroundColor: "rgba(0, 0, 0, 0.055)",
                  borderRadius: "0.7rem"
                }}
                onClick={() => {
                  data !== undefined && router.push(`/perfil/${data._id}`);
                  setOptions(false);
                  setSearchBar(false);
                  setNotifications(false);
                }}
              >
                {!data ? null : (
                  <>
                    <ArrowDropdownUserImg>
                      {data.perfil ? (
                        <div>
                          <img src={data.perfil} alt="" />
                        </div>
                      ) : (
                        <DefaultUser
                          style={{ width: "60px", height: "60px" }}
                        />
                      )}
                    </ArrowDropdownUserImg>
                    {/* User and go to perfil */}
                    <ArrowDropdownUserName>
                      <h2>{data.name}</h2>
                      <p>Ver tu perfil</p>
                    </ArrowDropdownUserName>
                  </>
                )}
              </ArrowDropdownUser>
              <hr
                style={{
                  width: "95%",
                  margin: "0 auto",
                  opacity: 0.58
                }}
              />
              {/* Logout */}
              <ArrowDropdownLogout
                whileHover={{
                  backgroundColor: "rgba(0, 0, 0, 0.055)",
                  borderRadius: "0.7rem"
                }}
                onClick={logout}
              >
                <ArrowDropdownLogoutIcon>
                  <UserIcon style={{ background: "rgba(0, 0, 0, 0.12)" }}>
                    <LogoutIcon />
                  </UserIcon>
                </ArrowDropdownLogoutIcon>
                <ArrowDropdownLogoutText>
                  <h2>Cerrar sesión</h2>
                </ArrowDropdownLogoutText>
              </ArrowDropdownLogout>
            </ArrowDropdownContain>
          </ArrowDropDown>
        </UserContainIcon>
      )}
    </NavbarPart3>
  );
};

export default Part3;
