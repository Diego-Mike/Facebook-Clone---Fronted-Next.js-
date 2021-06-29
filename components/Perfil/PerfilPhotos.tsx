import { useState, MouseEvent } from "react";
import { AnimatePresence } from "framer-motion";

import { user } from "../../GlobalInterfaces/DataInterfaces";
import {
  PerfilPhotosWrapper,
  ContainBannerPerfil,
  ContainPerfil,
  PerfilName
} from "../../styled-pages/PerfilStyled";
import PhotoFullScreen from "../PhotoFullScreen/PhotoFullScreen";

interface IperfilPhotos {
  userPerfil: user;
}

const PerfilPhotos: React.FC<IperfilPhotos> = ({ userPerfil }) => {
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [screenPhoto, setScreenPhoto] = useState<string>("");

  return (
    <>
      <PerfilPhotosWrapper>
        {userPerfil.banner && (
          <ContainBannerPerfil
            style={{
              backgroundImage: `url(${userPerfil.banner})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
            onClick={() => {
              setScreenPhoto(userPerfil.banner);
              setFullScreen(true);
              document.body.style.overflow = "hidden";
            }}
          >
            {userPerfil.perfil && (
              <ContainPerfil
                style={{
                  backgroundImage: `url(${userPerfil.perfil})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                  setScreenPhoto(userPerfil.perfil);
                  setFullScreen(true);
                  document.body.style.overflow = "hidden";
                }}
              ></ContainPerfil>
            )}
            {!userPerfil.perfil && (
              <ContainPerfil photoStyle="NoPerfil"></ContainPerfil>
            )}
          </ContainBannerPerfil>
        )}

        {!userPerfil.banner && (
          <ContainBannerPerfil photoStyle="NoBanner">
            {userPerfil.perfil && (
              <ContainPerfil
                style={{
                  backgroundImage: `url(${userPerfil.perfil})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}
                onClick={(e: MouseEvent) => {
                  e.stopPropagation();
                  setScreenPhoto(userPerfil.perfil);
                  setFullScreen(true);
                  document.body.style.overflow = "hidden";
                }}
              ></ContainPerfil>
            )}
            {!userPerfil.perfil && (
              <ContainPerfil photoStyle="NoPerfil"></ContainPerfil>
            )}
          </ContainBannerPerfil>
        )}
        <PerfilName>{userPerfil.name}</PerfilName>
      </PerfilPhotosWrapper>

      {/* Big screen */}

      <AnimatePresence>
        {fullScreen && (
          <PhotoFullScreen
            setFullScreen={setFullScreen}
            screenPhoto={screenPhoto}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default PerfilPhotos;
