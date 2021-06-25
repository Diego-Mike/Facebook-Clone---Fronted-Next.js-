import { FC, SetStateAction, Dispatch } from "react";

import {
  FullScreenHero,
  CloseFullScreen,
  CloseFullScreenIcon,
  FullScreenWrapper
} from "./PhotoFullScreenStyled";

interface IFullScreen {
  screenPhoto: string;
  setFullScreen: Dispatch<SetStateAction<boolean>>;
}

const PhotoFullScreen: FC<IFullScreen> = ({ screenPhoto, setFullScreen }) => {
  // Framer motion - PopUp

  const PopUp = {
    hidden: { y: -1000 },
    visible: { y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.4 } }
  };

  const PopUpIcon = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.55, duration: 0.3 } }
  };

  const PopUpImg = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.8, duration: 0.4 } }
  };

  return (
    <FullScreenHero
      variants={PopUp}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <CloseFullScreen
        variants={PopUpIcon}
        initial="hidden"
        animate="visible"
        onClick={() => {
          setFullScreen(false);
          document.body.style.overflow = "auto";
        }}
      >
        <CloseFullScreenIcon />
      </CloseFullScreen>
      <FullScreenWrapper variants={PopUpImg} initial="hidden" animate="visible">
        <img src={screenPhoto} alt="" />
      </FullScreenWrapper>
    </FullScreenHero>
  );
};

export default PhotoFullScreen;
