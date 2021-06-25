import React, { useState, useEffect } from "react";
import Moment from "moment";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

import {
  PubHero,
  PubHeader,
  PubHeaderPerfil,
  PubHeaderUser,
  PubHeaderContainUserStuff,
  PubBody,
  PubImage,
  PubBodyContain
} from "./PubsStyled";
import { Ipublication } from "../../../GlobalInterfaces/DataInterfaces";
import DefaultUser from "../../../public/defaultUser.svg";
import { dataObject } from "../../../GlobalInterfaces/AuthContextInterfaces";
import LikesComments from "./LikesComments/LikesComments";
import DisplayComments from "./DisplayComments/DisplayComments";
import PubOptions from "./Options/PubOptions";
import PhotoFullScreen from "../../PhotoFullScreen/PhotoFullScreen";

interface IpubsProps {
  publication: Ipublication;
  Publications: Ipublication[];
}

const Pubs: React.FC<IpubsProps> = ({ publication, Publications }) => {
  const router = useRouter();

  const [userId, setUserId] = useState<dataObject>({});
  const [maxLength, setMaxLength] = useState<number>(400);
  const [onVideo, setOnVideo] = useState<boolean>(false);

  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [screenPhoto, setScreenPhoto] = useState<string>("");

  useEffect(() => {
    const user: dataObject = JSON.parse(localStorage.getItem("Auth"));
    setUserId(user);
  }, []);

  // Body - Max numbers of characters

  const Body = () => {
    const letter = publication.body.split("").length;

    const maxBody = publication.body.split("").slice(0, maxLength);

    // Show comments

    return (
      <>
        {publication.photo ? (
          <PubBodyContain>
            {maxBody.map((letter, i) => {
              return <React.Fragment key={i}>{letter}</React.Fragment>;
            })}
            {letter > maxLength && (
              <span onClick={() => setMaxLength(letter)}>...Ver más</span>
            )}
          </PubBodyContain>
        ) : (
          <PubBodyContain FontSizeNoImg="1.87rem" fontWeightNoImg={500}>
            {maxBody.map((letter, i) => {
              return <React.Fragment key={i}>{letter}</React.Fragment>;
            })}
            {letter > maxLength && (
              <span onClick={() => setMaxLength(letter)}>...Ver más</span>
            )}
          </PubBodyContain>
        )}
      </>
    );
  };

  const mobileScreen = useMediaQuery({ query: "(max-width: 530px)" });

  // Data from single pub

  return (
    <>
      <PubHero
        theWidth={
          router.pathname.includes("/home")
            ? mobileScreen
              ? "100%"
              : "86%"
            : mobileScreen
            ? "100%"
            : "96%"
        }
        topMargin={
          userId &&
          userId.user &&
          router.pathname.includes("/perfil") &&
          userId.user.id === router.query.id
            ? "2.6rem"
            : "0rem"
        }
      >
        {/* Perfil creator - name - options */}
        <PubHeader>
          <PubHeaderPerfil
            onClick={() =>
              router.push(`/perfil/${publication.creator.identifier}`)
            }
          >
            {publication.creator.perfil ? (
              <div>
                <img src={publication.creator.perfil} alt="" />
              </div>
            ) : (
              <DefaultUser style={{ width: "40px", height: "40px" }} />
            )}
          </PubHeaderPerfil>
          <PubHeaderUser>
            <PubHeaderContainUserStuff>
              <motion.h2
                whileHover={{ textDecoration: "underline" }}
                onClick={() =>
                  router.push(`/perfil/${publication.creator.identifier}`)
                }
              >
                {publication.creator.name}
              </motion.h2>
              <motion.span whileHover={{ textDecoration: "underline" }}>
                {Moment(publication.createdAt).fromNow(true)}
              </motion.span>
            </PubHeaderContainUserStuff>
            {userId &&
              userId.user &&
              userId.user.id === publication.creator.identifier && (
                <PubOptions publication={publication} UserId={userId.user.id} Publications={Publications} />
              )}
          </PubHeaderUser>
        </PubHeader>
        {/* Body */}
        {publication.body && (
          <PubBody>
            <Body />
          </PubBody>
        )}

        {/* Image */}
        {publication.photo && (
          <PubImage>
            {publication.photo.split("")[5] === "v" ? (
              <video
                controls={onVideo}
                onMouseOver={() => setOnVideo(true)}
                onMouseOut={() => setOnVideo(false)}
              >
                <source src={publication.photo} />
              </video>
            ) : (
              <img
                src={publication.photo}
                alt=""
                onClick={() => {
                  setScreenPhoto(publication.photo);
                  setFullScreen(true);
                  document.body.style.overflow = "hidden";
                }}
              />
            )}
          </PubImage>
        )}
        {/* Comments - likes */}
        <LikesComments Publications={Publications} publication={publication} />
        {/* Display comments */}
        <DisplayComments
          publication={publication}
          Publications={Publications}
        />
      </PubHero>

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

export default Pubs;
