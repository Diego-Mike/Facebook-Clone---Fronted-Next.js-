import { useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

import {
  CreatePubHero,
  CreatePubInitial,
  CreatePubContainPerfil,
  CreatePubBody,
  CreatePubContainPhotoVideo
} from "./CreatepubStyled";
import DefaultUser from "../../../public/defaultUser.svg";
import PhotoVideo from "../../../public/photo-video.svg";
import { IuserData, user } from "../../../GlobalInterfaces/DataInterfaces";
import ModalCreatePub from "./ModalCreatePub/ModalCreatePub";
import { dataObject } from "../../../GlobalInterfaces/AuthContextInterfaces";
import { URL } from "../../../API/Calls";

const CreatePubs = () => {
  const router = useRouter();

  const [userAuth, setUserAuth] = useState<dataObject>({});
  const [modalCreate, setModalCreate] = useState<boolean>(false);

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("Auth"));
    setUserAuth(auth);
  }, []);

  const { data: CurrentUser } = useSWR<user>(
    () => `${URL}/api/user/singleU/${userAuth.user.id}`
  );

  const mobileScreen = useMediaQuery({ query: "(max-width: 530px)" });

  return (
    <>
      <CreatePubHero
        topMargin={router.pathname.includes("/home") ? "1.8rem" : "0rem"}
        theWidth={
          router.pathname.includes("/home")
            ? mobileScreen
              ? "100%"
              : "90%"
            : mobileScreen
            ? "100%"
            : "96%"
        }
      >
        <CreatePubInitial justify="space-between">
          <CreatePubContainPerfil>
            {CurrentUser && CurrentUser.perfil ? (
              <div>
                <img src={CurrentUser.perfil} alt="" />
              </div>
            ) : (
              <DefaultUser
                style={{ width: "43px", height: "43px", borderRadius: "50%" }}
              />
            )}
          </CreatePubContainPerfil>
          <CreatePubBody
            whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
            onClick={() => {
              (document.body.style.overflow = "hidden"), setModalCreate(true);
            }}
          >
            <p>¿Qué estás pensando, {CurrentUser && CurrentUser.name}?</p>
          </CreatePubBody>
        </CreatePubInitial>
        <hr style={{ width: "93%", opacity: 0.4, marginTop: "1rem" }} />
        <CreatePubInitial justify="center">
          <CreatePubContainPhotoVideo
            whileHover={{
              backgroundColor: "rgba(0, 0, 0, 0.06)",
              borderRadius: "0.85rem"
            }}
            whileTap={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
            onClick={() => {
              (document.body.style.overflow = "hidden"), setModalCreate(true);
            }}
          >
            <PhotoVideo style={{ width: "28px", height: "28px" }} />
            <span>Foto/Video</span>
          </CreatePubContainPhotoVideo>
        </CreatePubInitial>
      </CreatePubHero>
      {/* Modal window to create pub */}
      {modalCreate && (
        <ModalCreatePub
          setModalCreate={setModalCreate}
          CurrentUserName={CurrentUser && CurrentUser.name}
          UserId={userAuth && userAuth.user && userAuth.user.id}
        />
      )}
    </>
  );
};

export default CreatePubs;
