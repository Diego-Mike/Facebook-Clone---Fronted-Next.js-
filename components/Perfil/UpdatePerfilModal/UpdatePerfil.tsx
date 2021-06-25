import { SetStateAction, useState, SyntheticEvent } from "react";
import FileBase from "react-file-base64";
import { mutate } from "swr";
import { useMediaQuery } from "react-responsive";

import {
  UpdatePerfilModal,
  ContainUpdatePerfil,
  UpdatePerfilTitle,
  ContainCloseIcon,
  CloseIcon,
  ContainPerfilBanner,
  ContainPerfilBannerTitle,
  ButtonUpdatePhotos,
  PerfilBannerPhoto,
  ContainPerfilPhoto,
  ContainBannerPhoto
} from "../../../styled-pages/PerfilStyled";
import { user } from "../../../GlobalInterfaces/DataInterfaces";
import { updatePerfilPhotos } from "../../../API/Calls";

interface IupdateProps {
  setUpdatePerfil: React.Dispatch<SetStateAction<boolean>>;
  perfilPhotos: user;
}

const UpdatePerfil: React.FC<IupdateProps> = ({
  setUpdatePerfil,
  perfilPhotos
}) => {
  const [updatePhotos, setUpdatePhotos] = useState({
    banner: "",
    perfil: ""
  });

  const update = async () => {
    document.body.style.overflow = "auto";
    mutate(
      `${process.env.URL}/api/user/singleU/` + perfilPhotos._id,
      {
        ...perfilPhotos,
        perfil:
          updatePhotos.perfil === ""
            ? perfilPhotos.perfil
            : updatePhotos.perfil,
        banner:
          updatePhotos.banner === "" ? perfilPhotos.banner : updatePhotos.banner
      },
      false
    );
    setUpdatePerfil(false);
    await updatePerfilPhotos(updatePhotos, perfilPhotos._id);
    mutate(`${process.env.URL}/api/user/singleU/` + perfilPhotos._id);
  };

  const cutText = useMediaQuery({ query: "(max-width: 500px)" });

  return (
    <>
      <UpdatePerfilModal
        onClick={(e: SyntheticEvent) => {
          e.stopPropagation();
          document.body.style.overflow = "auto";
          setUpdatePerfil(false);
        }}
      >
        <ContainUpdatePerfil
          onClick={(e: SyntheticEvent) => e.stopPropagation()}
        >
          {/* Title */}
          <UpdatePerfilTitle>
            <h3>
              Editar perfil
              {!cutText && <span> ( solo .png, .jpg, .jpeg ) </span>}
            </h3>

            <ContainCloseIcon
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.14)" }}
              onClick={() => {
                (document.body.style.overflow = "auto"), setUpdatePerfil(false);
              }}
            >
              <CloseIcon />
            </ContainCloseIcon>
          </UpdatePerfilTitle>
          {/* Perfil */}
          <ContainPerfilBanner heightOf="21.88rem">
            <ContainPerfilBannerTitle>
              <span>Foto del perfil</span>

              <FileBase
                style={{ cursor: "pointer" }}
                multiple={false}
                onDone={({ base64 }) =>
                  setUpdatePhotos({ ...updatePhotos, perfil: base64 })
                }
              />
            </ContainPerfilBannerTitle>
            <PerfilBannerPhoto>
              <ContainPerfilPhoto>
                {perfilPhotos.perfil && updatePhotos.perfil === "" && (
                  <img src={perfilPhotos.perfil} alt="" />
                )}

                {updatePhotos.perfil !== "" && (
                  <img src={updatePhotos.perfil} alt="" />
                )}
              </ContainPerfilPhoto>
            </PerfilBannerPhoto>
          </ContainPerfilBanner>
          {/* Banner */}
          <ContainPerfilBanner heightOf="25.86rem">
            <ContainPerfilBannerTitle>
              <span>Foto de portada</span>

              <FileBase
                style={{ cursor: "pointer" }}
                multiple={false}
                onDone={({ base64 }) =>
                  setUpdatePhotos({ ...updatePhotos, banner: base64 })
                }
              />
            </ContainPerfilBannerTitle>
            <PerfilBannerPhoto>
              <ContainBannerPhoto>
                {perfilPhotos.banner && updatePhotos.banner === "" && (
                  <img src={perfilPhotos.banner} alt="" />
                )}

                {updatePhotos.banner !== "" && (
                  <img src={updatePhotos.banner} alt="" />
                )}
              </ContainBannerPhoto>
            </PerfilBannerPhoto>
          </ContainPerfilBanner>
          {/* Update */}
          {updatePhotos.perfil === "" && updatePhotos.banner === "" ? (
            <ButtonUpdatePhotos style={{ opacity: 0.6, cursor: "default" }}>
              Editar
            </ButtonUpdatePhotos>
          ) : (
            <ButtonUpdatePhotos whileTap={{ scale: 0.9 }} onClick={update}>
              Editar
            </ButtonUpdatePhotos>
          )}
        </ContainUpdatePerfil>
      </UpdatePerfilModal>
    </>
  );
};

export default UpdatePerfil;
