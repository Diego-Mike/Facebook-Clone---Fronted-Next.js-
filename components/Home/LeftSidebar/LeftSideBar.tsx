import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";

import {
  LeftSideBarWrapper,
  LeftSideBarContainIcon,
  LeftSideBarImg,
  LeftSideBarText,
  LeftSideBarFriendsIcon,
  LeftSideBarCreateIcon
} from "./LeftSideBarStyled";
import { dataObject } from "../../../GlobalInterfaces/AuthContextInterfaces";
import { IuserData } from "../../../GlobalInterfaces/DataInterfaces";
import DefaultUser from "../../../public/defaultUser.svg";
import ModalCreatePub from "../../Pubs/CreatePubs/ModalCreatePub/ModalCreatePub";

interface IleftSideBarProps {
  UserId: dataObject;
}

const LeftSideBar: React.FC<IleftSideBarProps> = ({ UserId }) => {
  const [modalCreate, setModalCreate] = useState<boolean>(false);

  const { data: DataUser }: IuserData = useSWR(
    () => `${process.env.URL}/api/user/singleU/${UserId.user.id}`
  );

  const router = useRouter();

  // Framer motion - Actions

  const Actions = {
    whileHover: {
      backgroundColor: "rgba(0, 0, 0, 0.07)",
      borderRadius: "0.78rem"
    },
    whileTap: { backgroundColor: "rgba(0, 0, 0, 0.17)" }
  };

  return (
    <>
      {DataUser !== undefined ? (
        <>
          {/* // Go to profile */}
          <LeftSideBarWrapper>
            <LeftSideBarContainIcon
              variants={Actions}
              whileHover="whileHover"
              whileTap="whileTap"
              onClick={() => router.push(`/perfil/${DataUser._id}`)}
            >
              <LeftSideBarImg>
                {DataUser.perfil ? (
                  <div>
                    <img src={DataUser.perfil} alt="" />
                  </div>
                ) : (
                  <DefaultUser style={{ width: "32px", height: "32px" }} />
                )}
              </LeftSideBarImg>
              <LeftSideBarText>
                <span>{DataUser.name}</span>
              </LeftSideBarText>
            </LeftSideBarContainIcon>
            {/* Go to friends */}
            <LeftSideBarContainIcon
              variants={Actions}
              whileHover="whileHover"
              whileTap="whileTap"
              onClick={() => router.push(`/friends`)}
            >
              <LeftSideBarImg>
                <LeftSideBarFriendsIcon />
              </LeftSideBarImg>
              <LeftSideBarText>
                <span>Amigos</span>
              </LeftSideBarText>
            </LeftSideBarContainIcon>
            {/* Create publication */}
            <LeftSideBarContainIcon
              variants={Actions}
              whileHover="whileHover"
              whileTap="whileTap"
              onClick={() => {
                (document.body.style.overflow = "hidden"), setModalCreate(true);
              }}
            >
              <LeftSideBarImg>
                <LeftSideBarCreateIcon />
              </LeftSideBarImg>
              <LeftSideBarText>
                <span>Nueva publicación</span>
              </LeftSideBarText>
            </LeftSideBarContainIcon>
          </LeftSideBarWrapper>
          {/* Create publication */}
          {modalCreate && (
            <ModalCreatePub
              setModalCreate={setModalCreate}
              CurrentUserName={DataUser && DataUser.name}
              UserId={DataUser && DataUser._id}
            />
          )}
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default LeftSideBar;
